import { combineReducers } from 'redux'
import movieReducer from './movie'
import showReducer from './show'

const allReducers = combineReducers({
  movieReducer,
  showReducer,
})

export default allReducers
