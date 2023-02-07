// -----------------------------------------------
// Types
// -----------------------------------------------
export interface MoviesProps {
  id?: number
  poster_path?: string
  title?: string
  release_date?: string
  vote_average?: number
  overview?: string
}

export interface SiteListProps {
  moviesList: MoviesProps[]
}

// -----------------------------------------------
// Actions
// -----------------------------------------------

const siteListActions = (state: SiteListProps) => ({
  setSiteList: (newValue: SiteListProps) => {
    return (state = newValue)
  },

  reset: () => {
    return (state = {
      moviesList: [] as MoviesProps[],
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
