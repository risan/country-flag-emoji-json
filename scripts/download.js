#!/usr/bin/env node
const fs = require('node:fs/promises');

const UNICODE_VERSION = '18.0.0';
const SEQUENCES_FILE = 'data/emoji-sequences.txt';

const downloadEmojiSequences = async () => {
  console.log(`+ Downloading Unicode ${UNICODE_VERSION} emoji sequences...`);

  const res = await fetch(`https://unicode.org/Public/${UNICODE_VERSION}/emoji/emoji-sequences.txt`);

  if (!res.ok) {
    throw new Error(`Failed to download emoji sequences: HTTP ${res.status}`);
  }

  await fs.mkdir('data', { recursive: true });
  await fs.writeFile(SEQUENCES_FILE, await res.text());
};

(async () => {
  if (process.argv.includes('--clean')) {
    await fs.rm('data', { recursive: true, force: true });
  }

  await downloadEmojiSequences();

  console.log('✓ Done');
})();
