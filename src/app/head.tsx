import { siteConfig } from '@/config/site'

export default function Head() {
  // const url = process.env.NEXT_PUBLIC_APP_URL
  // const ogUrl = new URL(`${url}/og.jpg`)
  return (
    <>
      <meta http-equiv='cleartype' content='on' />
      <meta charSet='utf-8' />
      <title>{`${siteConfig.name} - ${siteConfig.description}`}</title>
      <meta name='description' content={siteConfig.description} />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />

      <title>Filmes Populares &#8212; The Movie Database (TMDB)</title>
      <meta
        name='keywords'
        content='Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'
      />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta
        name='description'
        content='The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.'
      />
      <link rel='manifest' href='/manifest.json?version=3' />
      <link rel='canonical' href='https://www.themoviedb.org/movie' />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={siteConfig.name} />
      <meta property='og:description' content={siteConfig.description} />
      {/* <meta property='og:url' content={url?.toString()} /> */}
      {/* <meta property='og:image' content={ogUrl.toString()} /> */}
    </>
  )
}
