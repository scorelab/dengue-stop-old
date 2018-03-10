import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

import i18n from '../../i18n/i18nConfig';
import styles from './styles';
import theme from '../../themes/dengue_stop';
const loginLogo = require('../../../imgs/test_logo.jpg');

class Home extends React.Component {
  render() {
    return (
      <View style={styles.fixedFullPage}>
        <View style={styles.leftSideBackGround}>
        </View>

        <View style={styles.rightSideBackGround}>
          <View style={styles.mainTextArea}>
            <Text style={styles.mainFont}>
              {i18n.t('home.totalCases')}
            </Text>
            <Text style={[styles.mainFont, { color: '#95989a', marginBottom: 10 }]}>
              67,456
            </Text>

            <Text style={styles.mainFont}>
              {i18n.t('home.lastWeek')}
            </Text>
            <Text style={[styles.mainFont, { color: '#95989a', marginBottom: 10 }]}>
              345
            </Text>

            <Text style={styles.mainFont}>
              {i18n.t('home.last24Hours')}
            </Text>
            <Text style={[styles.mainFont, { color: '#95989a' }]}>
              20
            </Text>
          </View>

        </View>
        <View style={styles.headerRow}>
          <Text style={{ color: '#ffffff', fontSize: 24, fontStyle: 'italic' }}>
            {i18n.t('home.livesFight')}
          </Text>
        </View>
        <View style={styles.headerLogo}>
          <Text>
            header logo
          </Text>
        </View>
        <View style={styles.menuCol}>
          <View style={styles.menuItemText}>
            <View style={styles.menuItemTextLeft}>
              <Text style={styles.menuFont}>
                {i18n.t('home.reportCase')}
              </Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={[styles.menuItemOuterColor, { backgroundColor: '#9e0404' }]}>
              <View style={[styles.menuItemInnerColor, { backgroundColor: '#910000' }]}>
                <Text>menu 1
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.menuItemText}>
            <View style={styles.menuItemTextLeft}>
              <Text style={styles.menuFont}>
                {i18n.t('home.reportDump')}
              </Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={[styles.menuItemOuterColor, { backgroundColor: '#ef7400' }]}>
              <View style={[styles.menuItemInnerColor, { backgroundColor: '#ed5e00' }]}>
                <Text>menu 2
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.menuItemText}>
            <View style={styles.menuItemTextLeft}>
              <Text style={styles.menuFont}>
                {i18n.t('home.reportDump')}
              </Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <View style={[styles.menuItemOuterColor, { backgroundColor: '#025199' }]}>
              <View style={[styles.menuItemInnerColor, { backgroundColor: '#006691' }]}>
                <Text>menu 3
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
