// One-off generator for public/og.png (1200x630). Run: node scripts/make-og.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const flagCodes = ['ID', 'JP', 'BR', 'FR', 'DE', 'US', 'KE', 'IN', 'CA', 'AU', 'ES', 'IT', 'MX', 'NG', 'KR', 'EU'];
const size = 110;
const gap = 18;
const columns = 8;
const gridLeft = 600 - (columns * size + (columns - 1) * gap) / 2;
const gridTop = 345;

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1f1e"/>
      <stop offset="1" stop-color="#10302d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="600" y="130" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#5eead4" letter-spacing="3">NPM PACKAGE</text>
  <text x="600" y="215" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-weight="bold" font-size="62" fill="#ffffff">country-flag-emoji-json</text>
  <text x="600" y="282" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#b6c9c7">262 country flags as JSON, with SVG images</text>
</svg>`);

const flags = await Promise.all(
  flagCodes.map(async (code, index) => {
    const svg = readFileSync(new URL(`../../dist/images/${code}.svg`, import.meta.url));
    const input = await sharp(svg, { density: 300 }).resize(size, size, { fit: 'contain', background: '#00000000' }).png().toBuffer();

    return {
      input,
      left: Math.round(gridLeft + (index % columns) * (size + gap)),
      top: Math.round(gridTop + Math.floor(index / columns) * (size + gap)),
    };
  }),
);

writeFileSync(
  new URL('../public/og.png', import.meta.url),
  await sharp(background).composite(flags).png({ compressionLevel: 9 }).toBuffer(),
);
