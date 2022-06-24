import React from "react";
import { StyleSheet, View } from "react-native";


const Card = (props: any) =>{
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        margin: 5,
        borderRadius: 10,
        borderColor: '#6d6e70',
        borderWidth: 0.5,
        paddingBottom: 5,
        backgroundColor: 'black',
        width: '100%'
    },
    cardContent:{
        width: '100%',
        alignItems: 'center',
        alignContent: "center",
        alignSelf: 'center'
    }
})