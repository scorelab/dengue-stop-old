import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Launch from './components/launch';
import Login from './components/login';
import Home from './components/home';
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

class AppNavigator extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="root">
          <Scene key="launch" component={Launch} initial/>
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="home" component={Home} title="Home"/>
        </Scene>
      </Router>
    );
  }
}

export default AppNavigator;
