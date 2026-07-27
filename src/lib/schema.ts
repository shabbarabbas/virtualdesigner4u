import { site, seoDefaults } from '@/config/site';
import { personal, socials } from '@/config/personal';
import { absoluteUrl } from '@/lib/utils';

/**
 * JSON-LD builders.
 *
 * Everything is emitted as a single `@graph` per page so search engines see
 * one connected entity map rather than several disconnected blobs.
 */

type Json = Record<string, unknown>;

export function personSchema(origin: string): Json {
  return {
    '@type': 'Person',
    '@id': seoDefaults.jsonLdId,
    name: personal.fullName,
    givenName: personal.firstName,
    familyName: personal.lastName,
    jobTitle: personal.jobTitle,
    description: site.description,
    url: origin,
    image: absoluteUrl(personal.photo, origin),
    email: `mailto:${personal.email}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: personal.location,
    },
    sameAs: socials.map((s) => s.href),
    knowsAbout: [
      'Web Design',
      'Frontend Development',
      'WordPress Development',
      'HTML5 Game Development',
      'Phaser 3',
      'Web Performance Optimization',
      'Web Accessibility',
    ],
  };
}

export function websiteSchema(origin: string): Json {
  return {
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: origin,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { '@id': seoDefaults.jsonLdId },
  };
}

export function professionalServiceSchema(origin: string): Json {
  return {
    '@type': 'ProfessionalService',
    '@id': `${origin}/#service`,
    name: site.shortName,
    description: site.description,
    url: origin,
    image: absoluteUrl(site.ogImage, origin),
    provider: { '@id': seoDefaults.jsonLdId },
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Urdu'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: personal.location,
    },
    serviceType: [
      'Website Design',
      'Website Development',
      'WordPress Development',
      'HTML5 Game Development',
      'Website Performance Optimization',
    ],
  };
}

export function breadcrumbSchema(
  origin: string,
  crumbs: { name: string; path: string }[],
): Json {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${origin}/#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path, origin),
    })),
  };
}

export function articleSchema(
  origin: string,
  article: {
    title: string;
    description: string;
    path: string;
    image?: string;
    published: Date;
    updated?: Date;
    tags?: string[];
  },
): Json {
  return {
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(article.path, origin)}#article`,
    headline: article.title,
    description: article.description,
    url: absoluteUrl(article.path, origin),
    image: absoluteUrl(article.image ?? site.ogImage, origin),
    datePublished: article.published.toISOString(),
    dateModified: (article.updated ?? article.published).toISOString(),
    keywords: article.tags?.join(', '),
    inLanguage: site.language,
    author: { '@id': seoDefaults.jsonLdId },
    publisher: { '@id': seoDefaults.jsonLdId },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(article.path, origin) },
  };
}

export function creativeWorkSchema(
  origin: string,
  project: {
    title: string;
    description: string;
    path: string;
    image: string;
    year: number;
    tech: string[];
    client?: string;
  },
): Json {
  return {
    '@type': 'CreativeWork',
    '@id': `${absoluteUrl(project.path, origin)}#work`,
    name: project.title,
    description: project.description,
    url: absoluteUrl(project.path, origin),
    image: absoluteUrl(project.image, origin),
    dateCreated: String(project.year),
    keywords: project.tech.join(', '),
    creator: { '@id': seoDefaults.jsonLdId },
    ...(project.client ? { sourceOrganization: { '@type': 'Organization', name: project.client } } : {}),
  };
}

export function faqSchema(origin: string, items: { question: string; answer: string }[]): Json {
  return {
    '@type': 'FAQPage',
    '@id': `${origin}/faq#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Wrap one or more node builders into a single @graph document. */
export function buildGraph(nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
