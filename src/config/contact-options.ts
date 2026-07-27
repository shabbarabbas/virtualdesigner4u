/**
 * Options offered in the contact form's "what do you need help with" field.
 * Kept separate from the services collection so the form stays short and
 * scannable rather than listing every individual service page.
 */
export const services = [
  'New website',
  'Website redesign',
  'WordPress',
  'Landing page',
  'HTML5 game',
  'Speed & Core Web Vitals',
  'Bug fixes',
  'Ongoing maintenance',
] as const;

/** Preferred ways to reach me, shown alongside the form. */
export const contactChannels = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'hello@virtualdesigner4u.com',
    href: 'mailto:hello@virtualdesigner4u.com',
    detail: 'Best for project briefs and quotes.',
  },
  {
    icon: 'clock',
    label: 'Response time',
    value: 'Within one business day',
    detail: 'Monday to Saturday, 09:00–19:00 PKT.',
  },
  {
    icon: 'map-pin',
    label: 'Based in',
    value: 'Pakistan (UTC+5)',
    detail: 'Working with clients across UK, EU, US and AU time zones.',
  },
] as const;
