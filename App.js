import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navigator from './routes/homeStack';

//import {createStackNavigator} from 'react-navigation-stack'

// const RootStack = createStackNavigator({
//   Home: Home,
//   Login: Login
// })

export default function App () {
  return (
    <Navigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
