import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
    host: true
  }),
  server: {
    port: 3000,
    host: true
  },
  vite: {
    envPrefix: ['PUBLIC_'],
    ssr: {
      noExternal: ['nodemailer']
    }
  }
});