/**
 * Small, dependency-free helpers shared across components.
 */

/**
 * Build a site-relative URL that respects the configured `base` path.
 *
 * GitHub project pages serve from `/repo-name/`, so every internal link must
 * be prefixed. Always route internal hrefs through this helper instead of
 * hard-coding a leading slash.
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  if (path.startsWith('#')) return path;

  const normalisedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalisedPath = path.startsWith('/') ? path : `/${path}`;
  const joined = `${normalisedBase}${normalisedPath}`;
  return joined === '' ? '/' : joined;
}

/** Absolute URL for canonical tags, OG images and structured data. */
export function absoluteUrl(path: string, site: URL | string): string {
  const origin = typeof site === 'string' ? site : site.origin;
  if (/^https?:\/\//.test(path)) return path;
  return new URL(href(path), origin).toString();
}

/**
 * True when `current` matches `target`, used for active nav highlighting.
 * Handles the base path and optional trailing slashes.
 */
export function isActivePath(current: string, target: string): boolean {
  const strip = (p: string) => {
    const base = import.meta.env.BASE_URL || '/';
    const withoutBase =
      base !== '/' && p.startsWith(base) ? p.slice(base.length - 1) : p;
    const trimmed = withoutBase.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };

  const a = strip(current);
  const b = strip(target);
  if (b === '/') return a === '/';
  return a === b || a.startsWith(`${b}/`);
}

/** Format a date consistently across the site. */
export function formatDate(
  date: Date | string,
  opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' },
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-GB', opts).format(d);
}

/** Machine-readable date for <time datetime="…">. */
export function isoDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString();
}

/**
 * Estimate reading time from raw markdown.
 * 200 wpm is the usual benchmark for technical prose.
 */
export function readingTime(body: string | undefined): { minutes: number; words: number } {
  if (!body) return { minutes: 1, words: 0 };
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`~\-[\]()]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { minutes: Math.max(1, Math.round(words / 200)), words };
}

/**
 * Extract h2/h3 headings from markdown for a table of contents.
 * Fenced code blocks are stripped first so `# comments` are not mistaken
 * for headings.
 */
export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Split an array into chunks — used for blog pagination fallbacks. */
export function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/** Stable de-duplicating helper for tag/category lists. */
export function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

/** Join class names, dropping falsy values. */
export function cx(...values: (string | false | null | undefined)[]): string {
  return values.filter(Boolean).join(' ');
}

/** Pick N random-but-stable items, excluding a given id. */
export function related<T extends { id: string }>(
  pool: T[],
  currentId: string,
  count: number,
): T[] {
  return pool.filter((item) => item.id !== currentId).slice(0, count);
}
