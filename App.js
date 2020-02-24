import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Home from './components/Home'
import Login from './components/Login'

//import {createStackNavigator} from 'react-navigation-stack'

// const RootStack = createStackNavigator({
//   Home: Home,
//   Login: Login
// })

export default function App () {
  return (
    // <View style={styles.container}>
  
    //     <View>
    //       <Image
    //         style={{ width: 100, height: 100 }}
    //         source={require('./assets/logo.jpg')}
    //       />
    //     </View>
  
    //     <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 60 }}>This is App!</Text>
    //   </View>
    <Home />
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
