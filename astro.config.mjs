// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dunkstormen.dk',
  base: 'home',
  adapter: cloudflare(),
  integrations: [react(), tailwind()]
});