// One-off generator for public/og.png (1200x630). Run: node scripts/make-og.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const flagCodes = ['ID', 'JP', 'BR', 'DE', 'KE', 'IN', 'CA', 'KR', 'MX', 'SE'];
const flagSize = 104;
const flagGap = 0;
const left = 80;

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <text x="${left}" y="250" font-family="DejaVu Sans Mono, monospace" font-weight="bold" font-size="64" fill="#18181b">country-flag-emoji-json</text>
  <text x="${left}" y="316" font-family="DejaVu Sans, Arial, sans-serif" font-size="32" fill="#52525b">262 country flag emojis as JSON, with an SVG image for each.</text>
  <text x="${left}" y="560" font-family="DejaVu Sans Mono, monospace" font-size="24" fill="#8b8b94">country-flag-emoji.risanb.com</text>
</svg>`);

const mark = await sharp(readFileSync(new URL('../public/favicon.svg', import.meta.url)), { density: 600 }).resize(72, 72).png().toBuffer();

const flags = await Promise.all(
  flagCodes.map(async (code, index) => {
    const svg = readFileSync(new URL(`../../dist/images/${code}.svg`, import.meta.url));
    const input = await sharp(svg, { density: 300 }).resize(flagSize, flagSize, { fit: 'contain', background: '#00000000' }).png().toBuffer();

    return { input, left: Math.round(left - 7 + index * (flagSize + flagGap)), top: 360 };
  }),
);

writeFileSync(
  new URL('../public/og.png', import.meta.url),
  await sharp(background)
    .composite([{ input: mark, left, top: 96 }, ...flags])
    .png({ compressionLevel: 9 })
    .toBuffer(),
);
