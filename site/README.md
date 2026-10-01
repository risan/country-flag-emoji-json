# Documentation site

One-page Astro site for `country-flag-emoji-json`. It reads `../dist/index.json` at build time and copies `../dist/images/*.svg` into `public/images/` (gitignored) before every `dev` and `build`.

```sh
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the build locally
npm run deploy     # build and publish with wrangler (Cloudflare Workers static assets)
```

Set `SITE_URL` to the public URL of the site (default in `astro.config.mjs`). It is used for the canonical link, Open Graph tags, sitemap and robots.txt. Regenerate the social image with `node scripts/make-og.mjs`.

## Deploy with Cloudflare Workers Builds

Connect the GitHub repository to a Worker in the Cloudflare dashboard with these settings:

| Setting | Value |
| --- | --- |
| Worker name | `country-flag-emoji` (must match `name` in `wrangler.toml`) |
| Production branch | `main` |
| Root directory | `site` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build variable | `SITE_URL` = the site's public URL, e.g. `https://country-flag-emoji.<subdomain>.workers.dev` |

Node.js 24 is pinned in `.node-version`.
