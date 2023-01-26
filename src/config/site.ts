interface SiteConfig {
  name: string
  description: string
  links: {
    twitter: string
    twitterShadcn: string
    linkedin: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Template Next 13 [App]',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  links: {
    twitter: 'https://twitter.com/shadcn',
    twitterShadcn: 'https://twitter.com/shadcn',
    linkedin: 'https://www.linkedin.com/in/iury-franca-37873318b/',
    github: 'https://github.com/iuryfranca',
  },
}
