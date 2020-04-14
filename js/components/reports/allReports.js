import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import { Dropdown } from 'react-native-material-dropdown';
import firebase from 'firebase'
import '@firebase/firestore';

export default class allReports extends Component {
    state = {
        reports: [],
        displayReports: [],
        value: 'all',
        data: []
    }
    componentDidMount() {
        let reports = []
        const ref = firebase.firestore().collection('reports')
        let allReports = ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                reports.push(doc.data())
            })

            let data = []
            for (let i = 0; i < reports.length; i++) {
                if (data.indexOf(reports[i].disease) === -1)
                    data.push({
                        value: reports[i].disease
                    })
            }
            this.setState({
                reports: reports,
                displayReports: reports,
                data: data
            })
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
                <Text style={styles.timestamp}>{report.timestamp}</Text>
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
                <View style={{ marginHorizontal: 20 }}>
                    <Dropdown
                        label='Filter'
                        data={this.state.data}
                        value={this.state.value}
                        onChangeText={(value) => {
                            this.setState({ value: value })
                            reports = this.state.reports
                            let newReports = []
                            for (let i = 0; i < reports.length; i++) {
                                if (reports[i].disease === value)
                                    newReports.push(reports[i])
                            }
                            console.log(newReports)
                            if (value === 'all')
                                newReports = reports
                            this.setState({ displayReports: newReports })
                            console.log(this.state.value)
                        }}
                    />
                </View>
                <FlatList
                    style={styles.feed}
                    data={this.state.displayReports}
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