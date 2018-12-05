# Country Flag Emoji JSON

[![Build Status](https://flat.badgen.net/travis/risan/country-flag-emoji-json)](https://travis-ci.org/risan/country-flag-emoji-json)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/country-flag-emoji-json)](https://codeclimate.com/github/risan/country-flag-emoji-json)
[![Latest Stable Version](https://flat.badgen.net/npm/v/country-flag-emoji-json)](https://www.npmjs.com/package/country-flag-emoji-json)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/country-flag-emoji-json)](https://github.com/risan/country-flag-emoji-json/blob/master/LICENSE)

Country flag emojis in JSON format.

## Country Flag Emoji JSON CDN

Check the [json directory](https://github.com/risan/country-flag-emoji-json/tree/master/json) to see all available JSON files. The JSON files are also available through [UNPKG](https://unpkg.com/) CDN.

* Flag emojis: [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.pretty.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.pretty.json)
* Flag emojis (minified): [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis.json)

```json
[
  ...
  {
    "code": "ID",
    "unicode": "U+1F1EE U+1F1E9",
    "name": "Indonesia",
    "emoji": "🇮🇩"
  },
  ...
]
```

* Flag emojis keyed by country code: [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.pretty.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.pretty.json)
* Flag emojis keyed by country code (minified): [unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.json](https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.json)

```json
{
  ...
  "ID": {
    "code": "ID",
    "unicode": "U+1F1EE U+1F1E9",
    "name": "Indonesia",
    "emoji": "🇮🇩"
  },
  ...
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

# Or if you use Yarn
$ yarn
```

### 3. Generate the JSON Files

Run the following command to generate the JSON files:

```bash
$ npm run build

# Or if you use Yarn
$ yarn build
```

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

> Emojis data used to generate the JSON files are provided by the [Unicode Consortium](https://www.unicode.org/).
>
> Copyright © 1991-2018 Unicode, Inc. All rights reserved.
>
> By using this package you agree to the [Unicode Terms of Use](https://www.unicode.org/copyright.html).
