import { StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111112',
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: 'flex',
    },
    text: {
      flex: 10,
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    top: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030a14',
        borderColor: '#14161a',
        borderBottomWidth: 0.5
    },
     info:{
      flex: 1,
      fontSize: 30,
      color: 'white',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    view:{
      // position: 'absolute',
      // bottom: 0,
      flex: 7,
      display: 'flex',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap'
    },
    devices:{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      height: '30%',
      minWidth: '30%',
      color: 'white',
      borderRadius: 20,
      borderColor: '#6d6e70',
      borderWidth: 0.5,
      backgroundColor: 'black'
    },
    deviceName:{
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 5,
    },
    deviceIcon:{
      flex: 3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    deviceText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      paddingBottom: 10,
    },
    back:{
      flex: 1
    },   
    arrow:{
      width: 20,
      height: 20,
    },
    newsView:{
      flex: 7,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    newsViewHead:{
      flex: 1,
      display: 'flex',
      
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'black'
    },
    headConfig:{
      flex: 8,
      display: 'flex',
      paddingLeft: 10,
    },
    headSet:{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    newsViewInfo:{
      flex: 6,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
    },
    newsViewOut:{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#878787',
      borderWidth: 1,
      margin: 5,
      paddingBottom: 10,
      borderRadius: 10,
    },
    newsViewIn:{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },  
    textValues:{
      color: '#878787',
      fontSize: 30,
      borderColor: '#878787',
      textAlign: 'center',
      margin: 2,
      width: '100%'
    },
    newsViewInner:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    extraInfo:{
      color: '#bdc6f2',
      paddingTop: 5,
      textAlign: 'center'
    },
    // ## Console ##
    consoleView:{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewText:{
      color:'#878787',
      fontSize: 60,
    },
    scrollContainer:{
      flex: 4,
      display:'flex',
      flexDirection: 'row',
    },
    scrollViewBase:{
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      borderColor: '#878787',
      borderWidth: 0.5,
      borderRadius: 10,
      marginHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    scrollSide:{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    consoleTitle:{
      flex: 1,
      display: 'flex',
    },
    consoleBody:{
      flex: 5,
      display: 'flex',
      flexDirection: 'row',
    }

  });
  
  export default styles