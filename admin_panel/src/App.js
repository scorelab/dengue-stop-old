import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import PatientsList from './Containers/PatientsList/PatientsList';
import Dashboard from './Containers/Dashboard/Dashboard';

class App extends Component{
  render(){
    return(
      <Layout>
        <Route path="/" exact component={Dashboard} />
        <Route path="/patients" exact component={PatientsList} />
      </Layout>
    )
  }
}

export default App;