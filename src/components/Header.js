import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const logoSrc =
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
  return (
    <nav>
      <ul className='App-header'>
        <li>
          <Link className='logo' to='/'>
            <img src={logoSrc} alt='Logo' />
          </Link>
        </li>
        <li>
          <Link to='/movies' className='button'>
            Movies
          </Link>
        </li>
        <li>
          <Link to='/' className='button'>
            TV Shows
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
