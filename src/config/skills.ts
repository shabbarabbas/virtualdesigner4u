import type { SkillCategory, TechLogo } from '@/types';

/**
 * Skill matrix. `level` drives the animated meters (0–100) and `years` is
 * shown as a secondary signal — both are self-assessed, so keep them honest.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'The core of my practice: hand-written markup and styles that stay fast, accessible and maintainable long after launch.',
    icon: 'code',
    skills: [
      { name: 'HTML5 & Semantic Markup', level: 98, years: 24, note: 'Accessibility-first structure' },
      { name: 'CSS3, Flexbox & Grid', level: 97, years: 14, note: 'Modern layout without frameworks' },
      { name: 'JavaScript (ES2023+)', level: 92, years: 14, note: 'Vanilla-first, framework-ready' },
      { name: 'TypeScript', level: 85, years: 5, note: 'Strict mode across projects' },
      { name: 'Tailwind CSS', level: 94, years: 5 },
      { name: 'Bootstrap', level: 95, years: 12 },
      { name: 'Responsive & Fluid Design', level: 97, years: 20 },
      { name: 'Web Accessibility (WCAG)', level: 88, years: 8 },
    ],
  },
  {
    id: 'cms',
    title: 'CMS & WordPress',
    description:
      'Custom themes and plugins built the WordPress way — secure, update-safe and genuinely pleasant for clients to edit.',
    icon: 'wordpress',
    skills: [
      { name: 'Custom Theme Development', level: 95, years: 15 },
      { name: 'Plugin Development', level: 84, years: 12 },
      { name: 'Gutenberg & Block Patterns', level: 82, years: 5 },
      { name: 'ACF & Custom Post Types', level: 92, years: 10 },
      { name: 'WooCommerce', level: 80, years: 8 },
      { name: 'Security Hardening', level: 86, years: 10 },
      { name: 'Speed Optimisation', level: 93, years: 10 },
    ],
  },
  {
    id: 'games',
    title: 'Game Development',
    description:
      'Browser games that run smoothly on low-end school hardware — scene-driven architecture, tight asset budgets, no plugins.',
    icon: 'gamepad',
    skills: [
      { name: 'Phaser 3', level: 90, years: 7 },
      { name: 'HTML5 Canvas API', level: 88, years: 9 },
      { name: 'Game Loop & State Management', level: 87, years: 7 },
      { name: 'Sprite & Asset Pipelines', level: 85, years: 7 },
      { name: 'Educational Game Design', level: 89, years: 6 },
      { name: 'Mobile & Touch Controls', level: 86, years: 7 },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling & Workflow',
    description:
      'Modern build tooling and version control, applied without turning a five-page site into a distributed system.',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', level: 90, years: 11 },
      { name: 'Astro', level: 88, years: 3 },
      { name: 'Vite', level: 85, years: 4 },
      { name: 'npm & Package Management', level: 88, years: 10 },
      { name: 'GitHub Actions & CI/CD', level: 78, years: 4 },
      { name: 'AI-assisted Development', level: 88, years: 3 },
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
      { name: 'Design Systems', level: 86, years: 7 },
      { name: 'Typography & Layout', level: 88, years: 14 },
      { name: 'Figma', level: 85, years: 6 },
      { name: 'Adobe Photoshop & Illustrator', level: 88, years: 24 },
      { name: 'Prototyping', level: 82, years: 8 },
    ],
  },
  {
    id: 'platform',
    title: 'Backend & Platform',
    description:
      'The server-side and integration work a frontend specialist genuinely needs — enough to ship end to end.',
    icon: 'layers',
    skills: [
      { name: 'PHP (WordPress context)', level: 82, years: 15 },
      { name: 'REST API Integration', level: 87, years: 9 },
      { name: 'MySQL Fundamentals', level: 74, years: 10 },
      { name: 'Static Site Architecture', level: 90, years: 5 },
      { name: 'Hosting, DNS & SSL', level: 86, years: 12 },
      { name: 'Performance & Core Web Vitals', level: 93, years: 8 },
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
  { name: 'Astro', abbr: 'Astro' },
  { name: 'Phaser 3', abbr: 'Phaser' },
  { name: 'Node.js', abbr: 'Node' },
  { name: 'PHP', abbr: 'PHP' },
  { name: 'Git', abbr: 'Git' },
  { name: 'GitHub', abbr: 'GitHub' },
  { name: 'Figma', abbr: 'Figma' },
  { name: 'Vite', abbr: 'Vite' },
];
