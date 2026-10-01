import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://country-flag-emoji-json.risanb.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
