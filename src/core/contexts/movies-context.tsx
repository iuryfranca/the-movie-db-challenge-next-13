'use client'

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  MoviesProps,
  SiteListProps,
  siteListReducer,
} from '@/core/reducers/movies-reducer'

import { api } from '@/lib/axios'

interface Props {
  children: ReactNode
}

type MoviesContextData = {
  moviesList: MoviesProps[]
  loadingData: boolean
  getMovies: () => void
  incrementPageNumber: () => void
}
const apiKey = process.env.NEXT_PUBLIC_API_KEY_V3

export const MoviesContext = createContext({} as MoviesContextData)

export const MoviesProvider: FC<Props> = ({ children }) => {
  const [numberPage, setNumberPage] = useState<number>(1)
  const [loadingData, setLoadingData] = useState<boolean>(false)

  const initialSiteListState: SiteListProps = {
    moviesList: [],
  }

  const [{ moviesList }, dispatch] = useReducer(
    siteListReducer,
    initialSiteListState
  )

  const getMovies = useCallback(
    async (typeGet: string = 'popular') => {
      const pageNumberUrl = `&page=${numberPage}`
      const bodyApi =
        typeGet === 'popular' ? '/movie/popular?' : '/discover/movie?'

      setLoadingData(true)

      api
        .get(`${bodyApi}${apiKey}${pageNumberUrl}`)
        .then((res) => {
          const lastMoviesList = moviesList
          dispatch({
            type: 'setSiteList',
            payload: {
              moviesList: [...lastMoviesList, ...res.data.results],
            },
          })
        })
        .catch((err) => new Error('Failed to fetch data: ', err))
        .finally(() => {
          setLoadingData(false)
        })
    },
    [moviesList, numberPage]
  )

  function incrementPageNumber() {
    setNumberPage(numberPage + 1)
  }

  useEffect(() => {
    getMovies()
  }, [numberPage])

  return (
    <MoviesContext.Provider
      value={{ moviesList, loadingData, getMovies, incrementPageNumber }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export const useMoviesContext = () => {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('useMoviesContext must be used within a MoviesProvider')
  }

  return context
}
