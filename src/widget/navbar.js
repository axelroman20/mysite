import React from 'react'
import favicon from '../assets/favicon.svg';

import '../css/navbar.css';

export const NavbarWidget = () => {
  return (
    <ul className='navbar'>
      <img src={favicon} alt="logo" />
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  )
}
