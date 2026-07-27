import type { ExperienceItem } from '@/types';

/**
 * Career timeline, newest first.
 * TODO: adjust company names, dates and highlights to match your real history.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Independent Web Designer & Developer',
    company: 'VirtualDesigner4U',
    location: 'Remote · Pakistan',
    start: '2016',
    end: 'Present',
    current: true,
    summary:
      'Running an independent studio serving founders, agencies and education companies worldwide. I handle the full lifecycle — scoping, design, development, launch and ongoing support — as the single point of contact.',
    highlights: [
      'Delivered 90+ websites and applications with a 98% repeat-and-referral rate.',
      'Rebuilt legacy marketing sites onto modern static stacks, cutting median load time from 4.8s to under 1.2s.',
      'Became the long-term white-label frontend partner for four digital agencies across the UK, US and UAE.',
      'Shipped a library of HTML5 learning games now used in classrooms across multiple school districts.',
    ],
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Phaser 3', 'PHP'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Agency & Studio Contracts',
    location: 'Remote',
    start: '2013',
    end: '2016',
    summary:
      'Embedded with agency teams as the senior frontend specialist on client builds, translating design files into production templates and mentoring junior developers on standards.',
    highlights: [
      'Led frontend delivery on 30+ agency projects spanning e-commerce, SaaS and corporate sites.',
      'Introduced a shared component library that cut template build time by roughly 40%.',
      'Established the accessibility and cross-browser QA checklist adopted across client work.',
      'Mentored four junior developers through their first production launches.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress'],
  },
  {
    role: 'WordPress Developer',
    company: 'Freelance & Direct Clients',
    location: 'Remote',
    start: '2011',
    end: '2013',
    summary:
      'Specialised in custom WordPress themes for small businesses that had outgrown page builders and needed something faster, safer and genuinely tailored to how they work.',
    highlights: [
      'Built 40+ bespoke themes with custom post types and client-friendly editing workflows.',
      'Migrated dozens of static and legacy CMS sites to WordPress with zero SEO regressions.',
      'Cut average page weight by more than half through asset auditing and query optimisation.',
      'Set up maintenance retainers covering updates, backups and uptime monitoring.',
    ],
    stack: ['WordPress', 'PHP', 'MySQL', 'jQuery', 'CSS3'],
  },
  {
    role: 'Web Designer',
    company: 'Early Career',
    location: 'Pakistan',
    start: '2009',
    end: '2011',
    summary:
      'Where it started: designing and hand-coding brochure sites, learning the discipline of cross-browser support in an era when it was genuinely hard.',
    highlights: [
      'Designed and hand-coded 25+ small business websites end to end.',
      'Built pixel-accurate layouts supporting browsers back to IE7.',
      'Moved from table-based layouts to standards-compliant semantic CSS.',
      'Developed the design fundamentals — type, grid, hierarchy — still underpinning my work.',
    ],
    stack: ['HTML', 'CSS', 'Photoshop', 'jQuery'],
  },
];

/** Milestones highlighted separately from the timeline. */
export const achievements: { year: string; title: string; description: string }[] = [
  {
    year: '2024',
    title: 'Perfect Lighthouse across a client portfolio',
    description:
      'Delivered a 12-site agency rebuild where every template scored 100 on Performance, Accessibility and Best Practices.',
  },
  {
    year: '2022',
    title: 'Educational game suite adopted at scale',
    description:
      'A Phaser 3 learning-game collection reached tens of thousands of students, running smoothly on decade-old classroom hardware.',
  },
  {
    year: '2020',
    title: 'Top-rated freelance status',
    description:
      'Maintained a consistent 5-star rating across international freelance platforms with 100% job success.',
  },
  {
    year: '2018',
    title: 'Long-term agency partnerships',
    description:
      'Became the retained white-label frontend partner for multiple agencies — relationships still active today.',
  },
];
