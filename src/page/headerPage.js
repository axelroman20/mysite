import React from 'react'

import logo from '../assets/logo.svg';


import '../css/App-header.css';

export const HeaderPage = () => {
  return (
    <div className="App-header" id='home'>
      <img src={logo} className="App-logo" alt="logo" />
      <div className='App-header-text'>
        <h1>I'm Axel Román</h1>
        <p>Computer Systems Engineering</p>
        <p>Backend Developer</p>
      </div>
    </div>
  )
}
