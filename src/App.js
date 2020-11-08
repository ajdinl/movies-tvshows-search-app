import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import { Movies } from './components/Movies'
import { Shows } from './components/Shows'
import { API_KEY, MOVIE_API_URL, SHOW_API_URL } from './components/Api'
import { Route, Switch, useLocation } from 'react-router-dom'
import {
  movieSuccess,
  movieRequest,
  movieFailure,
  showSuccess,
  showRequest,
  showFailure,
} from './actions'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const movieReducer = useSelector((state) => state.movieReducer)
  const showReducer = useSelector((state) => state.showReducer)
  const dispatch = useDispatch()
  const location = useLocation().pathname

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(movieSuccess(jsonResponse.results.slice(0, 10)))
      })
  }, [dispatch])

  useEffect(() => {
    fetch(SHOW_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(showSuccess(jsonResponse.results.slice(0, 10)))
      })
  }, [dispatch])

  const searchMovie = (searchValue) => {
    dispatch(movieRequest())
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        jsonResponse.total_results >= 1
          ? dispatch(movieSuccess(jsonResponse.results))
          : dispatch(movieFailure(jsonResponse.errors))
      })
  }
  const searchShow = (searchValue) => {
    dispatch(showRequest())
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${searchValue}&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        jsonResponse.total_results >= 1
          ? dispatch(showSuccess(jsonResponse.results))
          : dispatch(showFailure(jsonResponse.errors))
      })
  }
  return (
    <>
      <Header />
      <div className='App'>
        {location === '/movies' ? (
          <Search search={searchMovie} />
        ) : (
          <Search search={searchShow} />
        )}
        <Switch>
          <Route
            path='/movies'
            render={() => <Movies movieReducer={movieReducer} />}
          />
          <Route
            path='/'
            exact
            render={() => <Shows showReducer={showReducer} />}
          />
        </Switch>
      </div>
    </>
  )
}

export default App
