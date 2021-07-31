import React  from "react";

import "../Style.css"

function Navbar () {
    return (
        <header>
          <div className='nav-bar title'>
          <h2 className='subtitle-nav'>Seed a Bit</h2>
          <img src='./logo-2.png'/>
          <div className='button-layout' >
            <nav >
              <a href={'./Home'} className='button'> <p>Home </p></a>
              <a href={'./Seedapp'} className='button'><p>Seed App </p> </a>
              <a href={'./Site'} className='button'> <p>Site Constitucional </p></a>
              <a href={'./Consult'} className='button'> <p>Consultoria </p></a>
              </nav>
          </div>
          
          </div>
        </header>
    )
}

export default Navbar;