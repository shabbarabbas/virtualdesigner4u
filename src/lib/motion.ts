/**
 * Global motion behaviours: scroll reveal, animated counters and skill meters.
 *
 * All three share a single IntersectionObserver pass and unobserve after
 * firing, so scrolling stays cheap on long pages. Everything is a no-op when
 * the visitor prefers reduced motion.
 */

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Ease-out curve for counters — fast start, gentle settle. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function animateCounter(el: HTMLElement) {
  const target = Number(el.dataset.target ?? '0');
  if (!Number.isFinite(target)) return;

  if (prefersReduced()) {
    el.textContent = String(target);
    return;
  }

  const duration = 1400;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    el.textContent = String(Math.round(easeOut(progress) * target));
    if (progress < 1) requestAnimationFrame(tick);
  };

  el.textContent = '0';
  requestAnimationFrame(tick);
}

function fillMeter(el: HTMLElement) {
  const level = Number(el.dataset.level ?? '0');
  el.style.setProperty('--level', `${Math.min(100, Math.max(0, level))}%`);
  el.dataset.filled = 'true';
}

export function initMotion() {
  const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
  const meters = document.querySelectorAll<HTMLElement>('[data-meter]');

  // Without IntersectionObserver, show everything immediately.
  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
    counters.forEach((el) => (el.textContent = el.dataset.target ?? el.textContent));
    meters.forEach(fillMeter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;

        el.classList.add('is-visible');
        if (el.hasAttribute('data-counter')) animateCounter(el);
        if (el.hasAttribute('data-meter')) fillMeter(el);

        // One-shot: replaying on every scroll-by is noise, not delight.
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
  );

  revealTargets.forEach((el) => observer.observe(el));
  counters.forEach((el) => observer.observe(el));
  meters.forEach((el) => observer.observe(el));
}

/**
 * Highlights the nav/TOC link whose section is currently in view.
 * Attach by giving links a `data-spy` attribute pointing at a section id.
 */
export function initScrollSpy() {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-spy]');
  if (!links.length) return;

  const map = new Map<string, HTMLAnchorElement>();
  const sections: HTMLElement[] = [];

  links.forEach((link) => {
    const id = link.dataset.spy;
    if (!id) return;
    const section = document.getElementById(id);
    if (!section) return;
    map.set(id, link);
    sections.push(section);
  });

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((l) => l.removeAttribute('data-current'));
        map.get(entry.target.id)?.setAttribute('data-current', 'true');
      }
    },
    // Trigger when a section crosses the upper third of the viewport.
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}
