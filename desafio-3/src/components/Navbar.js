import React  from "react";
import {Link} from "react-router-dom";
import "../Style.css"

function Navbar () {
    return (
        <header>
          <div className='nav-bar title'>
          <h2 className='subtitle'>Seed a Bit</h2>
          <div className='button-layout' >
            <nav >
              <a href={'./Home'} className='button'>Home</a>
              <a href={'./Seedapp'} className='button'>Seed App</a>
              <a href={'./Site'} className='button'>Site Constitucional</a>
              <a href={'./Consult'} className='button'>Consultoria</a>
              </nav>
          </div>
          
          </div>
        </header>
    )
}

export default Navbar;