import React from 'react'
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';

export default class Mapview extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        isLoading: true
      }

    }

    async componentDidMount(){
  
      return fetch('https://dengue-stop-4fb58.firebaseio.com/reports.json')
        .then(response => response.json())
        .then (responseJson => {
          //console.log(responseJson[0].info);
          this.setState(
           {
            isLoading: false,
            dataSource: responseJson
           },
           function(){}
          );
        })
        .catch(error => {
          console.error(error)
        })
    }

    render(){
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, padding: 20, alignContent: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={true} color={'orange'} size={'large'} />
          </View>
        );
      }

      return (
        
        <View>
          <MapView 
            style={styles.mapStyle}
            initialRegion={{
              latitude: 7.8731,
              longitude: 80.7718,
              latitudeDelta: 3,
              longitudeDelta: 3
            }}
            onPress = {this.handlePress}
          >
            {this.state.dataSource.map(marker => (
              <MapView.Marker 
                coordinate={{latitude: marker.lat, longitude: marker.lon}}
                title = {"Submitted By: " + marker.name}
                description = {marker.info}
              />
            ))}         
            
          </MapView>
        </View> 
  
      )
    }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})