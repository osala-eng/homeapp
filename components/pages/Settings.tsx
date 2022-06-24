import React from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../StyleSheet';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { settings } from '../../mockdata/data';


const Settings = () =>{
    return(
        <View style={styles.container}> 
        <StatusBar style='light'/>
        <SafeAreaView style={defaultStyle.container}>
               <FlatList
                data={settings}
                renderItem={(items)=>(
                    <TouchableOpacity style={defaultStyle.touchArea} >
                         <Text style={defaultStyle.text}>{items.item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item=>item.key}
               >

               </FlatList>
        </SafeAreaView>
      </View>
    );
};

export default Settings

const defaultStyle = StyleSheet.create({
    container:{
        flex: 13,
        display: 'flex',
        width: '100%'
    },
    text:{
        fontSize: 30,
        color: 'white'
    },
    touchArea:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        padding: 20,
        backgroundColor: 'black',
        //borderBottomWidth: 0.5,
        borderColor: 'white',
        margin: 2,
    }
})
