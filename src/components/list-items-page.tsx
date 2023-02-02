'use client'

import { CardMovie } from '@/components/card-movies'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/axios'
import { Loader2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { ListItemsPageSkeleton } from './skeleton/list-items-page-skeleton'

const apiKey = process.env.NEXT_PUBLIC_API_KEY_V3

export function ListItemsPage() {
  const [listItems, setListItems] = useState<any[]>([])
  const [numberPage, setNumberPage] = useState<number>(1)
  const [loadingData, setLoadingData] = useState<boolean>(true)

  const getPopularMovies = useCallback(async () => {
    const pageNumberUrl = `&page=${numberPage}`
    setLoadingData(true)

    api
      .get(`/movie/popular?${apiKey}&language=pt-BR${pageNumberUrl}`)
      .then((res) => {
        const lastListItems = listItems
        setListItems([...lastListItems, ...res.data.results])
      })
      .catch((err) => new Error('Failed to fetch data: ', err))
      .finally(() => {
        setLoadingData(false)
      })
  }, [listItems, numberPage])

  useEffect(() => {
    getPopularMovies()
  }, [numberPage])

  return (
    <>
      {loadingData ? (
        <ListItemsPageSkeleton />
      ) : (
        <div className='flex w-full flex-row flex-wrap justify-between gap-6'>
          {listItems?.map((item) => (
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
            onClick={() => {
              setNumberPage(numberPage + 1)
            }}
          >
            Carregar mais filmes
          </Button>
        )}
      </div>
    </>
  )
}
