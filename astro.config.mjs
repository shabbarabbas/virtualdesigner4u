// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Deployment targets are controlled with two env vars so the same codebase can
 * ship to a custom domain, a project page, or a preview host without edits:
 *
 *   SITE_URL   Absolute origin used for canonical URLs, OG tags and the sitemap.
 *   BASE_PATH  Sub-path the site is served from. Use '/' for a custom domain
 *              (virtualdesigner4u.com) or '/repo-name/' for GitHub project pages.
 */
const SITE_URL = process.env.SITE_URL ?? 'https://virtualdesigner4u.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',

  // Static output — required for GitHub Pages.
  output: 'static',

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  // Prefetch links as they enter the viewport for instant navigation.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },

  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
