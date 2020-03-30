import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View} from 'react-native';

export default class userReportLocation extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: this.props.latitude,
                        longitude: this.props.longitude,
                        latitudeDelta: 0.0,
                        longitudeDelta: 0.0,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props.latitude,
                            longitude: this.props.longitude,
                        }}
                        title={"Corona"}
                        description={"Chitransh Anand"}
                    />
                </MapView>
            </View>
        );
    }
}

var styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});
