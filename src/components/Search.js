import React, { useState } from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const callSubmitFunction = async (e) => {
    setSearchValue(e.target.value)
    e.persist()

    if (searchValue.length < 2) {
      console.log('wait')
      return
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    props.search(searchValue)
  }

  return (
    <form className='search'>
      <input
        type='text'
        placeholder='Search here'
        minLength='3'
        value={searchValue}
        onChange={callSubmitFunction}
      />
    </form>
  )
}

export default Search
