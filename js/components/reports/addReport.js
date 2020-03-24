import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { CheckBox } from 'react-native-elements';
import firebase from 'firebase'
import '@firebase/firestore';
import Fire from './Fire'

export default class addReport extends Component {
    state = {
        location: null,
        errorMessage: null,
        name: '',
        disease: '',
        description: '',
        allergies: false,
        chestPain: false,
        cough: false,
        dizziness: false,
        fever: false,
        headaches: false,
        breath: false,
        toothache: false,
        vomiting: false,
        chronic: false,
        dehydration: false,
        coldSore: false,
    };

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

    submitButtonHandler = () => {
        let symptoms = ['']
        if (this.state.allergies)
            symptoms.push('allergies')
        if (this.state.breath)
            symptoms.push('breath')
        if (this.state.chestPain)
            symptoms.push('chestPain')
        if (this.state.chronic)
            symptoms.push('chronic')
        if (this.state.coldSore)
            symptoms.push('coldSore')
        if (this.state.cough)
            symptoms.push('cough')
        if (this.state.dehydration)
            symptoms.push('dehydration')
        if (this.state.dizziness)
            symptoms.push('dizziness')
        if (this.state.fever)
            symptoms.push('fever')
        if (this.state.headaches)
            symptoms.push('headaches')
        if (this.state.toothache)
            symptoms.push('toothache')
        if (this.state.vomiting)
            symptoms.push('vomiting')
        let reportObject = {
            name: this.state.name,
            disease: this.state.disease,
            description: this.state.description,
            symptoms: symptoms,
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude
        }
        Fire.addReport(reportObject);
    }

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    placeholder={'Name'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.disease}
                    onChangeText={(disease) => this.setState({ disease })}
                    placeholder={'Disease'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.description}
                    onChangeText={(description) => this.setState({ description })}
                    placeholder={'Description'}
                    style={styles.wideInput}
                    numberOfLines={3}
                />
                <View style={{}}>
                    <Text style={{ fontSize: 16 }}>Symptoms</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', }}>
                    <CheckBox
                        title="Allergies  "
                        checked={this.state.allergies}
                        onPress={() => this.setState({ allergies: !this.state.allergies })}
                    />
                    <CheckBox
                        title="Chest Pain "
                        checked={this.state.chestPain}
                        onPress={() => this.setState({ chestPain: !this.state.chestPain })}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CheckBox
                        title="Cough      "
                        checked={this.state.cough}
                        onPress={() => this.setState({ cough: !this.state.cough })}
                    />
                    <CheckBox
                        title="Dizziness  "
                        checked={this.state.dizziness}
                        onPress={() => this.setState({ dizziness: !this.state.dizziness })}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CheckBox
                        title="Fever      "
                        checked={this.state.fever}
                        onPress={() => this.setState({ fever: !this.state.fever })}
                    />
                    <CheckBox
                        title="Headaches  "
                        checked={this.state.headaches}
                        onPress={() => this.setState({ headaches: !this.state.headaches })}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CheckBox
                        title="Breath     "
                        checked={this.state.breath}
                        onPress={() => this.setState({ breath: !this.state.breath })}
                    />
                    <CheckBox
                        title="Toothache "
                        checked={this.state.toothache}
                        onPress={() => this.setState({ toothache: !this.state.toothache })}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CheckBox
                        title="Vomiting"
                        checked={this.state.vomiting}
                        onPress={() => this.setState({ vomiting: !this.state.vomiting })}
                    />
                    <CheckBox
                        title="Chronic"
                        checked={this.state.chronic}
                        onPress={() => this.setState({ chronic: !this.state.chronic })}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CheckBox
                        title="Dehydration"
                        checked={this.state.dehydration}
                        onPress={() => this.setState({ dehydration: !this.state.dehydration })}
                    />
                    <CheckBox
                        title="Cold Sore"
                        checked={this.state.coldSore}
                        onPress={() => this.setState({ coldSore: !this.state.coldSore })}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button title='Submit' onPress={this.submitButtonHandler} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    },
    wideInput: {
        width: 300,
        height: 90,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    }
});