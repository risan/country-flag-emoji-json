import { cpSync, mkdirSync, rmSync } from 'node:fs';

const source = new URL('../../dist/images/', import.meta.url);
const target = new URL('../public/images/', import.meta.url);

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });
