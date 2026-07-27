---
title: Skyward Runner — Endless Arcade Game
summary: A Phaser 3 endless runner built as a branded marketing campaign, played over 200,000 times.
description: A beverage brand wanted a campaign mechanic more engaging than another prize draw. We built a genuinely playable endless runner that lived on their site, worked on any phone, and kept players returning through a weekly leaderboard.
category: Games
tags: [Phaser, Marketing, Games, Mobile]
tech: [Phaser 3, TypeScript, Vite, Web Audio API, Cloudflare Workers, KV Storage]
client: Cascade Beverages
industry: Consumer Brands
role: Game Developer
duration: 8 weeks
year: 2023
order: 75
featured: false
accent: '#FFB86B'
cover: /images/work/skyward-cover.svg
coverAlt: Colourful endless runner game with a character leaping between floating platforms
gallery:
  - src: /images/work/skyward-01.svg
    alt: Gameplay showing the runner character and obstacles
    caption: One-touch controls — the entire game is playable with a single thumb.
  - src: /images/work/skyward-02.svg
    alt: Weekly leaderboard screen with player rankings
    caption: A weekly reset gave every player a plausible route to the top and drove repeat sessions.
links:
  live: https://example.com
problem: >-
  Cascade's previous campaigns relied on prize draws with negligible engagement — visitors
  entered once and never returned. They wanted something people would actively choose to spend
  time with, on a hard six-week deadline before a summer campaign launch, and it had to work on
  every phone their audience owned.
solution: >-
  A one-touch endless runner tuned for short, repeatable sessions. Procedural level generation
  kept it varied, a weekly leaderboard reset kept it competitive, and the entire build was
  aggressively optimised to load in under three seconds on mobile data.
features:
  - One-touch control scheme playable entirely with a thumb
  - Procedural level generation with difficulty ramping by distance
  - Weekly leaderboard with server-side score validation
  - Unlockable characters tied to campaign milestones
  - Shareable score cards generated as images for social posting
  - Full offline play with score syncing on reconnect
challenges:
  - title: Preventing leaderboard cheating
    detail: >-
      A public leaderboard with prizes attracts tampering immediately. Rather than trusting the
      client, we recorded a compressed input replay and revalidated the run server-side in a
      Cloudflare Worker before accepting any score. Fabricated submissions were rejected outright
      within the first day of launch.
  - title: Three-second load on mobile data
    detail: >-
      Players arriving from social ads abandon quickly. We split loading into an initial 800KB
      playable core with additional characters and environments streamed in during play. Time to
      first interaction was 2.4 seconds on a throttled 4G connection.
  - title: Difficulty that kept people playing
    detail: >-
      Early playtests showed sessions ending too quickly, which killed retention. We retuned the
      difficulty curve so the first 30 seconds were forgiving and pressure increased gradually,
      raising median session length from 40 seconds to just over three minutes.
results:
  - metric: '204k'
    label: Games played
    detail: Over the eight-week campaign period.
  - metric: '3:12'
    label: Median session
    detail: Substantially above the client's benchmark for campaign microsites.
  - metric: '2.4s'
    label: Time to play
    detail: On a throttled 4G connection from a cold start.
  - metric: '38%'
    label: Return players
    detail: Came back at least once after their first session.
lessons:
  - Never trust a score submitted by the client. Server-side replay validation added a week to the build and prevented the leaderboard becoming worthless within days.
  - Progressive asset loading matters more than total size. Getting someone playing in two seconds beats a smaller build that makes them wait for everything.
  - Difficulty tuning is the highest-leverage work in a casual game. The same content with a different curve more than quadrupled session length.
---

## Overview

Cascade Beverages targets an audience that ignores conventional advertising. The proposition was
simple: instead of interrupting people, make something they would choose to play.

## Approach

The design constraint was a game good enough to hold attention on its own merits, with branding
present but not intrusive. Brand elements appear in the environment art and unlockable
characters rather than as overlaid logos.

Technically the priorities were fast loading, one-handed play and a leaderboard that could not
be trivially gamed — the last being the one most campaign games get wrong.

## Outcome

The campaign substantially outperformed Cascade's engagement benchmarks and has been re-run in
two subsequent seasons with new environments added to the existing architecture.
