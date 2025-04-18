// @ts-check
import { defineConfig } from 'astro/config';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    playformCompress(), 
    sitemap(), 
    prefetch(), 
    partytown(), 
    icon(), 
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }), 
    mdx(), 
    react(), 
    vue()
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});