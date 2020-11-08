import React from 'react'
import { Movie } from './Movie'

export const Movies = (props) => {
  const movieReducer = props.movieReducer

  return (
    <div className='movies'>
      {movieReducer.loading && !movieReducer.errorMessage ? (
        <span>loading...</span>
      ) : movieReducer.errorMessage ? (
        <div className='errorMessage'>{movieReducer.errorMessage}</div>
      ) : (
        movieReducer.movies
          .slice(0, 20)
          .map((movie, index) => (
            <Movie key={`${index}-${movie.original_title}`} movie={movie} />
          ))
      )}
    </div>
  )
}
