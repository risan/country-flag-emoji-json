#!/usr/bin/env node
const fs = require('node:fs/promises');
const meta = require('../package.json');

const OPENMOJI_VERSION = '17.0.0';
const REGIONAL_INDICATOR_OFFSET = 0x1F1A5; // U+1F1E6 (🇦) - 0x41 ("A")
const TAG_OFFSET = 0xE0000; // U+E0067 (TAG LATIN SMALL LETTER G) - 0x67 ("g")

// v2 used the uppercased name as the code for subdivision flags. Keep those
// image paths alive so unpinned CDN URLs do not break.
const LEGACY_IMAGE_ALIASES = {
  'GB-ENG': 'ENGLAND',
  'GB-SCT': 'SCOTLAND',
  'GB-WLS': 'WALES',
};

const toCode = (codePoints) => {
  if (codePoints.length === 2) {
    return codePoints
      .map((codePoint) => String.fromCodePoint(codePoint - REGIONAL_INDICATOR_OFFSET))
      .join('');
  }

  // Tag sequence: 🏴 + tag letters + CANCEL TAG, e.g. "gbeng" -> ISO 3166-2 "GB-ENG".
  const tags = codePoints
    .slice(1, -1)
    .map((codePoint) => String.fromCodePoint(codePoint - TAG_OFFSET))
    .join('')
    .toUpperCase();

  return `${tags.slice(0, 2)}-${tags.slice(2)}`;
};

const parseFlagEmojis = async () => {
  const data = await fs.readFile('data/emoji-sequences.txt', 'utf8');

  return data
    .split('\n')
    .map((row) => row.split(';').map((col) => col.trim()))
    .filter((cols) => {
      return cols.length >= 3 && ['RGI_Emoji_Flag_Sequence', 'RGI_Emoji_Tag_Sequence'].includes(cols[1]);
    })
    .map((cols) => {
      const codePoints = cols[0].split(' ').map((hex) => Number(`0x${hex}`));
      const code = toCode(codePoints);

      return {
        name: cols[2].split('#')[0].replace('flag:', '').trim(),
        code,
        emoji: String.fromCodePoint(...codePoints),
        unicode: codePoints.map((codePoint) => `U+${codePoint.toString(16).toUpperCase()}`).join(' '),
        image: `https://cdn.jsdelivr.net/npm/${meta.name}@${meta.version}/dist/images/${code}.svg`,
      };
    });
};

const writeJson = async (file, data, pretty) => {
  await fs.writeFile(file, JSON.stringify(data, null, pretty ? 2 : 0));
};

const downloadImage = async (emoji) => {
  const filename = `${emoji.unicode.replace(/U\+/g, '').replace(/\s/g, '-')}.svg`;
  const file = `data/images/${filename}`;

  const exists = await fs.access(file).then(() => true, () => false);

  if (!exists) {
    console.log(`+ Downloading flag image: [${emoji.code}]...`);

    const res = await fetch(`https://cdn.jsdelivr.net/npm/openmoji@${OPENMOJI_VERSION}/color/svg/${filename}`);

    if (!res.ok) {
      throw new Error(`Failed to download ${filename}: HTTP ${res.status}`);
    }

    await fs.writeFile(file, await res.text());
  }

  return file;
};

const buildImages = async (emojis) => {
  await fs.mkdir('data/images', { recursive: true });
  await fs.mkdir('dist/images', { recursive: true });

  for (const emoji of emojis) {
    const source = await downloadImage(emoji);

    await fs.copyFile(source, `dist/images/${emoji.code}.svg`);

    if (LEGACY_IMAGE_ALIASES[emoji.code]) {
      await fs.copyFile(source, `dist/images/${LEGACY_IMAGE_ALIASES[emoji.code]}.svg`);
    }
  }
};

(async () => {
  const pretty = process.argv.includes('--pretty');

  await fs.rm('dist', { recursive: true, force: true });
  await fs.mkdir('dist');

  const emojis = await parseFlagEmojis();

  await writeJson('dist/index.json', emojis, pretty);
  await writeJson(
    'dist/by-code.json',
    Object.fromEntries(emojis.map(({ code, ...emoji }) => [code, emoji])),
    pretty
  );
  await buildImages(emojis);

  console.log(`✓ Built ${emojis.length} flags`);
})();
