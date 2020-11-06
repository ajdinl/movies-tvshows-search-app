import React from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import { Movies } from './components/Movies'
import { Shows } from './components/Shows'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <Search />
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route exact path='/' component={Shows} />
        </Switch>
      </div>
    </>
  )
}

export default App
