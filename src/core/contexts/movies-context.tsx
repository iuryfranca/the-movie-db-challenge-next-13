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

export interface GenreProps {
  id: number
  name: string
}

export interface MoviesProps {
  id?: number
  poster_path?: string
  title?: string
  release_date?: string
  vote_average?: number
  overview?: string
}

export interface DetailsMovieProps {
  id: number
  poster_path?: string
  backdrop_path?: string
  title?: string
  genres?: GenreProps[]
  release_date?: string
  vote_average?: number
  overview?: string
  tagline?: string
}

type MoviesContextData = {
  moviesList: MoviesProps[]
  detailsMovie: DetailsMovieProps
  loadingData: boolean
  getMovies: (typeGet?: string, numberPageApi?: number) => void
  getDetailsMovie: (movieId?: number) => void
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
  const [detailsMovie, setDetailsMovie] = useState<DetailsMovieProps>(null)
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

  const getDetailsMovie = useCallback(async (movieId: number) => {
    setLoadingData(true)

    api
      .get(`/movie/${movieId}?${apiKey}`)
      .then((res) => {
        setDetailsMovie(res.data)
      })
      .catch((err) => new Error('Failed to fetch data: ', err))
      .finally(() => {
        setLoadingData(false)
      })
  }, [])

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        detailsMovie,
        getMovies,
        getDetailsMovie,
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
