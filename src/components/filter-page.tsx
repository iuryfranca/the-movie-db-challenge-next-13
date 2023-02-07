'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useCallback, useEffect, useReducer, useState } from 'react'
import { SiteListProps, siteListReducer } from '@/core/reducers/movies-reducer'
import { api } from '@/lib/axios'
import { cn } from '@/lib/utils'

const apiKey = process.env.NEXT_PUBLIC_API_KEY_V3

export function FilterPage() {
  const [genreInicializeFilter, setGenreInicializeFilter] = useState<[]>([])
  const [genreSelected, setGenreSelected] = useState<number[]>([])

  const initialSiteListState: SiteListProps = {
    moviesList: [],
  }

  const [{ moviesList }, dispatch] = useReducer(
    siteListReducer,
    initialSiteListState
  )

  const getGenreOptionsApi = useCallback(async () => {
    api
      .get(`/genre/movie/list?${apiKey}`)
      .then((res) => setGenreInicializeFilter(res.data.genres))
      .catch((err) => new Error('Failed to fetch data: ', err))
  }, [])

  const changeFilterGenre = useCallback(
    (id: number) => {
      if (genreSelected.length >= 0) {
        if (genreSelected.some((genreId) => genreId === id)) {
          const tempNewGenre = genreSelected
          tempNewGenre.splice(genreSelected.indexOf(id), 1)

          setGenreSelected([...tempNewGenre])
        } else {
          setGenreSelected([...genreSelected, id])
        }
      }
    },
    [genreSelected]
  )

  function changeColorButton(id) {
    return genreSelected.some((genreId) => genreId === id)
      ? 'bg-slate-500'
      : 'bg-none'
  }

  async function searchDiscoverApi() {
    api
      .get(`/discover/movie?${apiKey}`, {
        params: {
          with_genres: genreSelected.toString(),
        },
      })
      .then((res) =>
        dispatch({
          type: 'setSiteList',
          payload: {
            moviesList: [...res.data.results],
          },
        })
      )
      .catch((err) => new Error('Failed to fetch data: ', err))
  }

  useEffect(() => {
    // if (genreSelected.length === 0) {
    getGenreOptionsApi()
    // }
  }, [])

  useEffect(() => {
    console.log('moviesList FILTER', moviesList)
  }, [moviesList])

  return (
    <div className='flex flex-col justify-center gap-4 rounded-lg border-2 border-slate-900 p-4 shadow-md dark:border-slate-400 '>
      <div>
        <Accordion type='multiple'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='pb-2'>Ordenar</AccordionTrigger>
            <AccordionContent>
              <p className='py-2'>Ordenar resultados por</p>
              <DropdownMenu>
                <DropdownMenuTrigger className='group' asChild>
                  <Button
                    variant='outline'
                    className='w-full justify-between border-2 border-slate-900 dark:border-slate-400 '
                  >
                    selecione
                    <ChevronDown
                      className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
                      aria-hidden='true'
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-52'>
                  <DropdownMenuGroup>
                    <DropdownMenuItem></DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='pb-2'>Filtrar</AccordionTrigger>
            <AccordionContent>
              <p className='py-2'>Selecione os gêneros</p>
              <div className='flex flex-row flex-wrap gap-2 p-1'>
                {genreInicializeFilter.map(
                  (genre: { id: number; name: string }) => (
                    <Button
                      variant='outline'
                      size='sm'
                      key={genre.id}
                      className={cn('text-xs', changeColorButton(genre.id))}
                      onClick={() => {
                        changeFilterGenre(genre.id)
                      }}
                    >
                      {genre.name}
                    </Button>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Button
          variant='subtle'
          className='w-full bg-slate-900 text-slate-50 hover:bg-slate-700'
          onClick={() => searchDiscoverApi()}
        >
          Pesquisar
        </Button>
      </div>
    </div>
  )
}
