'use client'

import { CardMovie } from '@/components/card-movies'
import { Button } from '@/components/ui/button'
import { useMoviesContext } from '@/core/contexts/movies-context'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { ListItemsPageSkeleton } from './skeleton/list-items-page-skeleton'

export function ListItemsPage() {
  const { moviesList, loadingData, getMovies, incrementPageNumber } =
    useMoviesContext()

  useEffect(() => {
    if (moviesList.length === 0) {
      getMovies()
    }
  }, [])

  return (
    <>
      {loadingData ? (
        <ListItemsPageSkeleton />
      ) : (
        <div className='flex w-full flex-row flex-wrap justify-between gap-6'>
          {moviesList?.map((item) => (
            <CardMovie key={item.id} {...item} />
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
            onClick={() => incrementPageNumber()}
          >
            Carregar mais filmes
          </Button>
        )}
      </div>
    </>
  )
}
