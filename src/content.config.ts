import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections.
 *
 * Images are referenced as public-path strings (e.g. `/images/work/foo.svg`)
 * rather than Astro image assets so that content can be edited without
 * touching imports. When you swap the placeholders for real photography,
 * consider moving them into `src/assets/` and switching these fields to
 * `image()` to unlock automatic responsive/AVIF generation.
 */

const seoFields = {
  /** Overrides the auto-generated <title>. */
  seoTitle: z.string().optional(),
  /** Overrides the auto-generated meta description. */
  seoDescription: z.string().optional(),
  noindex: z.boolean().default(false),
};

export const projectCategories = [
  'Web Design',
  'Web Development',
  'WordPress',
  'Games',
  'Landing Pages',
  'Educational',
  'Other',
] as const;

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** One-line summary shown on cards and in search results. */
    summary: z.string(),
    /** Longer positioning statement for the detail hero. */
    description: z.string(),
    category: z.enum(projectCategories),
    /** Additional filter facets beyond the primary category. */
    tags: z.array(z.string()).default([]),
    /** Technology chips shown on the card and detail page. */
    tech: z.array(z.string()).default([]),
    client: z.string().optional(),
    industry: z.string().optional(),
    role: z.string().optional(),
    /** Project duration, e.g. "6 weeks". */
    duration: z.string().optional(),
    year: z.number().int().min(2000).max(2100),
    /** Sort key — higher floats to the top. */
    order: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    cover: z.string(),
    coverAlt: z.string(),
    /** Accent used for the card's ambient glow, any CSS colour. */
    accent: z.string().optional(),

    gallery: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }))
      .default([]),

    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        caseStudy: z.string().url().optional(),
      })
      .default({}),

    /** Structured case-study narrative. */
    problem: z.string(),
    solution: z.string(),
    features: z.array(z.string()).default([]),
    challenges: z
      .array(z.object({ title: z.string(), detail: z.string() }))
      .default([]),
    results: z
      .array(z.object({ metric: z.string(), label: z.string(), detail: z.string().optional() }))
      .default([]),
    lessons: z.array(z.string()).default([]),

    /** Optional inline client quote. */
    testimonial: z
      .object({ quote: z.string(), author: z.string(), role: z.string().optional() })
      .optional(),

    ...seoFields,
  }),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('Shabbar Abbas'),
    ...seoFields,
  }),
});

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** Card summary. */
    summary: z.string(),
    /** Full intro paragraph on the services page. */
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    /** Grouping used to section the services page. */
    group: z.enum(['Design', 'Development', 'Games', 'Care']).default('Development'),
    benefits: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    /** Optional "from" price or engagement note. */
    startingAt: z.string().optional(),
    timeline: z.string().optional(),
    ...seoFields,
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: './src/content/testimonials', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    company: z.string().optional(),
    location: z.string().optional(),
    /** 1–5; rendered as stars. */
    rating: z.number().min(1).max(5).default(5),
    /** Pull-quote shown in compact cards. */
    quote: z.string(),
    avatar: z.string().optional(),
    /** Slug of the related project, if any. */
    project: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    date: z.coerce.date().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ base: './src/content/faqs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    question: z.string(),
    category: z.enum([
      'Process',
      'Pricing',
      'Timeline',
      'Support',
      'Game Development',
      'WordPress',
    ]),
    order: z.number().default(0),
    /** Plain-text answer used for FAQPage structured data. */
    plain: z.string(),
  }),
});

export const collections = { projects, posts, services, testimonials, faqs };
