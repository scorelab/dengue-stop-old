import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import firebase from 'firebase'
import '@firebase/firestore';

export default class barChart extends React.PureComponent {
    
    state = {
        reports: [],
        data: []
    }
    
    componentDidMount() {
        reports = []
        data = []
        dates = []
        const ref = firebase.firestore().collection('reports')
        let allReports = ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                reports.push(doc.data())
                let date = new date(doc.data().timeStamp)
                dates.push(date)
            })
            this.setState({ reports: reports })
            console.log(this.state.reports)
        })
        let count = 0;
        for (let i = 0; i < dates.length; i++) {
            if (dates[i] == dates[i + 1]) {
                count++;
            }
            else {
                dates.push(count + 1)
                count = 0
            }
        }
        
        this.setState({ data: dates.slice(0,5) })
    }

    render() {

        const data = this.state.data

        const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
                    fontSize={14}
                    fill={value >= CUT_OFF ? 'white' : 'black'}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}
                </Text>
            ))
        )

        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.HORIZONTAL} />
                    <Labels />
                </BarChart>
            </View>
        )
    }

}

