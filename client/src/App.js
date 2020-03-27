import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import DiseaseSpot from './components/SpotDisease/Map';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>DengueStop Admin Panel</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">

              <Link className="nav-link" to={"/register"}>Register</Link>
              </li>
               <li className="nav-item">

              <Link className="nav-link" to={"/spotdisease"}>Spot Disease</Link>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>

        <Switch> <Route  path="/spotdisease" component={DiseaseSpot} /></Switch>
      </div>
      <div className="auth-wrapper">
        <div className="auth-inner"  style={{marginTop:"100px"}}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          
          
          </Switch>
        </div>
        
      </div>
    </div></Router>
  );
}
export default App;
