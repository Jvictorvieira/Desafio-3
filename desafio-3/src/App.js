import React from "react";
import Body from "./Body.js";
import "./Style.css"

var value = 'Home'



function App() {
  function Changevalue (valor) {
    return value=valor
  }
  return (
    <div>
        <header>
          <div className='nav-bar title'>
          <h2 className='subtitle'>Seed a Bit</h2>
          <div className='button-layout' >
            <nav >
              <button type='button' value='Home' name="Home" onClick='' className='button'>Home</button>
              <button type='button' value='App' name="Seed App" onClick='{Changevalue(value)}' className='button'>Seed Delivery</button>
              <button type='button' value='Site' name="Site Constitucional" onClick='{Changevalue(value)}' className='button'>Site Constitucional</button>
              <button type='button' value='Consul' name="Consultoria" onClick='{Changevalue(value)}' className='button'>Consultoria</button>
              <button type='button' value='Cont' name="Contatos" onClick='{Changevalue(value)}' className='button'>Contatos</button>
            </nav>
          </div>
          
          </div>
        </header>
        <div className='body'>
          <div>{
            Body(value)
            }</div>

        </div>
        <footer>
          <div className='footer'>
                <p className='contatos'>Contatos</p>
            </div>
        </footer>
  
            
        
    </div>
  );
}

export default App;
