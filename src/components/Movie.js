import React from 'react'
import noimage from '../assets/no-image.jpg'

const DEFAULT_PLACEHOLDER_IMAGE = noimage

export const Movie = ({ movie }) => {
  const poster =
    movie.poster_path === null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
  return (
    <div className='movie'>
      <div>
        <img
          className='imgWidth'
          width='400px'
          src={poster}
          alt={`The movie titled: ${movie.original_title}`}
        />
      </div>
      <div>
        <h2>{movie.original_title}</h2>
        <p>Release Date: ({movie.release_date})</p>
      </div>
    </div>
  )
}
