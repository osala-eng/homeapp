import React, {FC} from "react"
import {StyleSheet, Text,TouchableOpacity,View } from "react-native"
import styles from "../StyleSheet"
import { TwodigitString, UP, DW } from "./functions/LocalFunctions"
import Downarrow from "./icons/Downarrow"
import Uparrow from "./icons/Uparrow"


 interface tempProps{
     tempValue: number;
     tempString: string;
 }


const Console = ({value, store, id}: {value: number, store: any, id: string}) =>{
    let [tempParams, setTempParams] = React.useState({
        tempValue: value,
        tempString: TwodigitString(value)
    })
   
    const SetTemp = ():void =>{
        setTempParams({
            ...tempParams,
            tempValue: value,
            tempString: TwodigitString(value)
        });
    }
    if(tempParams.tempString !== TwodigitString(value)) SetTemp();

    return(
         <View style={styles.consoleView}>
             <TouchableOpacity onPress={()=>{store(id,UP); SetTemp();}} style={defaultStyle.arrowUp}>
                 <Uparrow width={40} height={40}  color={'#878787'}/>
             </TouchableOpacity>
             <View>
                 <Text style={styles.viewText}>{tempParams.tempString}</Text>
             </View>
             <TouchableOpacity onPress={()=>{store(id,DW);SetTemp();}} style={defaultStyle.arrowBottom}>
                 <Downarrow width={40} height={40}  color={'#878787'}/>
             </TouchableOpacity>
        </View>
    )
}

export default Console

const defaultStyle = StyleSheet.create({
    arrowUp:{
        paddingBottom: 10,
    },
    arrowBottom:{
        paddingTop: 10,
    }
})