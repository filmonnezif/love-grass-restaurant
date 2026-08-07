// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://love-grass.com',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
