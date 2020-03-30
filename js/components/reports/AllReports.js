import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase'
import '@firebase/firestore';

export default class AllReports extends React.Component {
    state = {
        markers: [],
        reports: []
    }

    componentDidMount() {
        reports = []
        markers = []
        const ref = firebase.firestore().collection('reports')
        let allReports = ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                reports.push(doc.data())
                let marker = {
                    title: doc.data().disease,
                    coordinate: {
                        latitude: doc.data().latitude,
                        longitude: doc.data().longitude
                    },
                    description: doc.data().name
                }
                markers.push(marker)
            })
            this.setState({ reports: reports, markers: markers })

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 25.2838,
                        longitude: 83.1156,
                        latitudeDelta: 0.0,
                        longitudeDelta: 0.0,
                    }}
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            coordinate={marker.coordinates}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
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
