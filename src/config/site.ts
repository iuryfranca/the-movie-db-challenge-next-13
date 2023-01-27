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
  name: 'The Movie DB',
  description:
    'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
  links: {
    twitter: 'https://twitter.com/shadcn',
    twitterShadcn: 'https://twitter.com/shadcn',
    linkedin: 'https://www.linkedin.com/in/iury-franca-37873318b/',
    github: 'https://github.com/iuryfranca',
  },
}
