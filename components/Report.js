import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Report({ navigation }){

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>
      <View style={{alignContent: 'center', alignItems: 'center', padding: 20, marginBottom: 30}}>
        <Image
            style={{ width: 60, height: 60, alignItems: 'center' }}
            source={require('../assets/report.png')}
        />
        <Text style={{fontSize: 20}}>Report a Case</Text>
      </View>

      <View>
          <TextInput style={styles.textInput} placeholder="Your Name" underlineColorAndroid={'orange'}></TextInput>
          <TextInput style={styles.textInput} placeholder="Your Address" underlineColorAndroid={'orange'}></TextInput>
          <TextInput style={styles.textInput} placeholder="More information on the incident" underlineColorAndroid={'orange'} numberOfLines={5} multiline={true} ></TextInput>
          <Text style={{fontStyle: 'italic', fontSize: 10, textAlign:'justify', marginBottom: 10}}>
              By clicking submit, I declare that the provided information are true and acurate as of my knowledge and I will  take
              the sole responsibility of the information I provided.
          </Text>
          <TouchableOpacity
              onPress={() => alert('Successfully Submitted')}
              style={{ backgroundColor: 'orange',borderRadius: 10, marginTop:10, width: 300}}
          >
            <Text style={{ fontSize: 15, color: '#fff', margin: 15, textAlign:'center'}}>Submit Report</Text>
          </TouchableOpacity>
      </View>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  textInput: {
    alignSelf: 'stretch',
    height: 60,
    marginBottom: 20
  }

})
