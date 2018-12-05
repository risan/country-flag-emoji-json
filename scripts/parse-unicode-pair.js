/**
 * Convert hex string to integer.
 *
 * @param {String} hex
 * @return {Number}
 */
const hexToInt = hex => parseInt(hex, 16);

const A_INT = hexToInt("1F1E6");

const CHARS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

/**
 * Hex string to regional indicator symbols letter.
 *
 * @param {String} hex
 * @return {String}
 */
const hexToChar = hex => {
  const idx = hexToInt(hex) - A_INT;

  return CHARS[idx];
};

/**
 * Parse unicode hex string pair.
 *
 * @param {String} first
 * @param {String} second
 * @return {Object}
 */
const parseUnicodePair = ([first, second]) => ({
  code: `${hexToChar(first)}${hexToChar(second)}`,
  unicode: `U+${first.toUpperCase()} U+${second.toUpperCase()}`
});

module.exports = parseUnicodePair;
