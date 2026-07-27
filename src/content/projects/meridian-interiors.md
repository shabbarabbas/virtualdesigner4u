---
title: Meridian Interiors — WordPress Studio Site
summary: A custom WordPress theme replacing 14 plugins, cutting page weight by 71% and giving the studio full editorial control.
description: A high-end interior design studio needed a portfolio site as considered as their work. We replaced a bloated page-builder installation with a bespoke theme built around their actual content — and an editing experience their team could use without a manual.
category: WordPress
tags: [WordPress, Portfolio, Performance, Custom Theme]
tech: [WordPress, PHP, ACF Pro, Gutenberg, Sass, MySQL]
client: Meridian Interiors
industry: Interior Design
role: WordPress Developer & Designer
duration: 6 weeks
year: 2024
order: 90
featured: true
accent: '#FFB86B'
cover: /images/work/meridian-cover.svg
coverAlt: Editorial-style interior design portfolio homepage with large imagery
gallery:
  - src: /images/work/meridian-01.svg
    alt: Project grid with large-format interior photography
    caption: Photography is the product here, so the interface was stripped back to let images run edge to edge.
  - src: /images/work/meridian-02.svg
    alt: Individual project page with before and after comparison
    caption: A custom before/after block became the studio's most-used content module.
  - src: /images/work/meridian-03.svg
    alt: WordPress admin showing custom ACF field groups
    caption: Editors get labelled, structured fields rather than a blank canvas — faster to fill and impossible to break.
links:
  live: https://example.com
problem: >-
  Meridian's site was built on a commercial theme plus fourteen plugins, several of which
  overlapped. Homepage weight was 8.4MB, largely uncompressed photography. Their studio manager
  needed a developer for routine updates because the page builder broke layouts unpredictably,
  and two plugins had known unpatched vulnerabilities.
solution: >-
  A custom theme designed around their four genuine content types — projects, services, journal
  entries and team members — with ACF field groups matching how the studio actually describes its
  work. Fourteen plugins reduced to three. An automated image pipeline generates responsive
  WebP derivatives on upload, so editors simply drop in full-resolution photography.
features:
  - Bespoke theme with modular, purpose-built templates
  - Custom post types and taxonomies for projects, services and journal
  - Automated responsive WebP generation on upload
  - Custom Gutenberg blocks including the before/after comparison slider
  - Security hardening — sanitisation, escaping, nonces and capability checks throughout
  - Editor training video and written documentation
challenges:
  - title: Large photography without the weight
    detail: >-
      Interior photography is the entire value proposition, so quality could not be compromised.
      We built an upload pipeline generating six responsive sizes in WebP with JPEG fallbacks,
      paired with correct sizes attributes and lazy loading below the fold. Perceived quality was
      unchanged while homepage weight dropped from 8.4MB to 2.4MB.
  - title: Replacing a page builder without a revolt
    detail: >-
      The team feared losing flexibility. We audited two years of published pages and found they
      used just nine distinct layout patterns. Each became a proper block with sensible
      constraints. The studio manager described the result as faster and considerably less
      stressful.
  - title: Migrating six years of content
    detail: >-
      Content lived in page-builder shortcodes that would have rendered as raw text in a new
      theme. We wrote a migration script parsing the shortcode structure into clean post meta,
      then reviewed all 180 posts manually. Zero content was lost and no URLs changed.
results:
  - metric: '71%'
    label: Lighter pages
    detail: Homepage weight reduced from 8.4MB to 2.4MB with no visible quality loss.
  - metric: '14 → 3'
    label: Plugins removed
    detail: Including two carrying known unpatched vulnerabilities.
  - metric: '98'
    label: Lighthouse performance
    detail: Up from 34 on the previous build.
  - metric: '0'
    label: Developer requests
    detail: The studio has published independently since launch.
lessons:
  - Audit what clients actually publish before assuming they need flexibility. Two years of pages reduced to nine repeatable patterns — the perceived need for a page builder was largely theoretical.
  - Plugin count is a reasonable proxy for future maintenance pain. Every plugin is another update cycle, another dependency and another potential vulnerability.
  - Content migration deserves manual review. Automated scripts get you 95% of the way; the remaining 5% is where the embarrassing errors live.
testimonial:
  quote: Our site finally looks like our work. More importantly I can update it myself on a Friday afternoon without worrying I will break something — which was never true before.
  author: Claire Mensah
  role: Studio Manager, Meridian Interiors
---

## Overview

Meridian Interiors is a boutique studio whose portfolio is genuinely exceptional. Their website
was not, and the gap was costing them credibility with exactly the high-end clients they wanted.

The brief was straightforward: a site that matched the quality of the work, and one the team
could maintain themselves.

## Approach

Design direction came from the studio's own printed portfolio — generous margins, restrained
typography, photography given room to breathe. The interface deliberately recedes.

The technical work focused on two things: making large photography fast, and making the editing
experience predictable. Both are solved problems in WordPress, but only if you build the theme
around the content rather than installing something generic and configuring around it.

## Outcome

Six months after launch the studio has published over thirty new projects without a single
developer request, and the site is now their primary source of qualified enquiries.
