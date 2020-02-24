import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function Login(){
    return (

      <View style={styles.container}>
  
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/logo.jpg')}
          />
        </View>
  
        <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 60 }}>Welcome to Dengue Stop!</Text>
  
        <View>
          <TouchableOpacity
            onPress={() => alert('Facebook Login')}
            style={{ backgroundColor: '#385898',borderRadius: 10, width: 280}}
          >
            <Text style={{ fontSize: 20, color: '#fff',fontSize: 25, margin: 15,alignContent: 'center'}}>Login With Facebook</Text>
          </TouchableOpacity>
        </View>
  
        <View>
          <TouchableOpacity
            onPress={() => alert('Google Login')}
            style={{ backgroundColor: 'red',borderRadius: 10, marginTop:10, width: 280}}
          >
            <Text style={{ fontSize: 20, color: '#fff',fontSize: 25, margin: 15}}>Login With Google</Text>
          </TouchableOpacity>
        </View>
  
        
        <View>
          <TouchableOpacity
          //this.props.navigation.navigate('Login')
            onPress={() =>alert('Hi')}
            style={{ backgroundColor: 'transparent',borderRadius: 10, marginTop:10, width: 280}}
          >
            <Text style={{marginTop: 40, textAlign: 'center'}}>Skip to HomePage &rarr;</Text>
          </TouchableOpacity>
        </View>
  
      </View>
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
