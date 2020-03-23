import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,Marker} from 'google-maps-react';

 
const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
 
class SimpleMap extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{latitude: 	8.893212, longitude: 76.614143},
                  {latitude: 9.823619, longitude: 	77.986565},
                  {latitude: 11.191447, longitude: 11.191447},
                  {latitude: 12.904441, longitude: 79.319160},
                  {latitude: 12.904441, longitude: 11.319160},
                  {latitude: 16.994444, longitude: 73.300003},
                  {latitude: 16.166700, longitude: 74.833298},
                  {latitude: 12.120000, longitude:  76.680000},
                ]
        }
      }
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onMouseover={() => console.log("You clicked me!")} />
        })
      }
  
      render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 12.904441, lng: 79.319160
              }}
            >
              {this.displayMarkers()}
            </Map>
        );
      }
  }


export default GoogleApiWrapper({
    apiKey: process.env.GOOGLEMAP_API_KEY
  })(SimpleMap);