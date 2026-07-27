/**
 * Generates placeholder artwork for project covers, galleries and blog posts.
 *
 * These are lightweight, on-brand SVGs so the site looks complete before real
 * photography exists. Replace the generated files in `public/images/` with real
 * assets (WebP/AVIF preferred) and you can delete this script.
 *
 * Usage: npm run placeholders
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const PALETTES = {
  ember: { from: '#FFB86B', to: '#F07C3E', ink: '#1A0E02' },
  ion: { from: '#6FEEDE', to: '#109385', ink: '#04231F' },
  dusk: { from: '#8FA3FF', to: '#4B58C7', ink: '#080C24' },
  rose: { from: '#FF9DB0', to: '#D6456B', ink: '#2A0812' },
};

/**
 * Deterministic pseudo-random generator so regenerating produces identical
 * files — otherwise every run would create a spurious git diff.
 */
function seeded(seed) {
  let h = 2166136261;
  for (const ch of seed) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function svg({ label, sub, palette, width, height, seed }) {
  const p = PALETTES[palette] ?? PALETTES.ember;
  const rand = seeded(seed);

  // Scattered geometry gives each placeholder its own character.
  const shapes = Array.from({ length: 7 }, (_, i) => {
    const cx = Math.round(rand() * width);
    const cy = Math.round(rand() * height);
    const r = Math.round(40 + rand() * (height / 3));
    const o = (0.05 + rand() * 0.12).toFixed(3);
    return i % 2 === 0
      ? `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" opacity="${o}"/>`
      : `<rect x="${cx}" y="${cy}" width="${r * 1.6}" height="${r * 0.5}" rx="${r * 0.25}" fill="#fff" opacity="${o}"/>`;
  }).join('');

  const grid = Array.from({ length: Math.ceil(width / 64) }, (_, i) => {
    const x = i * 64;
    return `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${p.ink}" stroke-width="1" opacity="0.08"/>`;
  }).join('');

  const title = escapeXml(label);
  // Uppercase before escaping — otherwise `&amp;` becomes the invalid `&AMP;`.
  const subtitle = escapeXml((sub ?? '').toUpperCase());

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.from}"/>
      <stop offset="1" stop-color="${p.to}"/>
    </linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="28"/></filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <g filter="url(#soft)">${shapes}</g>
  <g>${grid}</g>
  <text x="${width / 2}" y="${height / 2 - (subtitle ? 12 : 0)}" text-anchor="middle"
        font-family="Bricolage Grotesque, Helvetica, Arial, sans-serif" font-size="${Math.round(height / 9)}"
        font-weight="700" fill="${p.ink}" opacity="0.82">${title}</text>
  ${
    subtitle
      ? `<text x="${width / 2}" y="${height / 2 + Math.round(height / 11)}" text-anchor="middle"
        font-family="ui-monospace, Menlo, monospace" font-size="${Math.round(height / 24)}"
        letter-spacing="3" fill="${p.ink}" opacity="0.55">${subtitle}</text>`
      : ''
  }
</svg>
`;
}

function escapeXml(value) {
  return String(value).replace(/[<>&'"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c],
  );
}

/** Every image path referenced by content, relative to `public/`. */
const manifest = [
  // Project covers — 1600×900
  ['images/work/northwind-cover.svg', 'Northwind Analytics', 'SaaS Platform', 'ion', 1600, 900],
  ['images/work/fraction-frenzy-cover.svg', 'Fraction Frenzy', 'Educational Game', 'ember', 1600, 900],
  ['images/work/meridian-cover.svg', 'Meridian Interiors', 'WordPress Studio', 'rose', 1600, 900],
  ['images/work/orbit-cover.svg', 'Orbit Fitness', 'Landing Page', 'ion', 1600, 900],
  ['images/work/ledger-cover.svg', 'Ledger & Co', 'Brand Site', 'dusk', 1600, 900],
  ['images/work/skyward-cover.svg', 'Skyward Runner', 'Arcade Game', 'ember', 1600, 900],

  // Project galleries — 1400×880
  ['images/work/northwind-01.svg', 'Homepage', 'Northwind', 'ion', 1400, 880],
  ['images/work/northwind-02.svg', 'Pricing', 'Northwind', 'ion', 1400, 880],
  ['images/work/northwind-03.svg', 'Documentation', 'Northwind', 'ion', 1400, 880],
  ['images/work/fraction-frenzy-01.svg', 'Gameplay', 'Fraction Frenzy', 'ember', 1400, 880],
  ['images/work/fraction-frenzy-02.svg', 'Teacher Dashboard', 'Fraction Frenzy', 'ember', 1400, 880],
  ['images/work/fraction-frenzy-03.svg', 'Accessibility', 'Fraction Frenzy', 'ember', 1400, 880],
  ['images/work/meridian-01.svg', 'Project Grid', 'Meridian', 'rose', 1400, 880],
  ['images/work/meridian-02.svg', 'Case Study', 'Meridian', 'rose', 1400, 880],
  ['images/work/meridian-03.svg', 'Editor Fields', 'Meridian', 'rose', 1400, 880],
  ['images/work/orbit-01.svg', 'Hero & Form', 'Orbit', 'ion', 1400, 880],
  ['images/work/orbit-02.svg', 'Location Picker', 'Orbit', 'ion', 1400, 880],
  ['images/work/ledger-01.svg', 'Homepage', 'Ledger & Co', 'dusk', 1400, 880],
  ['images/work/ledger-02.svg', 'Partners', 'Ledger & Co', 'dusk', 1400, 880],
  ['images/work/ledger-03.svg', 'Design System', 'Ledger & Co', 'dusk', 1400, 880],
  ['images/work/skyward-01.svg', 'Gameplay', 'Skyward Runner', 'ember', 1400, 880],
  ['images/work/skyward-02.svg', 'Leaderboard', 'Skyward Runner', 'ember', 1400, 880],

  // Blog covers — 1200×630
  ['images/blog/wordpress-performance.svg', 'WordPress Speed', 'Performance', 'ember', 1200, 630],
  ['images/blog/phaser-architecture.svg', 'Phaser 3 Architecture', 'Game Development', 'ion', 1200, 630],
  ['images/blog/accessibility-basics.svg', 'Accessibility Basics', 'Accessibility', 'dusk', 1200, 630],

  // Portrait placeholder — replace with a real photograph.
  ['images/shabbar-abbas.svg', 'SA', 'Portrait Placeholder', 'ember', 900, 1100],

  // Social share card.
  // NOTE: most social platforms do NOT render SVG previews. Replace
  // public/og/default.svg with a real 1200×630 PNG or JPEG before launch and
  // update `site.ogImage` in src/config/site.ts to match.
  ['og/default.svg', 'Shabbar Abbas', 'Web & Game Developer', 'ember', 1200, 630],
];

const written = [];

for (const [path, label, sub, palette, width, height] of manifest) {
  const target = join(root, 'public', path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, svg({ label, sub, palette, width, height, seed: path }), 'utf8');
  written.push(path);
}

console.log(`Generated ${written.length} placeholder images in public/`);

/*
 * Raster icons.
 *
 * Apple touch icons and social share images must be bitmaps — iOS ignores SVG
 * touch icons and most social platforms refuse to render SVG previews. These
 * are rasterised from the committed SVG sources so there is a single source of
 * truth for the artwork.
 */
const rasterTargets = [
  { from: 'favicon.svg', to: 'apple-touch-icon.png', size: 180 },
  { from: 'og/default.svg', to: 'og/default.png', width: 1200, height: 630 },
];

for (const target of rasterTargets) {
  const source = join(root, 'public', target.from);

  try {
    const pipeline = sharp(source, { density: 384 });

    await pipeline
      .resize(
        target.size ?? target.width,
        target.size ?? target.height,
        { fit: 'cover' },
      )
      .png({ compressionLevel: 9 })
      .toFile(join(root, 'public', target.to));

    console.log(`Rasterised ${target.from} → ${target.to}`);
  } catch (error) {
    // Never fail the build for a missing decorative asset.
    console.warn(`Skipped ${target.to}: ${error.message}`);
  }
}
