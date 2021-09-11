# Country Flag Emoji JSON

[![Latest Version](https://badgen.net/npm/v/country-flag-emoji-json)](https://www.npmjs.com/package/country-flag-emoji-json)

Country flag emojis in JSON format and SVG image.

## CDN

Check out the [`/dist`](https://github.com/risan/country-flag-emoji-json/tree/master/dist) directory to see all available JSON files and SVG images. All These files are also available through [JSDELIVR](https://www.jsdelivr.com/package/npm//country-flag-emoji-json?path=dist) CDN.

### List of Country Flag Emojis

You can use the following URL to get a list of all country flag emojis:

- [`cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json`](https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json)

```js
[
  {
    "name": "Ascension Island",
    "code": "AC",
    "emoji": "🇦🇨",
    "unicode": "U+1F1E6 U+1F1E8",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg"
  },
  // More items...
  {
    "name": "Indonesia",
    "code": "ID",
    "emoji": "🇮🇩",
    "unicode": "U+1F1EE U+1F1E9",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"
  },
  // More items...
]
```

- `name`: The country name
- `code`: The country code based on [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- `emoji`: The country flag emoji
- `unicode`: The unicode code points for presenting the emoji flag
- `image`: The country flag SVG image url

### List of Country Flag Emojis by Country Code

If you prefer the list to be keyed by the country code, use the following URL:

- [`cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json`](https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json)

```js
{
  "AC": {
    "name": "Ascension Island", 
    "emoji": "🇦🇨", 
    "unicode": "U+1F1E6 U+1F1E8", 
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg"
  },
  // More items...
  "ID": {
    "name": "Indonesia",
    "emoji": "🇮🇩",
    "unicode": "U+1F1EE U+1F1E9",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"
  },
  // More items...
}
```

### Country Code for Subdivision Flags

As of 2021, there are three subdivision flags included: England, Scotland, and Wales. These countries are not listed on [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), thus three of them listed with a non-standard `code` field:

```js
[
  // More items...
  {
    "name": "England",
    "code": "ENGLAND",
    "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "unicode": "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg"
  },
  {
    "name": "Scotland",
    "code": "SCOTLAND",
    "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "unicode": "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg"
  },
  {
    "name": "Wales",
    "code": "WALES",
    "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "unicode": "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg"
  }
]
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

- [country-flag-emoji](https://github.com/risan/country-flag-emoji): List of country codes and its flag emojis.

## Data Source

- Emojis data used to generate the JSON files are provided by the [Unicode Consortium](https://www.unicode.org/).
- All country flag SVG images are designed by [OpenMoji](https://openmoji.org/) – the open-source emoji and icon project. License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## License

[CC-BY-SA 4.0](https://github.com/risan/country-flag-emoji-json/blob/master/LICENSE.txt) · [Risan Bagja Pradana](https://risanb.com)
