import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
});

class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text onPress={()=>Actions.pop()}>Home screen</Text>

            </View>
        );
    }
}

module.exports = Home;
