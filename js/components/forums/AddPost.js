import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Fire from "../Fire";
import UserPermissions from '../utilities/UserPermission';
import firebase from 'firebase'
import '@firebase/firestore';


export default class PostScreen extends Component {

    state = {
        text: "",
        image: null,
        avatarr: ""
    }

    avatar = null;
    name = null

    componentDidMount() {
        UserPermissions.getCameraPermission();
        const email = firebase.auth().currentUser.email
        const ref = firebase.firestore().collection('users').doc(email)
        ref.get().then((doc) => {
            console.log(doc.data())
            avatar = doc.data().avatar
            name = doc.data().name.toString()
        })
    }

    handlePost = () => {
        console.log(avatar)
        Fire.shared
            .addPost({ text: this.state.text.trim(), localUri: this.state.image, avatar, name })
            .then(ref => {
                this.setState({ text: "", image: null });
                this.props.navigation.goBack();
            }).catch(error => {
                alert(error)
            })
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        })

        if (!result.cancelled) {
            this.setState({ image: result.uri })
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={23} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={styles.headerTitle}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require("../assets/Avatar.jpg")} style={styles.avatar}></Image>
                    <TextInput
                        outoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Want to post something !"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    ></TextInput>
                </View>

                <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image source={{ uri: this.state.image }} style={{ width: "100%", height: "100%" }}></Image>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 33 : 0
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    headerTitle: {
        fontWeight: 'bold'
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16

    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    }
})