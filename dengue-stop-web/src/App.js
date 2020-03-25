import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/admin/home" exact component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
