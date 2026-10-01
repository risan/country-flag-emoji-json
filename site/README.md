# Documentation site

One-page Astro site for `country-flag-emoji-json`. It reads `../dist/index.json` at build time and copies `../dist/images/*.svg` into `public/images/` (gitignored) before every `dev` and `build`.

```sh
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the build locally
npm run deploy     # build and publish with wrangler (Cloudflare Workers static assets)
```

Set `SITE_URL` to override the canonical domain (default in `astro.config.mjs`). Regenerate the social image with `node scripts/make-og.mjs`.
