import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import ArrowBack from "../icons/ArrowBack";

const screens = {
    Login: {
        screen: Login,
    },
    Home: {
        screen: Home
    },
    Settings: {
        screen: Settings
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: '#030a14',
            height: 80,   
        },
        headerBackImage: ()=> <ArrowBack width={20} height={20}/>,
        headerTitleAlign: 'center',
        headerTitleStyle:{
            fontSize: 30,
        }
    }
});

export default createAppContainer(HomeStack);