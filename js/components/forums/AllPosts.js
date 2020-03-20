import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import firebase from 'firebase'
import '@firebase/firestore';

posts = []

export default class HomeScreen extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        posts = []
        const ref = firebase.firestore().collection('posts')
        let allPosts = ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                // console.log('#')
                // console.log(doc.data())
                // console.log('#')
                posts.push(doc.data())
            })
            //console.log(posts)
            this.setState({ posts: posts })
            //console.log(this.state.posts)
        })
    }
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <ImageBackground source={{ uri: post.avatar }} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>
                        <Ionicons name='ios-more' size={24} color='#73788B' />
                    </View>
                    <Text style={styles.posts}>{post.text}</Text>
                    <ImageBackground source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='ios-heart-empty' size={24} color='#73788B' style={{ marginRight: 16 }} />
                        <Ionicons name='ios-chatboxes' size={24} color='#73788B' />
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>
                <FlatList
                    style={styles.feed}
                    data={this.state.posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.timestamp.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
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
        backgroundColor: '#FFF',
        alignItems: 'center',
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
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16,
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: '#454D65',
    },
    timestamp: {
        fontSize: 11,
        color: '#C4C6CE',
        marginTop: 4
    },
    posts: {
        marginTop: 16,
        fontSize: 14,
        color: '#838899'
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16,

    }
})