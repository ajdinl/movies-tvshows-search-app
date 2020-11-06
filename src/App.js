import React from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import { Movies } from './components/Movies'
import { Shows } from './components/Shows'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <div className='App'>
        <Switch>
          <Search />
          <Route path='/movies' />
          <Route exact path='/' />
        </Switch>
      </div>
    </div>
  )
}

export default App
