
const React = require('react-native');
const { StyleSheet,Dimensions } = React;
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default {
  fixedFullPage: {
    flex:1,
    flexDirection:'row',

  },
  leftSideBackGround:{
    width:100,
    backgroundColor:'#262626'

  },
  rightSideBackGround:{
    width:deviceWidth-100,
    backgroundColor:'#910000',

  },
  mainTextArea:{
    position: 'absolute',
    right:0,
    top:20,
    top:deviceHeight*0.1+120,
    alignItems:'flex-end',
    paddingRight:10

  },
  mainFont:{
    fontSize:24,
    lineHeight:28,
    color:'#e50000'
  },
  headerRow:{
    backgroundColor:'#262626',
    position: 'absolute',
    right:0,
    top:deviceHeight*0.1,
    width:deviceWidth*0.95,
    height:100,
    elevation: 5,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingBottom:10,
    paddingRight:5
  },
  headerLogo:{
    backgroundColor:'#9e0404',
    position: 'absolute',
    left:40,
    top:deviceHeight*0.1-15,
    width:130,
    height:130,
    borderRadius:65,
    elevation: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  menuCol:{
    position: 'absolute',
    left:0,
    top:deviceHeight*0.35,
    width:200,
    // height:deviceHeight*0.6,
    alignItems:'center'

  },
  menuItem:{
    marginBottom:0,
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#910000',
    alignItems:'center',
    justifyContent:'center'
  },
  menuItemText:{
    width:180,
    height:30,
    alignItems:'flex-start'
  },
  menuItemTextLeft:{
    marginBottom:5,
    width:90,
    height:30,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  menuFont:{
    color:'#ffffff',
    fontSize:10,
    lineHeight:12,
    marginRight:5
  },
  menuItemOuterColor:{
    width:90,
    height:90,
    borderRadius:45,
    alignItems:'center',
    justifyContent:'center',
    elevation: 10,
  },
  menuItemInnerColor:{
    width:80,
    height:80,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center'
  }


};
