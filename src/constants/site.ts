export const SITE_METADATA = {
  siteName: 'Ocean Portfolio',
  tagline: 'An immersive deep-sea interactive web experience',
  description: 'A premium portfolio exploring creative technology through an interactive underwater journey.',
  github: 'https://github.com/placeholder',
  linkedin: 'https://linkedin.com/in/placeholder',
  email: 'hello@example.com',
} as const;

export type SiteMetadata = typeof SITE_METADATA;
