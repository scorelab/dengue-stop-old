import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      // Checking if user is loggedin or not
      (localStorage.getItem('token') !== null) ? (
        <Component {...props} />
      ) : (
        <Redirect 
            to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

export default PrivateRoute;