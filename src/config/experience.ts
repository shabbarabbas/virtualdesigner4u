import type { ExperienceItem } from '@/types';

/**
 * Career timeline. The two long-running current roles lead, then everything else
 * runs newest to oldest — the last entry sets the "years active" figure on the
 * Experience page, so keep the 2002 role at the bottom.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Founder & Senior Full-Stack Developer',
    company: 'The Virtual Design',
    location: 'Pakistan · Worldwide clients',
    start: '2005',
    end: 'Present',
    current: true,
    summary:
      'My own practice, running without a break for twenty years alongside every contract role below. Direct-referral clients, selected marketplace engagements and a steady line of self-initiated learning apps — all of it scoped, designed, built and supported by me.',
    highlights: [
      'Sustained a twenty-year independent practice in parallel with full-time contract work, with most projects arriving through direct contacts and past-client referrals.',
      'Built a repeat-client pipeline through People Per Hour and Upwork, turning one-off briefs into ongoing relationships rather than chasing new leads.',
      'Turn gap time between contracts into shipped work — side projects and learning apps that double as the R&D feeding straight back into client builds.',
      'Own every engagement end to end as the single point of contact: scoping, design, development, deployment and post-launch support.',
      'Kept the stack deliberately current, moving from hand-built PHP to WordPress to modern static builds without ever stranding an existing client.',
    ],
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'WordPress', 'PHP', 'Phaser 3', 'MySQL'],
  },

  {
    role: 'Web & Game Developer',
    company: 'Yeti Academy & Typing Agent',
    location: 'Seattle, USA · Remote',
    start: '2015',
    end: 'Present',
    current: true,
    summary:
      'Embedded in a distributed product team building typing curriculum and brain games used by students from elementary through high school. I own the interactive animation and game layer, and keep the company web presence on current technology rather than letting it drift.',
    highlights: [
      'Build interactive typing lessons and brain games covering every grade level, tuned to run smoothly on the low-spec Chromebooks classrooms actually issue.',
      'Maintain and modernise the Yeti Academy and Typing Agent websites and blogs, keeping the marketing stack current instead of accruing debt.',
      'Run the company website on Statamic 2, building custom themes and addons against a flat-file CMS where there is no plugin marketplace to fall back on — everything is written, not installed.',
      'A decade on the same codebase means maintaining work I wrote ten years ago — the strongest argument I know for writing it readably the first time.',
    ],
    stack: [
      'JavaScript',
      'Phaser 3',
      'HTML5 Canvas',
      'CreateJS',
      'CSS3',
      'Statamic',
      'WordPress',
      'REST APIs',
    ],
  },

  {
    role: 'Senior Web Designer & Developer',
    company: 'SJK Enterprises',
    location: 'Seattle, USA · Remote',
    start: '2010',
    end: '2025',
    summary:
      'A fifteen-year engagement delivering customised web solutions and holding together the web presence of small and mid-sized companies. It is also where the game work grew up, carrying a learning-game catalogue through three generations of browser technology.',
    highlights: [
      'Acted as the sole designer and developer on custom web applications and business sites, then stayed on to maintain every one of them.',
      'Carried browser-based learning games across three technology eras — ActionScript, then CreateJS, then Phaser 3 — instead of abandoning the catalogue at each shift.',
      'Rebuilt Flash-era educational titles in HTML5 ahead of the plugin shutdown, so clients kept every piece of content they had paid for.',
      'Ran the full operational side of a client website: hosting, updates, fixes and incremental improvements.',
      'Held the relationship for fifteen years — the longest continuous engagement of my career, and fully remote from day one.',
    ],
    stack: ['JavaScript', 'Phaser 3', 'CreateJS', 'ActionScript', 'PHP', 'WordPress', 'MySQL'],
  },

  {
    role: 'Frontend Developer',
    company: 'Pathway Solutions',
    location: 'Seattle, USA · Remote',
    start: '2005',
    end: '2010',
    summary:
      'My first remote role and the start of the freelance career — part-time to begin with, then full-time. I designed and built client sites, brought WordPress in as the first CMS the team had used, and produced the Flash and JavaScript interactive work alongside it.',
    highlights: [
      'Designed and developed client websites end to end, then moved the team off hand-maintained static pages by introducing WordPress as its first CMS.',
      'Became the in-house CMS specialist, evaluating and deploying Joomla! and Drupal where a content model outgrew what WordPress handled well.',
      'Built interactive content — Flash and JavaScript mini-games and quizzes — that became a genuine differentiator in client pitches.',
      'Proved out remote delivery long before it was normal, converting a part-time trial into a full-time role within the first year.',
      'Established the working habits — written scope, regular check-ins, no surprises at handover — that the independent practice still runs on.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Joomla!', 'Drupal', 'Adobe Flash', 'PHP'],
  },

  {
    role: 'Web Designer',
    company: 'NetTech',
    location: 'Pakistan',
    start: '2004',
    end: '2005',
    summary:
      'A designer-cum-developer role covering everything a client needed made — website layouts, logos, print brochures — and where I wrote my first PHP, building dynamic pages in an era before CMS platforms existed to do it for you.',
    highlights: [
      'Produced complete brand and web packages: table-based site layouts, logo design and print brochures, hand-built in Macromedia Dreamweaver.',
      'Taught myself PHP on the job and shipped the studio’s first dynamic, database-backed sites while the industry was still hand-editing static pages.',
      'Cut repeat edits across large sites dramatically by replacing duplicated markup with PHP includes and shared templates.',
      'Delivered layouts that held together across the full browser matrix of the era — the discipline that makes cross-browser work feel trivial now.',
      'Working across print and screen in the same week built the type, grid and hierarchy fundamentals I still design from.',
    ],
    stack: ['HTML', 'CSS', 'PHP', 'MySQL', 'Dreamweaver', 'Adobe Photoshop', 'Illustrator'],
  },

  {
    role: 'Multimedia Developer & Team Lead',
    company: 'Software Soft',
    location: 'Pakistan',
    start: '2002',
    end: '2004',
    summary:
      'Where the career began — building computer-based training for the Pakistan Air Force. We shipped CD-ROM courseware that taught trainees how aircraft systems work, and within two years I was leading the team producing it.',
    highlights: [
      'Developed CBT courseware in Macromedia Director and Flash, teaching Pakistan Air Force trainees aircraft systems through interactive simulation rather than static manuals.',
      'Promoted to lead the multimedia team, taking responsibility for CBT project delivery end to end within two years of starting.',
      'Shipped to CD-ROM, where nothing can be patched after release — every title had to be correct and complete on the first press.',
      'Built reusable animation and interaction systems in ActionScript and Lingo that shortened production on every title that followed.',
      'Learned the constraint that still shapes every game I build: design for the weakest machine in the room and everyone else gets a better experience for free.',
    ],
    stack: ['Macromedia Director', 'Lingo', 'Macromedia Flash', 'ActionScript', 'Adobe Photoshop'],
  },
];

/** Milestones highlighted separately from the timeline. */
export const achievements: { year: string; title: string; description: string }[] = [
  {
    year: '2025',
    title: 'Fifteen-year engagement completed',
    description:
      'Closed out a decade and a half with SJK Enterprises, having carried their learning-game catalogue through three separate generations of browser technology without losing a title.',
  },
  {
    year: '2020',
    title: 'Flash retired without losing the catalogue',
    description:
      'Rebuilt Flash-era educational content in HTML5 and Phaser 3 ahead of the plugin shutdown, so schools and clients kept every piece of courseware they had paid for.',
  },
  {
    year: '2015',
    title: 'Joined a US EdTech product team',
    description:
      'Became the interactive and game developer behind Typing Agent and Yeti Academy — typing curriculum and brain games now used by students across US school districts.',
  },
  {
    year: '2004',
    title: 'Promoted to lead the multimedia team',
    description:
      'Took charge of computer-based training delivery for the Pakistan Air Force two years into my career, responsible for courseware that had to ship right on the first press.',
  },
];
