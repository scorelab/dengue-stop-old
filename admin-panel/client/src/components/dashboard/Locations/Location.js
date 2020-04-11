import React, { Component } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class Location extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 7.2906, lng: 80.6337},
            {lat: 6.9497, lng: 80.7891},
            {lat: 6.0535, lng: 80.2210},
            {lat: 8.3114, lng: 80.4037}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.lat,
         lng: store.lng
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{lat: 6.927079, lng: 79.861244}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3ASbDz0MGMMYnJ7X4HXoegwuIL7pF4YQ'
  })(Location);