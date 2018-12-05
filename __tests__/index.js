/* global expect:false, test:false */
const fs = require("fs");
const path = require("path");
const util = require("util");

const access = util.promisify(fs.access);
const readFile = util.promisify(fs.readFile);

const jsonPath = p => path.resolve(__dirname, `../json`, p);

const isJsonExists = async p => {
  await access(jsonPath(p), fs.constants.F_OK);

  return true;
};

const readJson = async p => {
  const text = await readFile(jsonPath(p), "utf8");

  return JSON.parse(text);
};

test("it generate two json files", async () => {
  const res1 = await isJsonExists("flag-emojis.json");
  expect(res1).toBe(true);

  const res2 = await isJsonExists("flag-emojis.pretty.json");
  expect(res2).toBe(true);

  const res3 = await isJsonExists("flag-emojis-by-code.json");
  expect(res3).toBe(true);

  const res4 = await isJsonExists("flag-emojis-by-code.pretty.json");
  expect(res4).toBe(true);
});

test("the json files contain list of country flag emojis", async () => {
  const emojis1 = await readJson("flag-emojis.json");
  expect(emojis1).toHaveLength(258);

  const props1 = Object.keys(emojis1[0]);
  expect(props1).toEqual(["code", "unicode", "name", "emoji"]);

  const emojis2 = await readJson("flag-emojis.pretty.json");
  expect(emojis2).toHaveLength(258);

  const props2 = Object.keys(emojis2[0]);
  expect(props2).toEqual(["code", "unicode", "name", "emoji"]);

  const emojis3 = await readJson("flag-emojis-by-code.json");
  expect(Object.keys(emojis3)).toHaveLength(258);

  const emojis4 = await readJson("flag-emojis-by-code.pretty.json");
  expect(Object.keys(emojis4)).toHaveLength(258);
});
