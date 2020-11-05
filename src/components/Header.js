import React from 'react'

const Header = () => {
  const logoSrc =
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>
            <img src={logoSrc} alt='Logo' />
          </a>
        </li>
        <li>
          <a href='/movies'>Movies</a>
        </li>
        <li>
          <a href='/'>TV Shows</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
