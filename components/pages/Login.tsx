import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getCredentials, setCredLoading } from '../../store/actions/loginAction';
import { localKey } from '../../secured/Functions';

import { Button, StyleSheet, Alert, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import styles from '../../StyleSheet';
import { View, Text } from 'react-native';
import { UP, DW } from '../functions/LocalFunctions';
import { getUserCreds } from '../../secured/Functions';
import { userKey, loginError } from '../../store/types';
import { now } from 'moment';
import '../../assets/loading.gif'

let userAuth: userKey | null = {
    status: '',
    local_key: ''
}
let userAuthErr: loginError | null = {
    error: ''
}

const loadingIcon ='../../assets/loading.gif'


const Login = ({navigation}:{navigation: any}) =>{
    const [loadingData, setLoadingData] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({state: false , head: '', message: ''})
    const dispatch = useDispatch();
    let recievedKey = useSelector((state: RootState) => state.login.data);
    const loginState = useSelector((state: RootState) => state.login.loading);
    const loginError = useSelector((state: RootState) => state.login.error);
    

    const clearInput =(): void=>{
        setCreds({
                ...creds,
                username: '',
                password: ''
            });
    };

    const [creds, setCreds] = React.useState({
        username: '',
        password: ''
    })
const loginAction = async () =>{
    error.state &&  setError({
        ...error,
        state: false
    })
    setLoadingData(true);
    let VER = false
    let ERR = false
    const genKey = 'VER_SUCCESS_VER'
    const timerStart = now();
    const Timeout = 30000;
    try{
        const responseKey = await getUserCreds(creds.username, creds.password)
        if(responseKey?.status === genKey){
            VER = true;
        }
        else{
            ERR =true
        }
    }
    catch(err){
        ERR = true;
    }
    finally{
        if(VER && !ERR){
            setLoadingData(false);
            setSuccess(true);
            clearInput();
            navigation.navigate('Home');
            setSuccess(false);
          error.state &&  setError({
                ...error,
                state: false
            })
        }
        else{
            setLoadingData(false)
            setError({
                ...error,
                state: true,
                head: 'Error',
                message: 'wrong username or password or combination: please try again'
            });
            
        }
    }
        
   
    // if(responseKey !== null){
    //     if(responseKey.status === genKey)
    //     {
    //         setLoadingData(false);
    //         clearInput();
    //         navigation.navigate('Home');
    //     }
    // }
    // else{
    //     if(now()-timerStart > Timeout){
    //         setLoadingData(false);
    //         alert('Error fetching data please try again');
    //     }
    //     else if( responseKey === null){
    //         setLoadingData(false);
    //         alert("Error username or password wrong please try again")
    //     }
    // }
}

const streamCreds = (val : boolean, data: string)=>{
    val?(
        setCreds({
            ...creds,
            username: data
        })
    ):
    (
        setCreds({
            ...creds,
            password: data
        })
    )
}

    const [placeHolers, setPlaceHolder] = useState({
        userName: 'username or email',
        passWord: 'password',
        passColor: 'gray',
        userColor: 'gray',
    })
    const [extraInfo, setExtrainfo] = useState({
        pass: false,
        usr: false
    })

    return(
        <View style={styles.mainContainer}> 
        <StatusBar style='light'/>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Welcome to JSOAN HOME</Text>
            <Text style={styles.info}>Login to continue</Text>
        </View>

        { error.state && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error.head}</Text>
                    <Text style={styles.errorMessage}>{error.message}</Text>
                </View>
                )
        }
        
        { loadingData && (
                <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>loading</Text>
                    <ImageBackground source={require(loadingIcon)} 
                        style={styles.icon}/>
                </View>
                )
            }
        {loadingData && <Text style={styles.wait}>Please wait...</Text>}

        { success && (
                <View style={styles.iconContainer}>
                    <Text style={styles.iconTextSuccess}>SUCCSESS</Text>
                    <ImageBackground source={require(loadingIcon)} 
                        style={styles.icon}/>
                </View>
                )
            }
        {success && <Text style={styles.wait}>welcome</Text>}
        
        
        <View style={styles.container}>
            
            <View style={styles.creds}>
                <View style={styles.textBoxUsr}>
                    {extraInfo.usr && <Text style={styles.extrainfo}>username or email</Text>}
                    <TextInput textContentType='emailAddress' 
                    placeholder={`${placeHolers.userName}`} 
                    placeholderTextColor={placeHolers.userColor}
                    style={styles.box}
                    onChangeText={(e)=>streamCreds(UP,e)}
                    value={creds.username}
                    autoCapitalize={'none'}
                    textAlign={'left'}
                    onBlur={()=>{
                        if(creds.username === ''){
                            setPlaceHolder({
                                ...placeHolers,
                                userName: 'username is required !',
                                userColor: 'red'
                            });
                            setExtrainfo({
                                ...extraInfo,
                                usr: false
                            })
                        }
                    }}
                    onFocus={()=>{
                        setPlaceHolder({
                            ...placeHolers,
                            userName: ''
                        });
                        setExtrainfo({
                            ...extraInfo,
                            usr: true
                        })
                    }}
                    ></TextInput>

                </View>
                <View style={styles.textBoxPass}>
                {extraInfo.pass && <Text style={styles.extrainfo}>password</Text>}
                    <TextInput textContentType='password' 
                    placeholder={`${placeHolers.passWord}`} style = {styles.box}
                    secureTextEntry
                    placeholderTextColor={placeHolers.passColor}
                    onChangeText={(e)=>streamCreds(DW,e)}
                    value={creds.password}
                    autoCapitalize={'none'}
                    textAlign={'left'}
                    onBlur={()=>{
                        if(creds.password === ''){
                            setPlaceHolder({
                                ...placeHolers,
                                passWord:'password is required !',
                                passColor: 'red'
                            });
                            setExtrainfo({
                                ...extraInfo,
                                pass: false
                            })
                        }
                    }}
                    onFocus={()=>{
                        setPlaceHolder({
                            ...placeHolers,
                            passWord: ''
                        });
                        setExtrainfo({
                            ...extraInfo,
                            pass: true
                        })
                    }}
                     ></TextInput>
                </View>
                
                <View style={styles.button}>
                    <TouchableOpacity onPress={loginAction} style={styles.btn}>
                        <Text style={styles.btnText}>login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.info}>Dont have an account? signup</Text>
            </View>            
        </View>
        <Text style={styles.tm}>JSOAN © 2022</Text>
      </View>
    );
};

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      },
      wait:{
        position: 'absolute',
        top: 60,
        fontSize: 20,
      },
      infoContainer:{
        position: 'absolute',
        top: 10,
        alignItems: 'center'
      },
      info:{
        color: 'black',
        fontSize: 20,
        alignSelf: 'center'
      },
    container:{
        // flex: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    box:{
        fontSize: 24,
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        width: '95%',
        marginHorizontal: 10,
    },
    iconContainer:{
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',

    },
    errorContainer:{
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'center',
    },
    iconText:{
        fontSize: 30,
        color: 'black',
        paddingHorizontal: 10,
    },
    errorText:{
        fontSize: 30,
        color: 'red',
    },
    errorMessage:{
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
    iconTextSuccess:{
        fontSize: 30,
        color: 'green',
        paddingHorizontal: 10
    },
    icon:{
        width: 40,
        height: 40,
        paddingHorizontal: 30,
    },
    creds:{
        paddingTop: 10,
        height: '60%'
    },
    button:{
        //width: 100,
        alignSelf: 'center',
        //margin: 20,
    },
    btn:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 20,
        alignSelf: 'center',
        margin: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    btnText:{
        fontSize: 30,
    },
    tm:{
        fontSize: 20,
        position: 'absolute',
        bottom: 20
    },
    textBoxUsr:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        borderColor: 'black',
        borderWidth: 0.5,
        marginBottom: 20,
        borderRadius: 10,
        height: 50,
    },
    textBoxPass:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 350,
        borderColor: 'black',
        borderWidth: 0.5,
        marginBottom: 20,
        borderRadius: 10,
        height: 50,
    },
    extrainfo:{
        position: 'absolute',
        top: -13,
        left: 20,
        backgroundColor: 'white',
        fontSize: 20
    }

})
