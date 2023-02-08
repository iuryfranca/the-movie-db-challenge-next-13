// -----------------------------------------------
// Types
// -----------------------------------------------

import {
  GenreProps,
  MoviesProps,
  SiteListProps,
} from '../contexts/movies-context'

// export interface MoviesProps {
//   id?: number
//   poster_path?: string
//   title?: string
//   release_date?: string
//   vote_average?: number
//   overview?: string
// }

// export interface GenreProps {
//   id: number
//   name: string
// }

// export interface SiteListProps {
//   moviesList: MoviesProps[]
//   genreList: GenreProps[]
// }

// -----------------------------------------------
// Actions
// -----------------------------------------------

const siteListActions = (state: SiteListProps) => ({
  setSiteList: (newValue: SiteListProps) => {
    return (state = newValue)
  },

  // setMovieList: (movieList: MoviesProps[]) => (state.moviesList = movieList),

  // setGenreList: (genreList: GenreProps[]) => (state.genreList = genreList),

  resetMoviesList: () => {
    return (state = {
      moviesList: [] as MoviesProps[],
      genreList: [] as GenreProps[],
    })
  },
})

// -----------------------------------------------
// Reducers
// -----------------------------------------------

export const siteListReducer = (
  state: SiteListProps,
  action: { type: keyof ReturnType<typeof siteListActions>; payload?: any }
) => {
  return siteListActions(state)[action.type](action.payload)
}
