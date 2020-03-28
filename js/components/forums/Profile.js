import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../Fire'
import firebase from 'firebase'
import '@firebase/firestore';


export default class ProfileScreen extends Component {
    state = {
        user: {}
    }

    unsubscribe = null;

    componentDidMount() {
        const email = firebase.auth().currentUser.email
        const ref = firebase.firestore().collection('users').doc(email)
        ref.get().then((doc) => {
            this.setState({ user: doc.data() })
            console.log(this.state.user);
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 64, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <ImageBackground source={{ uri: this.state.user.image }} style={styles.avatar} />
                    </View>
                    <Text style={styles.name}>{this.state.user.name}</Text>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.state} >
                        <TouchableOpacity style={{ backgroundColor: '#679b9b', width: 80, alignItems: 'center', }}>
                            <Text style={styles.statAmount}>{this.state.user.postCount}</Text>
                            <Text style={styles.statTite}>Posts</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.state} >
                        <TouchableOpacity style={{ backgroundColor: '#679b9b', width: 80, alignItems: 'center' }}>
                            <Text style={styles.statAmount}>{this.state.user.reportCount}</Text>
                            <Text style={styles.statTite}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    color='#679b9b'
                    onPress={() => {
                        firebase.auth().signOut().then(function () {
                            // Sign-out successful.
                        }).catch(function (error) {
                            console.log(error)
                        });
                    }} title="Log Out" />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarContainer: {
        shadowColor: "#151734",
        shadowRadius: 15,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    name: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: 'bold'
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 32,
    },
    stat: {
        alignItems: "center",
        flex: 1,
    },
    statAmount: {
        color: "#4F566D",
        fontSize: 18,
        fontWeight: "bold"
    },
    statTitle: {
        color: "#C3C5CD",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 4
    }
})