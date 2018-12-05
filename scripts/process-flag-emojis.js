/* eslint import/no-extraneous-dependencies: "off" */
const fs = require("fs");
const util = require("util");
const keyBy = require("lodash.keyby");

const parseUnicodePair = require("./parse-unicode-pair");
const writeJson = require("./write-json");

const readFile = util.promisify(fs.readFile);

/**
 * Process flag emojis.
 *
 * @return {Promise}
 */
const processFlagEmojis = async () => {
  const emojisText = await readFile(`data/emoji-sequences.txt`, "utf8");

  const emojis = emojisText
    .split("\n")
    .filter(Boolean)
    .map(line => {
      const [unicodePair, , description] = line.split(";");

      const [name, comment] = description.split("#");

      const { code, unicode } = parseUnicodePair(unicodePair.split(" "));

      return {
        code,
        unicode,
        name: name.trim(),
        emoji: comment.slice(-5, -1)
      };
    });

  await writeJson(emojis, "flag-emojis.json");

  await writeJson(keyBy(emojis, "code"), "flag-emojis-by-code.json");

  return emojis;
};

module.exports = processFlagEmojis;
