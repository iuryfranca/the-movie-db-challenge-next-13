'use client'

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react'

import { api } from '@/lib/axios'

interface Props {
  children: ReactNode
}

export interface MoviesProps {
  id?: number
  poster_path?: string
  title?: string
  release_date?: string
  vote_average?: number
  overview?: string
}

export interface GenreProps {
  id: number
  name: string
}

type MoviesContextData = {
  moviesList: MoviesProps[]
  loadingData: boolean
  getMovies: (typeGet?: string, numberPageApi?: number) => void
  numberPage: number
  genreSelected: number[]
  setGenreSelected: Dispatch<SetStateAction<number[]>>
}
const apiKey = process.env.NEXT_PUBLIC_API_KEY_V3

export const MoviesContext = createContext({} as MoviesContextData)

export const MoviesProvider: FC<Props> = ({ children }) => {
  const [numberPage, setNumberPage] = useState<number>(1)
  const [loadingData, setLoadingData] = useState<boolean>(true)
  const [moviesList, setMoviesList] = useState<MoviesProps[]>([])
  const [genreSelected, setGenreSelected] = useState<number[]>([])

  const getMovies = useCallback(
    async (typeGet: string = 'popular', numberPageApi: number = 1) => {
      const pageNumberUrl = `&page=${numberPageApi}`

      setNumberPage(numberPageApi)
      setLoadingData(true)

      api
        .get(`/movie/popular?${apiKey}${pageNumberUrl}`, {
          params: {
            with_genres:
              genreSelected.length > 0 ? genreSelected.toString() : null,
          },
        })
        .then((res) => {
          setMoviesList(
            typeGet === 'discover'
              ? [...res.data.results]
              : [...moviesList, ...res.data.results]
          )
        })
        .catch((err) => new Error('Failed to fetch data: ', err))
        .finally(() => {
          setLoadingData(false)
        })
    },
    [genreSelected, moviesList]
  )

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        getMovies,
        loadingData,
        numberPage,
        genreSelected,
        setGenreSelected,
      }}
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
