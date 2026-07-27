import type { NavItem } from '@/types';

/** Primary header navigation. Order here is the order rendered. */
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/', description: 'Start here' },
  { label: 'About', href: '/about', description: 'Background and approach' },
  { label: 'Services', href: '/services', description: 'What I can build for you' },
  { label: 'Portfolio', href: '/portfolio', description: 'Selected client work' },
  { label: 'Experience', href: '/experience', description: 'Career timeline' },
  { label: 'Skills', href: '/skills', description: 'Tools and proficiencies' },
  { label: 'Blog', href: '/blog', description: 'Notes on the craft' },
  { label: 'Contact', href: '/contact', description: 'Start a project' },
];

/**
 * Secondary links surfaced in the footer only — kept out of the header so the
 * primary nav stays scannable.
 */
export const secondaryNav: NavItem[] = [
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Explore',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
    ],
  },
  {
    title: 'Details',
    items: [
      { label: 'Experience', href: '/experience' },
      { label: 'Skills', href: '/skills' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'More',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'RSS Feed', href: '/rss.xml' },
    ],
  },
];

/** Anchor targets used for in-page scrollspy on the home page. */
export const homeSections = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Testimonials' },
] as const;
