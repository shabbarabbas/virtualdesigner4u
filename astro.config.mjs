// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cookieconsent from "@jop-software/astro-cookieconsent";

/**
 * Deployment targets are controlled with two env vars so the same codebase can
 * ship to a custom domain, a project page, or a preview host without edits:
 *
 *   SITE_URL   Absolute origin used for canonical URLs, OG tags and the sitemap.
 *   BASE_PATH  Sub-path the site is served from. Use '/' for a custom domain
 *              (virtualdesigner4u.com) or '/repo-name/' for GitHub project pages.
 */
const SITE_URL = process.env.SITE_URL ?? "https://virtualdesigner4u.com";
const BASE_PATH = process.env.BASE_PATH ?? "/";

/** Base-aware internal link, mirroring `href()` in src/lib/utils.ts. */
const link = (/** @type {string} */ path) =>
  `${BASE_PATH.replace(/\/$/, "")}${path}`;

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: "ignore",

  // Static output — required for GitHub Pages.
  output: "static",

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    cookieconsent(
      /**
       * The integration types its argument loosely, so pin it to the upstream
       * type for real checking and completions in this object. `@satisfies`
       * rather than `@type` — the latter is an assertion and would not flag
       * misspelled or misplaced options.
       *
       * @satisfies {import('vanilla-cookieconsent').CookieConsentConfig}
       */
      ({
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        functionality: {},
        analytics: {
          enabled: true,
          services: {
            ga4: {
              label:
                '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer">Google Analytics 4</a>',
              // A Service takes `cookies` directly; `autoClear` is a Category-
              // level option. These are cleared when GA4 is rejected.
              cookies: [{ name: "_ga" }, { name: "_gid" }],
            },
          },
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "This site uses cookies",
              description:
                "Essential cookies keep the site working. Optional analytics cookies help me see which pages are useful so I can improve them. Nothing is shared with advertisers.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject optional",
              showPreferencesBtn: "Manage preferences",
              footer: `<a href="${link("/privacy")}">Privacy policy</a>`,
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject optional",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",

              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    "We use cookies to ensure the basic functionality of the site and to enhance your online experience. You can choose which categories of cookies you want to allow.",
                },
                {
                  title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description:
                    "Required for the site to function — they remember your theme choice and your cookie decision. These cannot be turned off.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Anonymous page-view statistics that show which articles and case studies people actually read. Disabled until you opt in.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Functionality Cookies",
                  description:
                    "Cookies that enhance your experience on the site, such as remembering your preferences and settings. You can choose to enable or disable these cookies.",
                  linkedCategory: "functionality",
                },
                {
                  title: "More information",
                  description: `Read the full <a href="${link("/privacy")}">privacy policy</a> for details on what is stored and for how long.`,
                },
              ],
            },
          },
        },
      },
      })
    ),
  ],

  // Prefetch links as they enter the viewport for instant navigation.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  image: {
    responsiveStyles: true,
    layout: "constrained",
  },

  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-dimmed" },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
