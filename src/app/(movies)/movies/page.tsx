import { CardMovie } from '@/components/card-movies'
import { FilterSkeleton } from '@/components/skeleton/filter-skeleton'
import { api } from '@/lib/axios'
import * as React from 'react'

const apiKey = process.env.API_KEY_V3
const pageNumber = '&page=1'

async function getPopularMovies() {
  // console.log(`${baseURL}/movie/popular?${apiKey}&language=pt-BR${pageNumber}`)
  return api
    .get(`/movie/popular?${apiKey}&language=pt-BR${pageNumber}`)
    .then((res) => res.data)
    .catch((err) => new Error('Failed to fetch data', err))
}

export default async function MoviesPage() {
  const data = await getPopularMovies()

  return (
    <>
      <p className='pt-3 pb-3 text-2xl font-extrabold leading-tight tracking-tighter md:py-5 md:text-3xl lg:text-4xl  lg:leading-[1.1]'>
        Filmes populares
      </p>
      <div className='flex flex-col items-start gap-6 md:grid md:grid-cols-[250px_1fr]'>
        <section className='grid w-full items-center gap-6 pt-6 md:py-5'>
          <FilterSkeleton />
        </section>
        <section className='flex w-full pt-6 pb-8 md:py-5'>
          <div className='flex w-full flex-row flex-wrap justify-between gap-6'>
            {data.results.map((item) => (
              <CardMovie key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
