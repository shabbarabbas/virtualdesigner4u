---
title: Orbit Fitness — Campaign Landing Page
summary: A single-purpose launch page that converted 11.4% of paid traffic and loaded in under 700ms.
description: A fitness studio chain needed a landing page for a January membership campaign with a hard three-week deadline. Everything was engineered around one action — book a free trial class — and measured obsessively.
category: Landing Pages
tags: [Conversion, Campaign, Performance]
tech: [Astro, Tailwind CSS, TypeScript, HubSpot API, Meta Pixel]
client: Orbit Fitness
industry: Health & Fitness
role: Designer & Developer
duration: 3 weeks
year: 2025
order: 85
featured: true
accent: '#5EEAD4'
cover: /images/work/orbit-cover.svg
coverAlt: Bold fitness campaign landing page with trial booking form
gallery:
  - src: /images/work/orbit-01.svg
    alt: Hero section with a booking form above the fold
    caption: The form sits above the fold on every breakpoint — the single change with the largest measured impact.
  - src: /images/work/orbit-02.svg
    alt: Studio location selector with a map
    caption: Location selection was reduced to one tap after testing showed a dropdown was losing mobile users.
links:
  live: https://example.com
problem: >-
  Orbit's previous campaign page had converted at 2.1% while spending significantly on Meta and
  Google ads. It took 4.8 seconds to load on mobile, buried the booking form below three
  scrolls of brand copy, and asked for nine form fields before a visitor could book a free class.
solution: >-
  We rebuilt around a single question: what is the minimum required to book someone into a trial
  class? The answer was three fields. The form moved above the fold, brand copy was cut by
  roughly 70%, and the page was rebuilt as static HTML with inlined critical CSS, loading in
  under 700ms on mobile.
features:
  - Booking form above the fold at every breakpoint
  - Three-field form with progressive enhancement and inline validation
  - One-tap studio location selector with distance sorting
  - Direct HubSpot CRM integration with instant confirmation email
  - Full conversion tracking across Meta, Google and GA4
  - Two A/B variants running from launch
challenges:
  - title: Three weeks, immovable deadline
    detail: >-
      The campaign was tied to a January launch with media already booked. We cut scope to a
      single page, reused an existing brand system rather than designing one, and shipped a
      testable version in week two so tracking could be verified before spend began.
  - title: Convincing the client to cut copy
    detail: >-
      Marketing wanted the full brand story on the page. We proposed testing it — variant A with
      the long copy, variant B with a short version. The short version converted 41% better within
      nine days, which settled the debate with data rather than opinion.
  - title: Form abandonment on mobile
    detail: >-
      The original nine-field form had a 68% mobile abandonment rate. Reducing to three fields,
      using correct input types to trigger the right mobile keyboards, and replacing the location
      dropdown with tappable cards cut abandonment to 19%.
results:
  - metric: '11.4%'
    label: Conversion rate
    detail: Up from 2.1% on the previous campaign page.
  - metric: '680ms'
    label: Load time
    detail: Largest Contentful Paint on a throttled 4G connection.
  - metric: '−72%'
    label: Cost per acquisition
    detail: Same ad spend, substantially more trial bookings.
  - metric: '19%'
    label: Form abandonment
    detail: Reduced from 68% on mobile.
lessons:
  - Every form field costs conversions. Ask only for what is genuinely required to complete the next step — everything else can be collected later.
  - Disagreements about copy length are best resolved by testing rather than argument. Running both versions took a day and produced an unambiguous answer.
  - On paid campaigns, page speed is directly a media-budget line item. A four-second load is money leaving before anyone sees the offer.
---

## Overview

Orbit Fitness runs eleven studios and treats January as their most important acquisition window
of the year. The campaign budget was substantial; the page it pointed at was not performing.

## Approach

This was a conversion engineering project rather than a design project. We started from the ad
creative and the promise it made, then removed everything on the page that did not directly
support acting on that promise.

Instrumentation came first. Before any design work, we ensured every meaningful interaction was
tracked, so the campaign could be optimised on real data from day one instead of retrospectively.

## Outcome

The campaign delivered more than five times the trial bookings of the previous year on
comparable spend. The page has since become Orbit's template for all subsequent campaigns.
