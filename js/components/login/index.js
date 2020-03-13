import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import styles from './styles';
import theme from '../../themes/dengue_stop';

const loginLogo = require('../../../imgs/test_logo.jpg');
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static propTypes = {
    popRoute: PropTypes.func,
    navigation: PropTypes.shape({
      key: PropTypes.string,
    }),
  }

  render(){
    return (
      <View style={theme.fixedFullPage}>

        <View>
          <Image  style={styles.logo} source={loginLogo}/>
        </View>
        <View style={styles.content}>

          <TouchableOpacity style={styles.loginButtonFacebook} onPress={()=>console.warn('facebook')}>
            <Text style={styles.buttonText}>Connect with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButtonGoogle} onPress={()=>console.warn('google')}>
            <Text style={styles.buttonText}>Connect with Google</Text>
          </TouchableOpacity>

          <Text onPress={()=>Actions.home()} style={{marginTop:50}}>
            Skip to homepage for testing
          </Text>
        </View>
        </View>
    );
  }
}

module.exports = Login;
