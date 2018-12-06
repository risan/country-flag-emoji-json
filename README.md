# Country Flag Emoji JSON

[![Build Status](https://badgen.net/travis/risan/npm-boilerplate-node-browser)](https://travis-ci.org/risan/npm-boilerplate-node-browser)
[![Greenkeeper](https://badges.greenkeeper.io/risan/npm-boilerplate-node-browser.svg)](https://greenkeeper.io)
[![Latest Version](https://badgen.net/npm/v/npm-boilerplate-node-browser)](https://www.npmjs.com/package/npm-boilerplate-node-browser)

Country flag emojis in JSON format.

## CDN

The JSON files are available over a CDN:

* Flag emojis: [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.pretty.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.pretty.json)
* Flag emojis (minified): [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.json)

```json
[
  {
    "code": "ID",
    "unicode": "U+1F1EE U+1F1E9",
    "name": "Indonesia",
    "emoji": "🇮🇩"
  },
]
```

* Flag emojis keyed by country code: [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.pretty.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.pretty.json)
* Flag emojis keyed by country code (minified): [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.json)

```json
{
  "ID": {
    "code": "ID",
    "unicode": "U+1F1EE U+1F1E9",
    "name": "Indonesia",
    "emoji": "🇮🇩"
  },
}
```

## Generate the JSON

If you want to generate the JSON files by yourself:

### 1. Clone the Repository

Clone this repository to your local computer:

```bash
$ git clone git@github.com:risan/country-flag-emoji-json.git
```

### 2. Install the Dependencies

`CD` into the project directory and install the dependencies:

```bash
# Go to the project directory
$ cd country-flag-emoji-json

# Install the dependencies
$ npm install
```

### 3. Generate the JSON Files

Run the following command to generate the JSON files:

```bash
$ npm run build
```

## Related

* [country-flag-emoji](https://github.com/risan/country-flag-emoji): List of country codes and its flag emojis.

## License

[MIT](https://github.com/risan/country-flag-emoji-json/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)

> Emojis data used to generate the JSON files are provided by the [Unicode Consortium](https://www.unicode.org/).
>
> Copyright © 1991-2018 Unicode, Inc. All rights reserved.
>
> By using this package you agree to the [Unicode Terms of Use](https://www.unicode.org/copyright.html).
