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

import i18n from './i18n/i18nConfig';

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
  
  // point to this function when ever a language change is triggered
  changeI18nLanguage(language) {
    return new Promise((resolve, reject) => {
      i18n.changeLanguage(language, (err, t) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="root">
          <Scene key="launch" component={Launch} />
          <Scene key="login" component={Login} initial hideNavBar />
          <Scene key="home" component={Home} title="Home" hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default AppNavigator;
