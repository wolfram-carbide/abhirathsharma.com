import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import remarkDirective from 'remark-directive';
import { remarkAside } from './src/plugins/remark-aside.mjs';

export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkAside],
    shikiConfig: {
      theme: 'github-light',
    },
  },
  redirects: {
    '/': '/writing/',
  },
});
