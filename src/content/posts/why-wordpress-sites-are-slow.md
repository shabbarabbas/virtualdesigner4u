---
title: Why Your WordPress Site Is Slow (And What Actually Fixes It)
description: Most WordPress performance advice is folklore. Here is what genuinely causes slow sites, in the order it matters, based on fifteen years of audits.
publishDate: 2025-05-14
category: Performance
tags: [WordPress, Performance, Core Web Vitals, Optimization]
cover: /images/blog/wordpress-performance.svg
coverAlt: Abstract illustration of a performance waterfall chart
featured: true
---

Almost every WordPress performance audit I run finds the same four problems, in roughly the
same order of severity. Almost none of them are fixed by the caching plugin the site already
has installed.

Here is what actually matters, ranked by how much time it typically costs you.

## 1. Images (usually 60–80% of the problem)

The single most common issue, by a wide margin. A client uploads a 4000px photograph straight
from a camera, WordPress displays it in a 600px container, and every visitor downloads the full
file anyway.

What fixes it:

- Resize before upload, or generate derivatives automatically on upload
- Serve WebP or AVIF with a JPEG fallback
- Use `srcset` and `sizes` so browsers choose an appropriate file
- Lazy-load anything below the fold — but **never** the hero image

That last point matters more than people expect. Lazy-loading your largest above-the-fold image
delays the Largest Contentful Paint, which is precisely the metric you are trying to improve.

## 2. Too many plugins

Every plugin can enqueue its own CSS and JavaScript on every page — including pages where it
does nothing at all. A contact form plugin loading its bundle on your blog archive is extremely
common.

I audited a site last year running 23 plugins. Eleven were loading assets sitewide; four were
doing genuinely nothing. Removing them took the homepage from 3.1MB to 1.4MB before any other
work.

Ask of each plugin: what does this do, does it need to run everywhere, and could ten lines in
the theme replace it?

## 3. Render-blocking resources

CSS and synchronous JavaScript in the `<head>` stop the page rendering until they finish
downloading and parsing. Web fonts loaded without a display strategy make it worse, holding text
invisible while the font arrives.

- Inline the critical CSS needed for above-the-fold content
- Defer or async everything non-essential
- Use `font-display: swap` and preload your primary font
- Self-host fonts — a third-party font request costs you a DNS lookup, a TCP handshake and a TLS negotiation before a single byte of font arrives

## 4. The database (occasionally)

Real, but far less common than consultants selling optimisation services imply. Worth
investigating when:

- Post revisions have accumulated into the tens of thousands
- `wp_options` contains large autoloaded rows from long-removed plugins
- Expired transients are never cleaned up

Check autoloaded options before anything else. I have seen sites loading 8MB of autoloaded data
on every single request.

## What about caching plugins?

Caching genuinely helps — it is just not first. Caching a bloated page produces a bloated page
delivered slightly faster. Fix the underlying weight, then cache.

And please only run one. Two caching plugins fighting each other is a reliable source of very
confusing bugs.

## The order that works

1. Fix images
2. Audit and remove plugins
3. Eliminate render-blocking resources
4. Clean the database if evidence supports it
5. *Then* configure caching and a CDN

Measure before and after each step with real profiling, not a plugin's self-reported score.
WebPageTest on a throttled 4G connection tells you what your actual users experience.

Most sites I audit go from four seconds to under one, and the work rarely takes more than a
couple of days.
