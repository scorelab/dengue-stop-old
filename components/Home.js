import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function Home () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/mosq.gif')}
          />
        </View>

        <Text style={{ fontSize: 20, marginTop: 5, marginBottom: 5 }}>
          Our Life, Our Fight!
        </Text>
      </View>

      {/* Statistics */}
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <View>
          <View style={styles.column}>
            <View style={styles.item}>
              <Text style={styles.overview_details}>65435</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.overview_details}>345</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.overview_details}>20</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.column}>
            <View style={styles.item}>
              <Text style={styles.overview_text}>Total Cases</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.overview_text}>Last Week</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.overview_text}>Last 24hrs</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Button Bar */}

      <View>
        {/* Report Case Button */}
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <TouchableOpacity
            onPress={() => alert('Report Sent!')}
            style={{
              borderWidth: 1,
              padding: 20,
              borderRadius: 10,
              borderColor: 'orange'
            }}
          >
            <View style={styles.column}>
              <View style={styles.btn_left}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require('../assets/report.png')}
                />
              </View>
              <View style={styles.btn_right}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'red',
                    margin: 15,
                    alignContent: 'center'
                  }}
                >
                  Report a Case
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Report Garbage Dump Button */}
        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => alert('Report Sent!')}
            style={{
              borderWidth: 1,
              padding: 20,
              borderRadius: 10,
              borderColor: 'orange'
            }}
          >
            <View style={styles.column}>
              <View style={styles.btn_left}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require('../assets/garbage.png')}
                />
              </View>
              <View style={styles.btn_right}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'red',
                    margin: 15,
                    alignContent: 'center'
                  }}
                >
                  Report Garbage Dump
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Community Button */}
        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => alert('Waiting to join the community!')}
            style={{
              borderWidth: 1,
              padding: 20,
              borderRadius: 10,
              borderColor: 'orange'
            }}
          >
            <View style={styles.column}>
              <View style={styles.btn_left}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require('../assets/community.png')}
                />
              </View>
              <View style={styles.btn_right}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'red',
                    margin: 15,
                    alignContent: 'center'
                  }}
                >
                  Check Our Community
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 180,
    alignSelf: 'stretch',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  column: {
    margin: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  item: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overview_text: {
    fontSize: 15
  },
  overview_details: {
    fontSize: 30
  },
  btn_left: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_right: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
