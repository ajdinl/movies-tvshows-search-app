import React from 'react'
import { Show } from './Show'

export const Shows = (props) => {
  const showReducer = props.showReducer

  return (
    <div className='shows'>
      {showReducer.loading && !showReducer.errorMessage ? (
        <span>loading...</span>
      ) : showReducer.errorMessage ? (
        <div className='errorMessage'>{showReducer.errorMessage}</div>
      ) : (
        showReducer.shows
          .slice(0, 20)
          .map((show, index) => (
            <Show key={`${index}-${show.original_title}`} show={show} />
          ))
      )}
    </div>
  )
}
