---
title: The Accessibility Work That Takes Ten Minutes
description: Most accessibility failures are not complex ARIA problems. They are a handful of basics that take minutes to fix and affect real people every day.
publishDate: 2025-01-16
category: Accessibility
tags: [Accessibility, WCAG, HTML, CSS]
cover: /images/blog/accessibility-basics.jpg
coverAlt: Illustration of keyboard focus moving through interface elements
featured: false
---

Accessibility gets treated as a specialist discipline requiring an audit, a consultant and a
budget line. Some of it genuinely does.

But the majority of failures I find in audits are not sophisticated ARIA problems. They are six
basics that take minutes to fix and affect people every single day.

## 1. Never remove focus outlines

```css
/* This locks out every keyboard user on your site */
*:focus { outline: none; }
```

If the default outline clashes with your design, replace it — do not delete it:

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

`:focus-visible` shows the ring for keyboard users while keeping it off mouse clicks, which is
usually what people were trying to achieve when they removed it.

## 2. Use the element that already does the job

```html
<!-- Not focusable, not activated by Enter or Space, invisible to assistive tech -->
<div class="btn" onclick="submit()">Submit</div>

<!-- Everything above, free -->
<button type="button" onclick="submit()">Submit</button>
```

Recreating a native button with ARIA takes roughly thirty lines to do correctly, and most
attempts miss something. Semantic HTML is the shortest path to accessible behaviour.

## 3. Write alt text that carries the meaning

```html
<!-- Useless -->
<img src="chart.png" alt="chart">

<!-- Useful -->
<img src="chart.png" alt="Revenue grew from $1.2M to $3.4M between 2022 and 2024">

<!-- Correct for purely decorative images -->
<img src="divider.svg" alt="">
```

The question is not "what is this image", it is "what would someone miss if it did not load".
Decorative images should have empty alt so screen readers skip them entirely.

## 4. Check your contrast

WCAG AA requires 4.5:1 for body text and 3:1 for large text. Light grey on white is the single
most common failure I encounter, and it typically comes from a designer working on a colour-
calibrated display in a bright room.

Any browser's DevTools will report a contrast ratio when you inspect a text element. It takes
seconds.

## 5. Label your form inputs

```html
<!-- Placeholder text is not a label; it vanishes on focus -->
<input type="email" placeholder="Email address">

<!-- Properly associated -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" autocomplete="email">
```

A visible label that persists while typing helps everyone, not only screen reader users. Add
`autocomplete` while you are there — it genuinely speeds up form completion.

## 6. Test with the keyboard

Put your mouse down and press Tab through your own site.

- Can you reach every interactive element?
- Can you see where focus currently is?
- Does the order follow the visual layout?
- Can you escape a modal without a mouse?
- Can you skip past the navigation to the content?

This takes two minutes and reliably finds more real problems than any automated scanner.

## Why bother

The moral argument is straightforward, but there is a practical one too. Accessible sites have
better semantic structure, which search engines parse more effectively. They work better on
poor connections and older devices. And in a growing number of jurisdictions, they are becoming
a legal requirement rather than a nicety.

Mostly though, it is because roughly one in five people has a disability of some kind, and the
fixes above cost you an afternoon.
