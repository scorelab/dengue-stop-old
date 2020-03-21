import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

const comment = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <ImageBackground source={{ uri: props.avatar }} style={styles.avatar} />
                <Text style={styles.avatarText}>{props.userName}</Text>
            </View>
            <Text style={styles.commentText}>{props.commentText}</Text>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Text style={styles.timestamp}>{moment(props.timestamp).fromNow()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 10
    },
    avatarContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16,
    },
    avatarText: {
        fontSize: 13
    },
    commentText: {
        marginLeft: 40,
        fontSize: 18
    },
    timestamp: {
        fontSize: 11,
        color: '#C4C6CE',
        marginTop: 4
    },

})

export default comment