import type { ProcessStep, SocialLink, Stat, ValueItem } from '@/types';

/**
 * Everything about the person behind the site.
 * TODO: replace social URLs and email with your real accounts.
 */
export const personal = {
  firstName: 'Shabbar',
  lastName: 'Abbas',
  fullName: 'Shabbar Abbas',
  /** Shown under the name in the hero. */
  role: 'Web Designer & Frontend Developer',
  /** Longer positioning line for SEO and structured data. */
  jobTitle: 'Senior Web Developer | UI/UX Designer | HTML5 Game Developer',
  location: 'Islamabad, Pakistan',
  timezone: 'PKT (UTC+5)',
  email: 'hello@virtualdesigner4u.com',
  phone: '', // Optional — leave empty to hide from the contact page.
  /** Portrait lives in /public/images. Replace with your own photo. */
  photo: '/images/shabbar-abbas.jpg',
  photoAlt: 'Portrait of Shabbar Abbas, web designer and developer',
  /**
   * Downloadable CV. Drop the file in /public and set the path here — the
   * download buttons stay hidden while this is empty, so no broken link ships.
   */
  resume: '',

  availability: {
    open: true,
    label: 'Available for new projects',
    detail: 'Taking on select engagements — typically starting within 1–2 weeks.',
  },

  responseTime: 'Replies within one business day',

  /** One-liner used in cards, meta descriptions and the footer. */
  short:
    'I design and build fast, accessible websites and browser games that turn visitors into customers.',

  /** Hero paragraph. */
  intro:
    'With more than two decades of professional experience, I have helped founders, agencies and educators ship websites that load fast, rank well and actually convert — plus HTML5 games that keep players coming back. No templates, no bloat, no hand-off surprises.',

  /** Two-to-three paragraph story used on the About page. */
  story: [
    'I started in 2002 building interactive multimedia, then moved to the web when a "layout" still meant nested tables and every browser needed its own hack. That era taught me something I still design around: the web is unpredictable, and the only work that survives is work built on solid fundamentals.',
    'Since then I have delivered well over a hundred projects for clients across Europe, North America, the Gulf and Australia — marketing sites, WordPress platforms, custom frontends, landing pages that had to convert, and HTML5 games used in classrooms. Most arrive through referrals or repeat business, which is the metric I care about most.',
    'My approach is deliberately unglamorous. I ask what the site actually needs to achieve, remove everything that does not serve it, and build the rest properly — semantic markup, real accessibility, measured performance budgets, and code the next developer can read. Clients stay because projects ship on time and keep working long after launch.',
  ],

  /** Short "why me" statement used on the home page CTA. */
  pitch:
    'You get a senior developer who writes the code, talks to you directly, and stays accountable for the result — not a project manager relaying instructions to a junior team.',
} as const;

export const stats: Stat[] = [
  {
    value: 24,
    suffix: '+',
    label: 'Years of experience',
    description: 'Building for the web professionally since 2002.',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Projects delivered',
    description: 'Marketing sites, web apps, WordPress builds and games.',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Clients worldwide',
    description: 'Across 12 countries and four continents.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Repeat & referral rate',
    description: 'Most new work comes from people I have already worked with.',
  },
];

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/shabbarabbas',
    icon: 'github',
    handle: '@shabbarabbas',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shabbarabbas', 
    icon: 'linkedin',
    handle: '/in/shabbarabbas',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@virtualdesigner4u', 
    icon: 'youtube',
    handle: '@virtualdesigner4u',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/shabbar_abbas', 
    icon: 'twitter',
    handle: '@shabbar_abbas',
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~0199479e366e784efd', 
    icon: 'briefcase',
    handle: '@virtualdesigner4u',
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=923435149816&text=Hi!%20I%20just%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20web%20development%20services.', 
    icon: 'phone',
    handle: '+92 343 5149816',
  },
];

export const values: ValueItem[] = [
  {
    title: 'Performance is a feature',
    description:
      'Every build ships against a budget. If a library cannot justify its kilobytes, it does not make the cut — which is why my sites routinely score 95+ on Lighthouse without last-minute tricks.',
    icon: 'gauge',
  },
  {
    title: 'Accessible by default',
    description:
      'Semantic HTML, real keyboard support and WCAG AA contrast are part of the build, not a retrofit. It widens your audience and keeps you on the right side of compliance.',
    icon: 'shield',
  },
  {
    title: 'Plain-language communication',
    description:
      'You will always know what I am working on, what I need from you, and what happens next. No jargon walls, no silent weeks, no invoices that arrive before the explanation.',
    icon: 'users',
  },
  {
    title: 'Code you are not trapped by',
    description:
      'Readable, documented, standards-based code with no proprietary lock-in. If you ever hand the project to another developer, they will thank you rather than quote a rebuild.',
    icon: 'code',
  },
  {
    title: 'Deadlines that hold',
    description:
      'Scope is agreed in writing before work starts, and progress is visible throughout. In fifteen years the overwhelming majority of my projects have shipped on or ahead of schedule.',
    icon: 'calendar',
  },
  {
    title: 'Built to be maintained',
    description:
      'Sensible structure, consistent naming and documentation mean small changes stay small changes — a year later, and by someone who is not me.',
    icon: 'wrench',
  },
];

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & scope',
    description:
      'We start with the business outcome, not the page count. I map your audience, competitors and must-have functionality, then turn it into a written scope with a fixed price and timeline so there are no surprises later.',
    deliverables: ['Requirements brief', 'Sitemap', 'Fixed quote & schedule'],
  },
  {
    step: '02',
    title: 'Design direction',
    description:
      'You get a real design for the key templates — typography, colour, spacing and interaction states — reviewed in the browser rather than a static mockup, so what you approve is what you receive.',
    deliverables: ['Design system', 'Key page designs', 'Responsive behaviour'],
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Hand-written, standards-based code with accessibility and performance verified as I go. You get a staging link from day one and can follow progress continuously instead of waiting for a big reveal.',
    deliverables: ['Staging environment', 'Component library', 'CMS integration'],
  },
  {
    step: '04',
    title: 'Test & optimise',
    description:
      'Cross-browser and cross-device testing, Lighthouse and Core Web Vitals tuning, SEO fundamentals, analytics wiring and a full accessibility pass before anything goes near production.',
    deliverables: ['QA report', 'Lighthouse 95+', 'SEO & analytics setup'],
  },
  {
    step: '05',
    title: 'Launch & handover',
    description:
      'Deployment, DNS, SSL and redirects handled for you, followed by a walkthrough recording and written documentation so your team can manage content confidently from day one.',
    deliverables: ['Production deployment', 'Training video', 'Documentation'],
  },
  {
    step: '06',
    title: 'Support & growth',
    description:
      'Thirty days of post-launch support are included on every project, with optional ongoing maintenance for updates, backups, monitoring and incremental improvements.',
    deliverables: ['30-day support', 'Maintenance plan', 'Iteration roadmap'],
  },
];

/** Tools grouped for the About page "what I work with" section. */
export const toolkit: { group: string; items: string[] }[] = [
  {
    group: 'Design',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Spline'],
  },
  {
    group: 'Build',
    items: ['VS Code', 'Vite', 'Astro', 'Node.js', 'npm', 'Git & GitHub'],
  },
  {
    group: 'Quality',
    items: ['Lighthouse', 'axe DevTools', 'WebPageTest', 'BrowserStack', 'ESLint'],
  },
  {
    group: 'Delivery',
    items: ['GitHub Actions', 'Netlify', 'Vercel', 'cPanel', 'Cloudflare'],
  },
];

/** Industries served — used on the Experience page. */
export const industries: string[] = [
  'SaaS & startups',
  'Education & e-learning',
  'Digital agencies',
  'E-commerce & retail',
  'Professional services',
  'Real estate',
  'Health & wellness',
  'Hospitality & travel',
  'Non-profit',
  'Construction & trades',
];
