import React from 'react'

import iconHMTL from '../assets/icon_html.svg';
import iconCSS from '../assets/icon_css.svg';
import iconJAVASCRIPT from '../assets/icon_javascript.svg';
import iconREACT from '../assets/icon_react.svg';
import iconFLUTTER from '../assets/icon_flutter.svg';

import iconGIT from '../assets/icon_git.svg';
import iconPHP from '../assets/icon_php.svg';
import iconMYSQL from '../assets/icon_mysql.svg';
import iconPOSTGRESQL from '../assets/icon_postgresql.svg';
import iconVSCODE from '../assets/icon_vscode.svg';

import iconLINUX from '../assets/icon_linux.svg';
import iconUBUNTU from '../assets/icon_ubuntu.svg';
import iconANDROID from '../assets/icon_android.svg';
import iconAPPLE from '../assets/icon_apple.svg';


import '../css/App-about.css';

export const AboutPage = () => {
  return (
    <div className='App-about' id='about'>
      <div className='skills'>
        <h3>My Skills</h3>
        <div className='frontend'>
          <img src={iconHMTL} className="icon" alt="logo" />
          <img src={iconCSS} className="icon" alt="logo" />
          <img src={iconJAVASCRIPT} className="icon" alt="logo" />
          <img src={iconREACT} className="icon" alt="logo" />
          <img src={iconFLUTTER} className="icon" alt="logo" />
        </div>
        <div className='backend'>
          <img src={iconGIT} className="icon" alt="logo" />
          <img src={iconPHP} className="icon" alt="logo" />
          <img src={iconMYSQL} className="icon" alt="logo" />
          <img src={iconPOSTGRESQL} className="icon" alt="logo" />
          <img src={iconVSCODE} className="icon" alt="logo" />
        </div>
        <div className='more'>
          <img src={iconLINUX} className="icon" alt="logo" />
          <img src={iconUBUNTU} className="icon" alt="logo" />
          <img src={iconANDROID} className="icon" alt="logo" />
          <img src={iconAPPLE} className="icon" alt="logo" />
        </div>
      </div>
      <div className='text'>
        <h3>About me</h3>
        <p>I'm Axel Román a Web Developer / Systems Engineer with experience in creating
          in creating websites and mobile applications. I specialize in the development of
          Backend.</p>
        <p>I am always looking to improve my skills to be at the forefront because in this world, developers
          developers never stop studying and learning new things!</p>
        {/* <button>Download CV</button> */}
      </div>
    </div>
  )
}
