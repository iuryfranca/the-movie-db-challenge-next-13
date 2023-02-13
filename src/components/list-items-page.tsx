'use client'

import { CardMovie } from '@/components/card-movies'
import { Button } from '@/components/ui/button'
import { useMoviesContext } from '@/core/contexts/movies-context'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { ListItemsPageSkeleton } from './skeleton/list-items-page-skeleton'
import Link from 'next/link'

export function ListItemsPage() {
  const { moviesList, loadingData, getMovies, numberPage } = useMoviesContext()

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      {loadingData && moviesList.length === 0 ? (
        <ListItemsPageSkeleton />
      ) : (
        <div className='flex w-full flex-row flex-wrap justify-between gap-6'>
          {moviesList?.map((item) => (
            <Link key={item.id} href={`/movies/${item.id}`}>
              <CardMovie {...item} />
            </Link>
          ))}
        </div>
      )}

      <div className='flex items-center justify-center'>
        {loadingData ? (
          <Button
            className='mt-8 border-2 border-slate-900 dark:border-slate-300'
            disabled
          >
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Carregar mais filmes
          </Button>
        ) : (
          <Button
            variant='outline'
            className='mt-8 border-2 border-slate-900 dark:border-slate-300'
            onClick={() => getMovies('popular', numberPage + 1)}
          >
            Carregar mais filmes
          </Button>
        )}
      </div>
    </>
  )
}
