import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./assets/Home/Home.js";
import Seedapp from "./assets/Seedapp/Seedapp.js";
import Site from "./assets/Site/Site.js";
import Consult from "./assets/Cosult/Consult.js";
import "./Style.css"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className='site-style'>
        <Navbar />
        <BrowserRouter>
      <Switch>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/Seedapp" exact>
          <Seedapp />
        </Route>
        <Route path="/Consult" exact>
          <Consult />
        </Route><Route path="/Site" exact>
          <Site />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>

        <Footer />
  
    </div>
  );
}

export default App;
