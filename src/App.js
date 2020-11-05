import React from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import { Movies } from './components/Movies'
import { Shows } from './components/Shows'

function App() {
  return (
    <>
      <Header>
        <div className='App'>
          <Search />
          <Search />
          <Shows />
          <Movies />
        </div>
      </Header>
    </>
  )
}

export default App
