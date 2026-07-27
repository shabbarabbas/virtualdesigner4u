import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { getPosts } from '@/lib/content';
import { site } from '@/config/site';
import { personal } from '@/config/personal';

/**
 * RSS 2.0 feed for the blog.
 *
 * Only metadata is published — full bodies would require rendering MDX to a
 * string, which adds build cost for very little subscriber benefit.
 */
export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  const origin = context.site?.href ?? site.url;

  return rss({
    title: `${site.name} — Blog`,
    description:
      'Practical writing on web performance, accessibility, WordPress, Astro and HTML5 game development.',
    site: origin,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}`,
      categories: [post.data.category, ...post.data.tags],
      author: personal.email ? `${personal.email} (${post.data.author})` : post.data.author,
    })),
    customData: `<language>${site.language}</language><copyright>© ${new Date().getFullYear()} ${personal.fullName}</copyright>`,
  });
};
