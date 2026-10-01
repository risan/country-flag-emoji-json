import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://country-flag-emoji.risanb.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
