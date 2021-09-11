const fs = require('fs-extra');
const axios = require('axios');

const downloadEmojiSequences = async () => {
  const file = 'data/emoji-sequences.txt';
  const exists = await fs.pathExists(file);

  if (exists) {
    return;
  }

  console.log('+ Downloading emoji sequences...');

  const res = await axios.get('https://unicode.org/Public/emoji/14.0/emoji-sequences.txt');

  await fs.outputFile(file, res.data);
};

(async () => {
  const args = process.argv.slice(2);

  if (args.length > 0 && args[0] === '--clean') {
    await fs.emptyDir('data');
  }

  await downloadEmojiSequences();

  console.log('✓ Done');
})();