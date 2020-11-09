import React, { useState } from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const callSubmitFunction = (e) => {
    setSearchValue(e.target.value)
    setTimeout(() => {
      props.search(searchValue)
    }, 1000)
  }

  return (
    <form className='search'>
      <input
        type='text'
        placeholder='Search here'
        minLength='3'
        onKeyUp={callSubmitFunction}
      />
    </form>
  )
}

export default Search
