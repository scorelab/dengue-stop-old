import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import firebase from 'firebase'
import '@firebase/firestore';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class currentRegionReports extends Component {
    state = {
        reports: [],
        location: null,
    }

    constructor(props) {
        super(props);
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    componentDidMount() {

        const ref = firebase.firestore().collection('reports')

        const userLatitude = this.state.location.coords.latitude
        const userLongitude = this.state.location.coords.longitude

        let allReports = ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                if (calcCrow(userLatitude, userLongitude, doc.data().latitude, doc.data().longitude) <= 100)
                    reports.push(doc.data())
            })
            this.setState({ reports: reports })
            console.log(this.state.reports)
        })
    }
    renderPost = report => {
        return (
            <View style={styles.reportItem}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'red', marginBottom: 10 }}>{report.disease}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{report.name}</Text>
                </View>
                <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: 'bold' }}>{report.symptomps.join()}</Text>
                <Text style={{ marginBottom: 5 }}>{report.description}</Text>
                <Text style={styles.timestamp}>{moment(report.timestamp).fromNow()}</Text>
                <Button title='Location' onPress={() => { }} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Reports</Text>
                </View>
                <FlatList
                    style={styles.feed}
                    data={this.state.reports}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.timestamp.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
        //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
        function calcCrow(lat1, lon1, lat2, lon2) {
            var R = 6371; // km
            var dLat = toRad(lat2 - lat1);
            var dLon = toRad(lon2 - lon1);
            var lat1 = toRad(lat1);
            var lat2 = toRad(lat2);

            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;
        }

        // Converts numeric degrees to radians
        function toRad(Value) {
            return Value * Math.PI / 180;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFECF4'
    },
    header: {
        paddingTop: 48,
        paddingBottom: 16,
        paddingLeft: 24,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
    },
    feed: {
        marginHorizontal: 16,
    },
    reportItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        marginVertical: 8,
        flexDirection: 'column',
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: '#454D65',
    },
    timestamp: {
        fontSize: 11,
        color: '#C4C6CE',
        marginTop: 4,
        flexDirection: 'row-reverse',
        textAlign: 'right',
        marginBottom: 4
    },
})