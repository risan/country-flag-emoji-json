# Country Flag Emoji JSON

[![Latest Version](https://badgen.net/npm/v/country-flag-emoji-json)](https://www.npmjs.com/package/country-flag-emoji-json)
[![jsDelivr](https://badgen.net/jsdelivr/hits/npm/country-flag-emoji-json)](https://www.jsdelivr.com/package/npm/country-flag-emoji-json)

Country flag emojis in JSON format and SVG images. 262 flags from [Unicode 18.0](https://www.unicode.org/emoji/charts/emoji-list.html#country-flag), with SVG images from [OpenMoji](https://openmoji.org/).

## Files

All files live in the [`dist`](https://github.com/risan/country-flag-emoji-json/tree/main/dist) directory. They are served by the [jsDelivr](https://www.jsdelivr.com/package/npm/country-flag-emoji-json?path=dist) CDN:

| File | URL |
| --- | --- |
| List of flags | [`cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/index.json`](https://cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/index.json) |
| Flags keyed by code | [`cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/by-code.json`](https://cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/by-code.json) |
| SVG image | [`cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/images/ID.svg`](https://cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/images/ID.svg) |

Always pin the version in the URL. An unpinned URL follows the latest release, which can contain breaking changes.

Or install it from npm:

```bash
npm install country-flag-emoji-json
```

```js
// CommonJS
const flags = require('country-flag-emoji-json');
const flagsByCode = require('country-flag-emoji-json/dist/by-code.json');

// ES modules (Node.js 18.20+ or a bundler)
import flags from 'country-flag-emoji-json' with { type: 'json' };
import flagsByCode from 'country-flag-emoji-json/dist/by-code.json' with { type: 'json' };
```

### `index.json`

```js
[
  {
    "name": "Indonesia",
    "code": "ID",
    "emoji": "🇮🇩",
    "unicode": "U+1F1EE U+1F1E9",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/images/ID.svg"
  },
  // More items...
]
```

| Field | Description |
| --- | --- |
| `name` | The country or region name, from the Unicode [CLDR](https://cldr.unicode.org/) short names |
| `code` | The country code, mostly [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). See [Special codes](#special-codes) |
| `emoji` | The flag emoji |
| `unicode` | The Unicode code points of the emoji |
| `image` | The URL of the flag SVG image |

### `by-code.json`

The same data, keyed by `code`:

```js
{
  "ID": {
    "name": "Indonesia",
    "emoji": "🇮🇩",
    "unicode": "U+1F1EE U+1F1E9",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@3.0.0/dist/images/ID.svg"
  },
  // More items...
}
```

## Special codes

Unicode has flags for a few regions that are not regular ISO 3166-1 countries:

| Code | Region | Why |
| --- | --- | --- |
| `AC`, `CP`, `CQ`, `DG`, `EA`, `IC`, `TA` | Ascension Island, Clipperton Island, Sark, Diego Garcia, Ceuta & Melilla, Canary Islands, Tristan da Cunha | Exceptionally reserved ISO codes |
| `EU`, `UN` | European Union, United Nations | Exceptionally reserved ISO codes |
| `XK` | Kosovo | User-assigned code, widely used for Kosovo |
| `GB-ENG`, `GB-SCT`, `GB-WLS` | England, Scotland, Wales | [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2:GB) subdivision codes |

## Flags on Windows

Windows does not include flag emoji glyphs. So `🇮🇩` shows as the letters "ID". There are two fixes:

1. Show the SVG `image` instead of the emoji.
2. Load the [country-flag-emoji-polyfill](https://github.com/talkjs/country-flag-emoji-polyfill). It adds a flag-only web font, and only when the browser needs it:

```js
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

polyfillCountryFlagEmojis();
```

```css
body {
  font-family: "Twemoji Country Flags", system-ui, sans-serif;
}
```

## Upgrading from v2

- England, Scotland, and Wales now use ISO 3166-2 codes: `GB-ENG`, `GB-SCT`, and `GB-WLS`. They were `ENGLAND`, `SCOTLAND`, and `WALES`. The old image files (`ENGLAND.svg` and others) still exist.
- New flag: Sark (`CQ`).
- Names follow Unicode 18.0. For example, `Turkey` is now `Türkiye`.
- SVG images are updated to OpenMoji 17.0.0.

## Generate the files

The build needs Node.js 18 or newer and has no dependencies.

```bash
git clone git@github.com:risan/country-flag-emoji-json.git
cd country-flag-emoji-json

# Download the Unicode emoji data into data/
npm run download

# Generate dist/; flag images are cached in data/openmoji-<version>/
npm run build
```

## Related

- [country-flag-emoji](https://github.com/risan/country-flag-emoji): List of country codes and its flag emojis.

## Data Source

- Emoji data is provided by the [Unicode Consortium](https://www.unicode.org/).
- All flag SVG images are designed by [OpenMoji](https://openmoji.org/), the open-source emoji and icon project. License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## License

[CC BY-SA 4.0](https://github.com/risan/country-flag-emoji-json/blob/main/LICENSE.txt) · [Risan Bagja Pradana](https://risanb.com)
