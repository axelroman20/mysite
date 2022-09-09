import React from 'react'

import logo from '../assets/logo.svg';

import '../css/App-header.css';

export const HeaderPage = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='App-header-text'>
        <h1>I'm Axel Román</h1>
        <p>Computer Systems Engineering</p>
        <p>Backend Developer</p>
      </div>
    </header>
  )
}
