'use client'

import { useMoviesContext } from '@/core/contexts/movies-context'
import { useEffect } from 'react'

interface MoviePageProps {
  params: { slug: string }
}

export default function MoviePage({ params }: MoviePageProps) {
  const slug = parseInt(params.slug)

  const { detailsMovie, getDetailsMovie } = useMoviesContext()

  useEffect(() => {
    getDetailsMovie(slug)
  }, [])

  return (
    <>
      <h1>My Page</h1>
      <h1>{slug}</h1>
      <pre>{JSON.stringify(detailsMovie, null, 2)}</pre>
    </>
  )
}
