import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;

export default {
  //colors
  mainColor:'#3EBA8F',

  fixedFullPage:{
      height:deviceHeight,
      width:deviceWidth,
      backgroundColor:'#ffffff'
  },

  container: {
    backgroundColor: '#FFF',
  },


  headerRow:{
    backgroundColor:'#3EBA8F',
    // marginTop:(platform === 'ios') ? 0 : 20,

  },

  headerBody:{
    flex:0.6,
    alignItems:'center'
  },

  headerLeft:{
    color:'#FFF'
  },

  headerText:{
    color:'#FFF'
  },
  headerSubtext:{
    fontSize:10,
    color:'gray'
  },

  headerRight:{
    color:'#FFF'
  }


};
