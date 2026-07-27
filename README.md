# Shabbar Abbas — Portfolio

A fast, accessible, statically generated portfolio built with **Astro 5**, **Tailwind CSS 4**
and **TypeScript**, deployed to **GitHub Pages**.

- Dark-first design with a light theme toggle (no flash of wrong theme)
- Content-driven: projects, blog posts, services, testimonials and FAQs live in Markdown
- Zero client-side framework — only a few kilobytes of hand-written JavaScript
- WCAG AA contrast, full keyboard support, and complete `prefers-reduced-motion` handling
- SEO: canonical URLs, Open Graph, Twitter cards, JSON-LD `@graph`, sitemap and RSS

---

## Requirements

- **Node.js 20.3+** (22 LTS recommended)
- npm 10+

## Getting started

```bash
npm install
cp .env.example .env      # then fill in your values
npm run dev               # http://localhost:4321
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`astro check`) then build to `dist/` |
| `npm run build:fast` | Build without the type-check step |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check only |
| `npm run placeholders` | Regenerate placeholder artwork in `public/` |

---

## Project structure

```
public/                 Static assets served as-is (images, icons, CNAME)
scripts/
  generate-placeholders.mjs   Deterministic SVG artwork generator
src/
  components/
    cards/              Project, service, testimonial, post and skill cards
    forms/              Contact form
    layout/             Navbar, Footer
    sections/           Hero, PageHeader, CTA, Timeline, Accordion, marquee
    seo/                BaseHead — meta tags and structured data
    ui/                 Button, Icon, Tag, Prose, Gallery, Pagination, …
  config/               All editable site content that is not Markdown
  content/              Markdown collections: projects, posts, services, …
  layouts/              BaseLayout
  lib/                  Utilities, content queries, JSON-LD builders, motion
  pages/                File-based routes
  styles/global.css     Design tokens, base styles, primitives, animations
  types/                Shared TypeScript types
```

### Where to edit what

| I want to change… | Edit |
| --- | --- |
| Name, bio, stats, socials, process, values | `src/config/personal.ts` |
| Site title, description, OG image, form provider, analytics | `src/config/site.ts` |
| Menus and footer columns | `src/config/navigation.ts` |
| Skill categories and proficiency levels | `src/config/skills.ts` |
| Job history and milestones | `src/config/experience.ts` |
| Contact form service options | `src/config/contact-options.ts` |
| Colours, typography, spacing, motion | `src/styles/global.css` |
| A project case study | `src/content/projects/*.md` |
| A blog post | `src/content/posts/*.md` |
| A service | `src/content/services/*.md` |
| A testimonial | `src/content/testimonials/*.md` |
| An FAQ | `src/content/faqs/*.md` |

Every collection is schema-validated in `src/content.config.ts`. If a required field is
missing or mistyped, the build fails with an explicit message rather than rendering
something broken.

Set `draft: true` on any project or post to keep it visible in `npm run dev` but excluded
from production builds.

---

## Contact form

The form is provider-agnostic and configured in one place — `contactForm` in
`src/config/site.ts`:

```ts
provider: 'web3forms',   // 'web3forms' | 'formspree' | 'formsubmit'
endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
```

1. Sign up with your chosen provider.
2. Put the key or endpoint in `.env` as `PUBLIC_FORM_ENDPOINT`.
3. For GitHub Actions, add the same value as a repository **variable** (not a secret —
   it is embedded in the built HTML by design and is safe to expose), then reference it
   in the workflow's build step.

The form works without JavaScript (it posts directly to the provider) and is progressively
enhanced to submit via `fetch` when JS is available. A honeypot field blocks basic spam
bots without a CAPTCHA.

---

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

**One-time setup:**

1. Push the repository to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The first run creates the deployment.

### Custom domain

`public/CNAME` contains `virtualdesigner4u.com`, which GitHub reads on each deploy.

At your DNS provider, point the apex domain at GitHub's IPs:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  <your-username>.github.io
```

Then enable **Enforce HTTPS** in Settings → Pages once the certificate is issued.

### Deploying to a project site instead

If you are serving from `username.github.io/repo-name`:

1. Delete `public/CNAME`.
2. In `.github/workflows/deploy.yml`, change the build environment to:

   ```yaml
   SITE_URL: https://<username>.github.io
   BASE_PATH: /repo-name
   ```

All internal links already run through the `href()` helper in `src/lib/utils.ts`, so the
base path is applied everywhere automatically — including icons, the manifest, RSS and
the sitemap.

### Deploying somewhere else

The output in `dist/` is plain static files. Upload it to any host — Netlify, Vercel,
Cloudflare Pages, or traditional shared hosting. Only `SITE_URL` needs to match the
final origin.

---

## Images

Run `npm run placeholders` to generate on-brand SVG placeholders plus the rasterised
`apple-touch-icon.png` and `og/default.png`.

Replace them with real assets before launch:

- Portrait → `public/images/shabbar-abbas.svg` (referenced by `personal.photo`)
- Project covers and galleries → `public/images/work/…`
- Blog covers → `public/images/blog/…`
- Social share card → `public/og/default.png` (must be a real 1200×630 bitmap)

Once real photography is in place you can delete `scripts/generate-placeholders.mjs` and
the `placeholders` npm script.

---

## Before going live

- [ ] Replace social URLs in `src/config/personal.ts` and the Twitter handle in `src/config/site.ts`
- [ ] Set a real `PUBLIC_FORM_ENDPOINT`
- [ ] Replace the placeholder portrait, project imagery and OG card
- [ ] Add `public/shabbar-abbas-cv.pdf` (linked from About and Experience)
- [ ] Verify the dates and company names in `src/config/experience.ts`
- [ ] **Replace the sample case studies and testimonials with real client work** — the
      content shipped in `src/content/projects` and `src/content/testimonials` is
      realistic placeholder material, not genuine history
- [ ] Review `src/pages/privacy.astro` against your actual data practices

---

## Licence

Source code is available for reference. Written content, imagery and branding are
© Shabbar Abbas.
