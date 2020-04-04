import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { View, Stylesheet } from 'react-native'
import firebase from 'firebase'
import '@firebase/firestore';

class pieChart extends React.PureComponent {
    state = {
        reports: [],
        diseases: [],
        data: []
    }
    componentDidMount() {
        reports = []
        diseases = []
        data = []
        const ref = firebase.firestore().collection('reports')
        let allReports = ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                reports.push(doc.data())
                diseases.push(doc.data().disease)
            })
            this.setState({ reports: reports, diseases: disease })
            console.log(this.state.reports)
        })
        let count = 0;
        let key = 0;
        for (let i = 0; i < diseases.length - 1; i++) {
            if (diseases[i] == diseases[i + 1]) {
                count++;
            }
            else {
                data.push({
                    key: key,
                    amount: count+1,
                })
                count=0;
                key++;
            }
        }
    }
    render() {

        const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#600080' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#9900cc' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#c61aff' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#d966ff' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[0]}
                        y={pieCentroid[1]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <PieChart
                    style={{ height: 200 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    spacing={0}
                    outerRadius={'95%'}
                >
                    <Labels />
                </PieChart>
            </View>
        )
    }

}

export default pieChart
