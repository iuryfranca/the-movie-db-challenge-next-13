'use client'

import { useMoviesContext } from '@/core/contexts/movies-context'
import { useEffect } from 'react'
import Image from 'next/image'

interface MoviePageProps {
  params: { slug: string }
}

export default function MoviePage({ params }: MoviePageProps) {
  const slug = parseInt(params.slug)

  const { detailsMovie, getDetailsMovie, loadingData } = useMoviesContext()

  const srcBackdropPath =
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces' +
    detailsMovie?.backdrop_path
  const srcPosterPath =
    'https://image.tmdb.org/t/p/w300' + detailsMovie?.poster_path

  useEffect(() => {
    getDetailsMovie(slug)
  }, [])

  return (
    <>
      {loadingData ? (
        <div>Carregando...</div>
      ) : (
        <div className='relative h-[400px] w-full bg-cover bg-no-repeat sm:h-[500px]'>
          <Image
            src={srcBackdropPath}
            alt='Background Image Movie Details'
            style={{ objectFit: 'cover' }}
            className='-z-10 blur-sm brightness-50'
            fill
          />
          <div className='z-10 grid h-full w-full grid-rows-[400px_1fr] text-white sm:grid-cols-[300px_1fr] sm:py-10 sm:px-7'>
            <div className='flex h-full w-full items-center justify-center'>
              <Image
                src={srcPosterPath}
                alt='Image Movie Poster'
                className='rounded-lg shadow-lg'
                width={200}
                height={350}
                quality={100}
              />
            </div>
            <section className='flex flex-wrap content-center items-start py-10 px-7'>
              <div className='mb-6 flex w-full flex-col flex-wrap'>
                <h1 className='text-3xl font-semibold'>
                  {detailsMovie?.title}
                </h1>
                <div className='flex'>
                  <span>Certification</span>
                  <span>DATA</span>
                  <span>Generos</span>
                  <span>TEMPO DE DURAÇAO</span>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='font-normal italic opacity-70'>
                  {detailsMovie?.tagline}
                </h3>
                <h3>Sinopse</h3>
                <p>{detailsMovie?.overview}</p>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}
