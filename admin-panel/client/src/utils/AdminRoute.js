import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => (
        (localStorage.getItem('token') !== null && localStorage.getItem('isAdmin') === 'true') ? (
          <Component 
            {...props}
          />
        ) : (
          <Redirect 
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      )
    }
  />
)

export default AdminRoute;