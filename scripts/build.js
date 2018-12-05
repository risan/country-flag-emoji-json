#!/usr/bin/env node
/* eslint no-console: "off" */
const cleanJsonDir = require("./clean-json-dir");
const processFlagEmojis = require("./process-flag-emojis");

(async () => {
  try {
    console.log("Cleaning JSON dir...");
    await cleanJsonDir();

    console.log("Processing flag emojis...");
    await processFlagEmojis();
  } catch (error) {
    console.error(error.message);
  }
})();
