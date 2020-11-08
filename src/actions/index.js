import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_SHOWS_REQUEST,
  SEARCH_SHOWS_SUCCESS,
  SEARCH_SHOWS_FAILURE,
} from '../actiontypes'

export const movieSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
})

export const movieRequest = () => ({
  type: SEARCH_MOVIES_REQUEST,
})

export const movieFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  error,
})

export const showSuccess = (payload) => ({
  type: SEARCH_SHOWS_SUCCESS,
  payload,
})

export const showRequest = () => ({
  type: SEARCH_SHOWS_REQUEST,
})

export const showFailure = (error) => ({
  type: SEARCH_SHOWS_FAILURE,
  error,
})
