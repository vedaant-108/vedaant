import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vedaant-108.github.io',
  base: '/vedaant',
  integrations: [tailwind(), mdx()],
  output: 'static',
});
