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
} from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configureStore';

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

export const store = configureStore();
const ConnectedRouter = connect()(Router);

class AppNavigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter createReducer={reducerCreate}>
          <Scene key="root">
            <Scene key="launch" component={Launch} />
            <Scene key="login" component={Login} initial hideNavBar />
            <Scene key="home" component={Home} title="Home" hideNavBar />
          </Scene>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppNavigator;
