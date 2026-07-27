# AGENTS.md

Agent instructions for `virtualdesigner4u.com`.

## Project

A statically generated portfolio site for Shabbar Abbas.

**Stack:** Astro 5 (`output: 'static'`) · Tailwind CSS 4 · TypeScript (strict) · MDX
content collections · deployed to GitHub Pages via `.github/workflows/deploy.yml`.

This directory is both the Astro project root and the historical web-root folder name.
Build output goes to `dist/` — nothing is served directly from here.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server on :4321 |
| `npm run check` | `astro check` — type-check only |
| `npm run build` | `astro check && astro build` |
| `npm run build:fast` | Build, skipping the type-check |
| `npm run preview` | Serve `dist/` |
| `npm run placeholders` | Regenerate `public/` artwork and raster icons |

There is no test suite and no separate linter. **`npm run check` is the gate** — run it
after every few file changes rather than only at the end, because Astro component prop
types and helper signatures drift silently otherwise.

`git` is not installed on the primary dev machine. Do not assume git commands work.
`rm` is aliased to interactive mode; it will prompt for confirmation.

## Architecture notes

- **Tailwind v4 is wired through the Vite plugin** (`@tailwindcss/vite` in
  `astro.config.mjs`), not the Astro integration. There is no `tailwind.config.js`;
  theme values live in `@theme inline { }` inside `src/styles/global.css`.
- **`vite` is pinned as a devDependency** to keep `@tailwindcss/vite` and `astro` on the
  same major. If you see `Plugin<any>[] is not assignable to PluginOption`, the versions
  have diverged again — check `npm ls vite --all` for duplicates.
- **Theming** uses `data-theme` on `<html>` with `--c-*` semantic custom properties. Dark
  values sit in `:root`; light overrides in `[data-theme='light']`. Never hard-code a hex
  value in a component — grep `src/styles/global.css` for an existing token first. (There
  is no `--c-surface-2`; use `--c-canvas-alt`.)
- **All internal URLs must go through `href()`** from `src/lib/utils.ts` so the GitHub
  Pages base path resolves. This applies to `<link>` tags and manifest entries too.
- **JSON-LD helpers** in `src/lib/schema.ts` all take `origin` as their first argument and
  use `path` (never `url`) for locations. Pages obtain it with
  `const origin = Astro.site?.origin ?? site.url;`.
- **`getFaqsByCategory()`** returns `{ category, items }[]` — objects, not tuples.
- **Motion** is one shared IntersectionObserver in `src/lib/motion.ts` driving
  `[data-reveal]`, `[data-counter]` and `[data-meter]`. Re-initialise on `astro:page-load`
  for view transitions, and always provide a `prefers-reduced-motion` path.
- **Blog routes:** `blog/[...page].astro` (index) and `blog/[slug].astro` (post). The post
  route is deliberately non-rest to avoid a route collision.

## Conventions

- Editable non-Markdown content belongs in `src/config/*.ts`, never inlined in a page.
- Prefer editing existing files. Do not create parallel "v2" pages or components.
- Import via the path aliases (`@/`, `@components/`, `@layouts/`, `@lib/`, `@config/`).
- **Quote any YAML frontmatter value containing `": "`** — an unquoted colon-space breaks
  the parser and fails the build.
- Annotate Astro prop destructuring explicitly (`}: Props = Astro.props;`); inference
  fails silently otherwise.
- Escape everything rendered into HTML, including generated SVG text.
- No Lorem Ipsum. All copy must be meaningful and specific.

## Security

- Never commit secrets. `PUBLIC_FORM_ENDPOINT` is intentionally public (it ships in the
  HTML); everything else belongs in an ignored `.env`.
- Never commit `*.sql`, `*.zip`, `*.bak` or backup directories.
