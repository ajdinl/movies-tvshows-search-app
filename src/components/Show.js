import React from 'react'
import noimage from './../assets/no-image.jpg'

const DEFAULT_PLACEHOLDER_IMAGE = noimage

export const Show = ({ show }) => {
  const poster =
    show.poster_path === null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : `https://image.tmdb.org/t/p/w400/${show.poster_path}`

  return (
    <div className='show'>
      <div>
        <img
          className='imgWidth'
          width='400'
          src={poster}
          alt={`The movie titled: ${show.original_title}`}
        />
      </div>
      <div>
        <h2>{show.original_title}</h2>
        <p>Release Date: ({show.release_date})</p>
      </div>
    </div>
  )
}
