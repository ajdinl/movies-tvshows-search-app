import {
  SEARCH_SHOWS_REQUEST,
  SEARCH_SHOWS_SUCCESS,
  SEARCH_SHOWS_FAILURE,
} from '../actiontypes'

const initialState = {
  loading: true,
  shows: [],
  errorMessage: null,
}

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SHOWS_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      }
    case SEARCH_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        shows: action.payload.map((show) => ({
          release_date: show.first_air_date,
          original_title: show.original_name,
          poster_path: show.poster_path,
        })),
      }
    case SEARCH_SHOWS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      }
    default:
      return state
  }
}

export default showReducer
