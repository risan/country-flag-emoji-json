import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface Flag {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
}

const root = resolve(process.cwd(), '..');

export const flags: Flag[] = JSON.parse(readFileSync(resolve(root, 'dist/index.json'), 'utf8'));

export const version: string = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8')).version;

export const cdn = `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@${version}/dist`;

export const repoUrl = 'https://github.com/risan/country-flag-emoji-json';

export const npmUrl = 'https://www.npmjs.com/package/country-flag-emoji-json';

export const authorUrl = 'https://risanb.com';

export const description =
  'Country flag emojis as JSON, with a matching SVG image for every flag. 262 flags with name, ISO code, emoji and Unicode, ready to use from a CDN or npm.';

export function normalize(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}
