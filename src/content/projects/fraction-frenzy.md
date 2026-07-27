---
title: Fraction Frenzy — Classroom Maths Game
summary: A Phaser 3 learning game now used by 40,000+ students, running at 60fps on decade-old school hardware.
description: An educational publisher needed a fractions game that would hold the attention of nine-year-olds while producing assessment data teachers could act on — and it had to run on the ageing Chromebooks and iPads that schools actually own.
category: Educational
tags: [Education, Phaser, Games, Accessibility]
tech: [Phaser 3, TypeScript, Vite, Web Audio API, TexturePacker, IndexedDB]
client: Brightpath Learning
industry: Education Publishing
role: Game Developer & Technical Designer
duration: 10 weeks
year: 2023
order: 95
featured: true
accent: '#FFB86B'
cover: /images/work/fraction-frenzy-cover.svg
coverAlt: Colourful fractions game showing a pizza-slicing puzzle interface
gallery:
  - src: /images/work/fraction-frenzy-01.svg
    alt: Gameplay screen with fraction pieces and a target value
    caption: The core loop asks students to assemble a target fraction from available pieces — difficulty scales by denominator complexity.
  - src: /images/work/fraction-frenzy-02.svg
    alt: Teacher dashboard showing class progress by topic
    caption: The teacher view surfaces which specific misconceptions each student is hitting, not just an overall score.
  - src: /images/work/fraction-frenzy-03.svg
    alt: Accessibility settings panel with dyslexia-friendly font and colour options
    caption: Accessibility options are in the main menu rather than buried in settings, because students need to reach them without help.
links:
  live: https://example.com
problem: >-
  Brightpath had commissioned a fractions game previously and abandoned it. It ran at 15fps on
  school Chromebooks, the audio required headphones that most classrooms did not have, and the
  only data it produced was a percentage score — which told teachers nothing about why a student
  was struggling. Roughly 60% of target devices could not run it acceptably at all.
solution: >-
  We rebuilt from scratch with the classroom as the primary design constraint. A strict 4MB total
  asset budget, sprite atlases, object pooling and a fully visual feedback layer meant the game
  ran at a locked 60fps on the oldest device in the test matrix. The assessment layer was
  redesigned around diagnostic misconceptions rather than raw scores.
features:
  - Scene-driven Phaser 3 architecture with centralised, persistent game state
  - Adaptive difficulty responding to accuracy and time-to-answer
  - Diagnostic reporting that identifies specific misconceptions, not just scores
  - Full keyboard, mouse and touch parity across all interactions
  - Dyslexia-friendly typography and colour-blind safe palettes as first-class options
  - Complete offline play with progress syncing when connectivity returns
challenges:
  - title: A 4MB budget for a visually rich game
    detail: >-
      School networks are frequently throttled and shared across hundreds of devices. Every asset
      was packed into atlases, audio was converted to a single sprite sheet, and the palette was
      constrained so textures compressed efficiently. Final build was 3.6MB, loading in under six
      seconds on a heavily throttled connection.
  - title: 60fps on 2014 hardware
    detail: >-
      The original build allocated objects every frame, causing garbage-collection stutter. We
      introduced object pooling for all particles and fraction pieces, moved to a fixed-timestep
      update loop, and eliminated per-frame allocations entirely. Frame time stayed under 16ms on
      the slowest device tested.
  - title: Assessment teachers would actually use
    detail: >-
      We ran sessions with eight teachers before writing the reporting layer. The consistent
      message was that percentages were useless — they needed to know which misconception a
      student held. The final report groups errors into diagnostic categories that map directly to
      the intervention activities teachers already have.
results:
  - metric: '40k+'
    label: Students reached
    detail: Deployed across 180 schools in the first academic year.
  - metric: '60fps'
    label: On 2014 hardware
    detail: Locked frame rate on the oldest device in the support matrix.
  - metric: '3.6MB'
    label: Total download
    detail: Under the 4MB budget, loading in six seconds on throttled school WiFi.
  - metric: '92%'
    label: Teacher approval
    detail: Would recommend to a colleague, surveyed after one term of use.
lessons:
  - Designing for the weakest device in the room produces a better experience for everyone. Optimising for modern hardware and hoping older devices cope is not a strategy.
  - Teachers are the real users of educational software, even though students play it. Involving them before building the reporting layer changed the entire data model for the better.
  - Accessibility options belong in the main menu. Burying them in a settings submenu means the students who need them most never find them.
testimonial:
  quote: This is the first digital resource our maths department has genuinely adopted rather than tolerated. The diagnostic reporting tells me exactly which children need intervention and on what — that is not something I have seen from any other product.
  author: Priya Raman
  role: Head of Mathematics, Ashfield Primary
---

## Overview

Brightpath Learning publishes supplementary maths resources for UK and international primary
schools. Fractions are consistently the topic teachers report as hardest to teach and hardest
for students to grasp, which made it the obvious candidate for an interactive treatment.

Their first attempt had failed on technical grounds. This project was a full rebuild with a
much clearer understanding of the constraints.

## Approach

The design phase started with the curriculum, not the game. We mapped the specific
misconceptions that cause students to struggle with fractions — treating numerator and
denominator as separate whole numbers, assuming a larger denominator means a larger value —
and built mechanics that make those misconceptions visibly fail in-game.

That mapping also became the data model. Because every interaction is tied to a known
misconception, the reporting layer had meaningful categories from day one rather than being
retrofitted.

## Outcome

The game is now part of Brightpath's core catalogue and has been extended twice since launch,
each time as a contained addition rather than a rewrite — which was the point of investing in
the architecture up front.
