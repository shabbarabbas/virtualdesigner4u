import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Collection query helpers.
 *
 * Draft filtering happens here rather than in each page so that a forgotten
 * `draft: true` can never leak into production. Drafts remain visible in
 * `astro dev` for previewing.
 */
const includeDrafts = import.meta.env.DEV;

export type Project = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'posts'>;
export type Service = CollectionEntry<'services'>;
export type Testimonial = CollectionEntry<'testimonials'>;
export type Faq = CollectionEntry<'faqs'>;

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export async function getProjects(): Promise<Project[]> {
  const items = await getCollection('projects', ({ data }) => includeDrafts || !data.draft);
  return items.sort((a, b) => {
    if (b.data.order !== a.data.order) return b.data.order - a.data.order;
    return b.data.year - a.data.year;
  });
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const all = await getProjects();
  const featured = all.filter((p) => p.data.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

/** Categories that actually have projects, in the site's canonical order. */
export async function getProjectCategories(): Promise<string[]> {
  const all = await getProjects();
  const used = new Set(all.map((p) => p.data.category));
  return [...used];
}

/**
 * Previous/next navigation across the full project list, plus related items
 * matched on shared category first, then anything else.
 */
export function getProjectNeighbours(all: Project[], current: Project) {
  const index = all.findIndex((p) => p.id === current.id);
  return {
    prev: index > 0 ? all[index - 1] : undefined,
    next: index >= 0 && index < all.length - 1 ? all[index + 1] : undefined,
  };
}

export function getRelatedProjects(all: Project[], current: Project, limit = 3): Project[] {
  const others = all.filter((p) => p.id !== current.id);
  const sameCategory = others.filter((p) => p.data.category === current.data.category);
  const sharedTech = others.filter(
    (p) =>
      !sameCategory.includes(p) &&
      p.data.tech.some((t) => current.data.tech.includes(t)),
  );
  return [...sameCategory, ...sharedTech, ...others].slice(0, limit);
}

/* -------------------------------------------------------------------------- */
/* Blog posts                                                                  */
/* -------------------------------------------------------------------------- */

export async function getPosts(): Promise<Post[]> {
  const items = await getCollection('posts', ({ data }) => includeDrafts || !data.draft);
  return items.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}

export async function getPostCategories(): Promise<string[]> {
  const all = await getPosts();
  return [...new Set(all.map((p) => p.data.category))].sort();
}

export async function getPostTags(): Promise<string[]> {
  const all = await getPosts();
  return [...new Set(all.flatMap((p) => p.data.tags))].sort();
}

export function getRelatedPosts(all: Post[], current: Post, limit = 3): Post[] {
  const others = all.filter((p) => p.id !== current.id);
  const scored = others
    .map((p) => {
      const tagOverlap = p.data.tags.filter((t) => current.data.tags.includes(t)).length;
      const categoryMatch = p.data.category === current.data.category ? 2 : 0;
      return { post: p, score: tagOverlap + categoryMatch };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

/* -------------------------------------------------------------------------- */
/* Services, testimonials, FAQs                                                */
/* -------------------------------------------------------------------------- */

export async function getServices(): Promise<Service[]> {
  const items = await getCollection('services');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedServices(limit = 6): Promise<Service[]> {
  const all = await getServices();
  const featured = all.filter((s) => s.data.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const items = await getCollection('testimonials');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedTestimonials(limit = 3): Promise<Testimonial[]> {
  const all = await getTestimonials();
  const featured = all.filter((t) => t.data.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export async function getFaqs(): Promise<Faq[]> {
  const items = await getCollection('faqs');
  return items.sort((a, b) => a.data.order - b.data.order);
}

/** FAQs bucketed by category, preserving the canonical category order. */
export async function getFaqsByCategory(): Promise<{ category: string; items: Faq[] }[]> {
  const all = await getFaqs();
  const order = ['Process', 'Pricing', 'Timeline', 'Support', 'Game Development', 'WordPress'];
  return order
    .map((category) => ({
      category,
      items: all.filter((f) => f.data.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
