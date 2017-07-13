import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from './js/AppNavigator';

export default class dengue_stop extends Component {
  render() {
      return <AppNavigator />;
  }
}

AppRegistry.registerComponent('dengue_stop', () => dengue_stop);
