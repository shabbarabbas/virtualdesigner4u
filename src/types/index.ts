/**
 * Shared type definitions.
 *
 * Content-collection entry types are inferred from the Zod schemas in
 * `src/content.config.ts` — import `CollectionEntry` from `astro:content`
 * for those. The types here describe hand-authored config data only.
 */

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'arrow-left'
  | 'check'
  | 'chevron-down'
  | 'close'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'mail'
  | 'map-pin'
  | 'clock'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'twitter'
  | 'dribbble'
  | 'external'
  | 'sparkles'
  | 'code'
  | 'layout'
  | 'wordpress'
  | 'gamepad'
  | 'gauge'
  | 'wrench'
  | 'bug'
  | 'shield'
  | 'rocket'
  | 'palette'
  | 'search'
  | 'users'
  | 'star'
  | 'quote'
  | 'calendar'
  | 'briefcase'
  | 'target'
  | 'compass'
  | 'layers'
  | 'zap'
  | 'heart'
  | 'phone'
  | 'copy'
  | 'link';

export interface NavItem {
  label: string;
  href: string;
  /** Short blurb shown in the mobile menu. */
  description?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  /** Shown next to the link on the contact page. */
  handle?: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export interface Skill {
  name: string;
  /** Self-assessed proficiency, 0–100. Drives the animated meters. */
  level: number;
  /** Years of hands-on use. */
  years?: number;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TechLogo {
  name: string;
  /** Inline SVG path data or a simple wordmark fallback. */
  abbr: string;
}

/** Props shared by every page-level layout. */
export interface SeoProps {
  title: string;
  description: string;
  /** Path-relative or absolute image used for OG/Twitter cards. */
  image?: string;
  /** Overrides the canonical URL derived from Astro.url. */
  canonical?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}
