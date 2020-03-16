import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Dashboard from './Containers/Dashboard/Dashboard';

class App extends Component{
  render(){
    return(
      <Layout>
        <Route path="/" exact component={Dashboard} />
      </Layout>
    )
  }
}

export default App;