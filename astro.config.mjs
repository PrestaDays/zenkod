import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zenkod.fr',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
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