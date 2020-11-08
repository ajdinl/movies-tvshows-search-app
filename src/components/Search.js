import React, { useState } from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  const resetInputField = () => {
    setSearchValue('')
  }
  const callSubmitFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form className='search' onSubmit={callSubmitFunction}>
      <input
        type='text'
        placeholder='Search here'
        value={searchValue}
        minLength='3'
        onChange={handleSearchInputChange}
      />
    </form>
  )
}

export default Search
