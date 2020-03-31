import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import firebase from 'firebase'
import '@firebase/firestore';

class trends extends React.PureComponent {
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
        for (let i = 1; i < dates.length; i++)
            dates[i] += dates[i - 1]
        this.setState({ data: dates })
    }

    render() {



        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30



        return (
            <View style={{
                padding: 20,
                flexDirection: 'row',
                marginTop: 200,
                height: 300,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <YAxis
                    data={this.state.data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={this.state.data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={this.state.data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        )
    }

}

export default AxesExample