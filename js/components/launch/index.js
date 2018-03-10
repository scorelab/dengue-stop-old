import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});

class Launch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => Actions.login()}>Launch page</Text>
            </View>
        );
    }
}

export default Launch;
