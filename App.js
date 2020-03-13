import React, {
  Component,
} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Launch from './js/components/launch';
import Login from './js/components/login';
import Home from './js/components/home';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

export default function App() {
  return (
    <Router createReducer={reducerCreate}>
        <Scene key="root">
          <Scene key="launch" component={Launch}/>
          <Scene key="login" component={Login} initial hideNavBar/>
          <Scene key="home" component={Home} title="Home" hideNavBar/>
        </Scene>
      </Router>
  );
}
