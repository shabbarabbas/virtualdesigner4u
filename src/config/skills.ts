import type { SkillCategory, TechLogo } from '@/types';

/**
 * Skill matrix. `level` drives the animated meters (0–100) and `years` is
 * shown as a secondary signal — both are self-assessed, so keep them honest.
 *
 * `years` is capped by two things: the career start (2002) and the year the
 * technology itself became usable in production. Nothing here should predate
 * the tool it describes — update against the current year when revising.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'The core of my practice: hand-written markup and styles that stay fast, accessible and maintainable long after launch.',
    icon: 'code',
    skills: [
      {
        name: 'HTML5 & Semantic Markup',
        level: 98,
        years: 16,
        note: 'Accessibility-first structure',
      },
      { name: 'CSS3, Flexbox & Grid', level: 97, years: 15, note: 'Modern layout without frameworks' },
      { name: 'JavaScript (ES2023+)', level: 92, years: 21, note: 'Vanilla-first, framework-ready' },
      { name: 'TypeScript', level: 85, years: 7, note: 'Strict mode across projects' },
      { name: 'Tailwind CSS', level: 94, years: 6 },
      { name: 'Bootstrap', level: 95, years: 14 },
      { name: 'Responsive & Fluid Design', level: 97, years: 16 },
      { name: 'Web Accessibility (WCAG)', level: 88, years: 13 },
    ],
  },
  {
    id: 'cms',
    title: 'CMS & WordPress',
    description:
      'Custom themes and plugins built the WordPress way — plus flat-file Statamic builds where a database is overkill. Secure, update-safe and genuinely pleasant for clients to edit.',
    icon: 'wordpress',
    skills: [
      { name: 'Custom Theme Development', level: 95, years: 20 },
      { name: 'Plugin Development', level: 84, years: 16 },
      { name: 'Gutenberg & Block Patterns', level: 82, years: 7 },
      { name: 'ACF & Custom Post Types', level: 92, years: 15 },
      { name: 'WooCommerce', level: 80, years: 13 },
      { name: 'Statamic (Themes & Addons)', level: 80, years: 10 },
      { name: 'Speed Optimisation', level: 93, years: 16 },
    ],
  },
  {
    id: 'games',
    title: 'Game Development',
    description:
      'Browser games that run smoothly on low-end school hardware — scene-driven architecture, tight asset budgets, no plugins.',
    icon: 'gamepad',
    skills: [
      { name: 'Phaser 3', level: 90, years: 8 },
      { name: 'HTML5 Canvas API', level: 88, years: 15 },
      { name: 'Game Loop & State Management', level: 87, years: 8 },
      { name: 'Sprite & Asset Pipelines', level: 85, years: 8 },
      { name: 'Educational Game Design', level: 89, years: 21 },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling & Workflow',
    description:
      'Modern build tooling and version control, applied without turning a five-page site into a distributed system.',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', level: 90, years: 13 },
      { name: 'Astro', level: 88, years: 4 },
      { name: 'Vite', level: 85, years: 5 },
      { name: 'npm & Package Management', level: 88, years: 13 },
      { name: 'AI-assisted Development', level: 88, years: 4 },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'Enough design depth to take a project from blank canvas to launch without waiting on a separate design team.',
    icon: 'palette',
    skills: [
      { name: 'UI Design', level: 90, years: 24 },
      { name: 'Design Systems', level: 86, years: 9 },
      { name: 'Typography & Layout', level: 88, years: 22 },
      { name: 'Figma', level: 85, years: 7 },
      { name: 'Adobe Photoshop & Illustrator', level: 88, years: 24 },
      { name: 'Prototyping', level: 82, years: 12 },
    ],
  },
  {
    id: 'platform',
    title: 'Backend & Platform',
    description:
      'The server-side and integration work a frontend specialist genuinely needs — enough to ship end to end.',
    icon: 'layers',
    skills: [
      { name: 'PHP (WordPress context)', level: 82, years: 21 },
      { name: 'MySQL Fundamentals', level: 74, years: 21 },
      { name: 'Static Site Architecture', level: 90, years: 5 },
      { name: 'Hosting, DNS & SSL', level: 86, years: 20 },
      { name: 'Performance & Core Web Vitals', level: 93, years: 6 },
    ],
  },
];

/** Compact list for the home page skills overview. */
export const featuredSkills: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Bootstrap',
  'WordPress',
  'Astro',
  'Phaser 3',
  'Git',
  'Figma',
  'PHP',
];

/**
 * Technology marquee on the home page. `abbr` renders as a clean wordmark —
 * no third-party logo files to license, optimise or keep up to date.
 */
export const techLogos: TechLogo[] = [
  { name: 'HTML5', abbr: 'HTML5' },
  { name: 'CSS3', abbr: 'CSS3' },
  { name: 'JavaScript', abbr: 'JS' },
  { name: 'TypeScript', abbr: 'TS' },
  { name: 'Tailwind CSS', abbr: 'Tailwind' },
  { name: 'Bootstrap', abbr: 'Bootstrap' },
  { name: 'WordPress', abbr: 'WordPress' },
  { name: 'WooCommerce', abbr: 'WooCommerce' },
  { name: 'Statamic', abbr: 'Statamic' },
  { name: 'Astro', abbr: 'Astro' },
  { name: 'Phaser 3', abbr: 'Phaser' },
  { name: 'Node.js', abbr: 'Node' },
  { name: 'PHP', abbr: 'PHP' },
  { name: 'Git', abbr: 'Git' },
  { name: 'GitHub', abbr: 'GitHub' },
  { name: 'Figma', abbr: 'Figma' },
  { name: 'Vite', abbr: 'Vite' },
];
