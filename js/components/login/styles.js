
const React = require('react-native');
const { StyleSheet,Dimensions } = React;
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default {
  container: {
    // flex:1,
  },
  content:{
    alignSelf:'center',
    alignItems:'center',
    paddingRight:5,
    paddingLeft:5,
    width:deviceWidth*0.8,
    height:deviceHeight*0.5,
    position:'absolute',
    bottom:0
  },
  logo:{
    alignSelf:'center',
    width:200,
    height:200,
    marginTop:50,
    backgroundColor:'red'
  },
  loginButtonFacebook:{
    alignItems:'center',
    justifyContent:'center',
    height:50,
    width:deviceWidth*0.7,
    backgroundColor:'#3b5998',
    marginBottom:20
  },
  loginButtonGoogle:{
    alignItems:'center',
    justifyContent:'center',
    height:50,
    width:deviceWidth*0.7,
    backgroundColor:'#db3236'
  },
  buttonText:{
    color:'#ffffff'
  }

};
