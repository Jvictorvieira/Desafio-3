import React from "react";
import Body from "./Body.js";


var value = 'Home'



function App() {
  function Changevalue (valor) {
    return value=valor
  }
  return (
    <div>
        <header>
          <div className='nav-bar title'>
          <h2>Seed a Bit</h2>
          <nav>
            <button type='button' value='Home' name="Home" onClick='' className='button'>Home</button>
            <button type='button' value='Deliver' name="Seed Delivery" onClick='{Changevalue(value)}' className='button'>Seed Delivery</button>
            <button type='button' value='Site' name="Site Constitucional" onClick='{Changevalue(value)}' className='button'>Site Constitucional</button>
            <button type='button' value='Consul' name="Consultoria" onClick='{Changevalue(value)}' className='button'>Consultoria</button>
            <button type='button' value='Cont' name="Contatos" onClick='{Changevalue(value)}' className='button'>Contatos</button>
          </nav>
          </div>
        </header>
        <div className='body'>
          <div>{
            Body(value)
            }</div>

        </div>
      
    </div>
  );
}

export default App;
