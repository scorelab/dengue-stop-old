import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';
import Login from './components/auth/Login';
import Map from './components/mapInterface/Map';
import Admin from './components/admin/Admin';
import Register from './components/auth/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/map" exact component={Map} />
        <AdminRoute path="/admin" exact component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
