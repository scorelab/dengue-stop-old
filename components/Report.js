import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, KeyboardAvoidingView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase'


export default class Report extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      firebase_index : null,
    };
  }


handle_submit = () => {

  firebase.database().ref(this.state.firebase_index).set({
      name: this.state.name,
      area: this.state.district,
      lat: this.state.lat,
      lon: this.state.lon,
      info: this.state.info
    })
    .then(() => {
      //console.log('Inserted!');
      alert("Report Submitted!");
    })
    .catch(error => {
      console.log(error)
    })

}

  async componentDidMount(){
    var firebaseConfig = {
      apiKey: 'AIzaSyBQIMeAHOlfy0vIwBcJPQRtuTIWBuAsrrY',
      authDomain: 'dengue-stop-4fb58.firebaseapp.com',
      databaseURL: 'https://dengue-stop-4fb58.firebaseio.com',
      projectId: 'dengue-stop-4fb58',
      storageBucket: 'dengue-stop-4fb58.appspot.com',
      messagingSenderId: '235092636616',
      appId: '1:235092636616:web:79ff32e5dfea7b419886fd',
      measurementId: 'G-Z9V67M5NXL'
    }
  
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  
    //Get the index to be addded
    firebase.database().ref('reports').once('value', data => {
        console.log(data.numChildren())
        this.setState({
          firebase_index: '/reports/' + data.numChildren().toString()
        })
      });
  }


  render(){

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20, alignContent: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={true} color={'orange'} size={'large'} />
        </View>
      );
    }

    return(
      <KeyboardAvoidingView keyboardVerticalOffset={80} behavior={"padding"}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{alignContent: 'center', alignItems: 'center', padding: 20, marginBottom: 30}}>
              <Image
                  style={{ width: 60, height: 60, alignItems: 'center' }}
                  source={require('../assets/report.png')}
              />
              <Text style={{fontSize: 20}}>Report a Case</Text>
            </View>
      
            <View style={{alignItems: 'center'}}>
                <TextInput style={styles.textInput} placeholder="Your Name" underlineColorAndroid={'orange'} 
                  onChangeText={(nametext) => this.setState({name: nametext})}></TextInput>
                <TextInput style={styles.textInput} placeholder="Your District" underlineColorAndroid={'orange'}
                  onChangeText={(districttext) => this.setState({district: districttext})}></TextInput>
                <TextInput style={styles.textInput} placeholder="Latitude" underlineColorAndroid={'orange'} keyboardType='numeric' textContentType='location'
                  onChangeText={(lattext) => this.setState({lat: parseFloat(lattext)})}></TextInput>
                <TextInput style={styles.textInput} placeholder="Longitude" underlineColorAndroid={'orange'} keyboardType='numeric' textContentType='location'
                  onChangeText={(lontext) => this.setState({lon: parseFloat(lontext)})}></TextInput>
                <TextInput style={styles.textInput} placeholder="More information on the incident" underlineColorAndroid={'orange'} numberOfLines={5} multiline={true} 
                  onChangeText={(infotext) => this.setState({info: infotext})}></TextInput>
                <Text style={{fontStyle: 'italic', fontSize: 10, textAlign:'justify', marginBottom: 10}}>
                    By clicking submit, I declare that the provided information are true and acurate as of my knowledge and I will  take
                    the sole responsibility of the information I provided.
                </Text>
                <TouchableOpacity
                    onPress={this.handle_submit}
                    style={{ backgroundColor: 'orange',borderRadius: 10, marginTop:10, width: 300}}
                >
                  <Text style={{ fontSize: 15, color: '#fff', margin: 15, textAlign:'center'}}>Submit Report</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 60,
    marginBottom: 20
  }

})
