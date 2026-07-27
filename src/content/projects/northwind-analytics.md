---
title: Northwind Analytics — SaaS Marketing Platform
summary: A complete rebuild that cut load time by 78% and lifted trial signups by a third.
description: Northwind's marketing site was a five-year-old WordPress build carrying eleven page-builder plugins. We replaced it with a static Astro architecture, kept the editing workflow their marketing team relied on, and turned page speed into a competitive advantage.
category: Web Development
tags: [SaaS, Performance, Redesign, Astro]
tech: [Astro, TypeScript, Tailwind CSS, Sanity CMS, Vercel, GitHub Actions]
client: Northwind Analytics
industry: B2B SaaS
role: Lead Designer & Frontend Developer
duration: 7 weeks
year: 2024
order: 100
featured: true
accent: '#5EEAD4'
cover: /images/work/northwind-cover.svg
coverAlt: Northwind Analytics dashboard-style marketing homepage on desktop and mobile
gallery:
  - src: /images/work/northwind-01.svg
    alt: Homepage hero with product screenshot and trial call to action
    caption: The hero was rebuilt around a single primary action after analytics showed three competing CTAs were splitting attention.
  - src: /images/work/northwind-02.svg
    alt: Pricing page with a three-tier comparison table
    caption: Pricing moved from a static image to a real, accessible table — a change that alone reduced pricing-page exits by 18%.
  - src: /images/work/northwind-03.svg
    alt: Documentation template with sidebar navigation
    caption: The docs template supports 200+ pages with instant client-side search.
links:
  live: https://example.com
  repo: https://github.com/example/northwind
problem: >-
  Northwind was spending heavily on paid acquisition while their marketing site took 6.2 seconds
  to become interactive on mobile. The WordPress install had accumulated eleven plugins, three of
  which duplicated functionality, and every content change risked breaking an unrelated page.
  Their marketing team had effectively stopped publishing because the editing experience was so
  fragile.
solution: >-
  We rebuilt the site as a statically generated Astro application backed by a structured headless
  CMS. Content editors got a purpose-built schema instead of a freeform page builder, which made
  publishing faster and structurally impossible to break. Every template was rebuilt from semantic
  HTML with a strict performance budget enforced in CI.
features:
  - Statically generated marketing site with zero client-side framework overhead
  - Structured content model with live preview for the marketing team
  - Documentation section with instant client-side search across 200+ pages
  - Automated Lighthouse checks that fail the build if scores regress
  - Full redirect map preserving five years of accumulated SEO equity
  - WCAG 2.1 AA compliance verified with automated and manual testing
challenges:
  - title: Migrating without losing rankings
    detail: >-
      The old site had 340 indexed URLs and a valuable backlink profile. We audited every URL,
      mapped 301 redirects for each changed path, and monitored Search Console daily for four
      weeks post-launch. Organic traffic recovered fully within nine days and exceeded the
      previous baseline by week six.
  - title: Keeping editors independent
    detail: >-
      The team was understandably nervous about losing visual editing. We modelled the CMS around
      the sections they actually used, added live preview, and ran two training sessions. Adoption
      was immediate, and publishing frequency roughly tripled in the first quarter.
  - title: A documentation search that stayed fast
    detail: >-
      Hosted search was rejected on cost and privacy grounds. We pre-built a compressed search
      index at build time and shipped a lightweight client-side matcher — 31KB gzipped, and
      results appear in under 40ms with no network request.
results:
  - metric: '78%'
    label: Faster load time
    detail: Time to interactive fell from 6.2s to 1.4s on a throttled 4G connection.
  - metric: '+34%'
    label: Trial signups
    detail: Measured over the first 90 days against the same period the previous year.
  - metric: '100'
    label: Lighthouse performance
    detail: Sustained across all key templates, enforced by automated CI checks.
  - metric: '3×'
    label: Publishing frequency
    detail: The marketing team went from roughly two posts a month to six or seven.
lessons:
  - Performance budgets only hold if they are enforced automatically — a CI check that fails the build is worth more than any amount of good intentions.
  - Editors do not want visual page builders; they want to publish confidently without breaking anything. A constrained, well-modelled schema delivers that far better than freeform layout tools.
  - Redirect mapping deserves its own dedicated phase. Treating it as a launch-day task is how redesigns lose traffic.
testimonial:
  quote: Shabbar rebuilt our entire marketing site in under two months and it is measurably the fastest site in our category. Our marketing team now publishes without needing a developer, which was worth the project on its own.
  author: Elena Kowalski
  role: VP Marketing, Northwind Analytics
---

## Overview

Northwind Analytics sells a business intelligence platform to mid-market companies. Their
product was strong and their content marketing was well-funded — but the site that content
landed on was actively undermining both.

The engagement covered a full audit, redesign and rebuild across seven weeks, with the explicit
constraint that no organic search traffic could be lost in the process.

## Approach

We began with three weeks of measurement rather than design. Analytics review, session
recordings, a technical SEO crawl and interviews with the marketing team produced a clear
picture: the site was not failing because it looked dated, it was failing because it was slow
and nobody could update it.

That reframing changed the priorities. Design work was deliberately conservative — refining a
brand the team already liked — while the majority of the effort went into architecture,
performance and the editing experience.

## Outcome

The rebuilt site loads in a fraction of the time, ranks better than its predecessor, and is
maintained entirely by the marketing team. Northwind now treats site performance as a tracked
business metric rather than an engineering detail.
