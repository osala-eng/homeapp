import React from 'react'
import { TouchableOpacity,Text,View } from 'react-native'
import styles from '../StyleSheet'
import Fan from './icons/Fan'
import Bulb from './icons/Bulb'
import Power from './icons/Power'

interface DeviceProps{
  params? : string,
  room? : string,
  style? : object,
}

export const Devices = ({params, style, room}:DeviceProps) => {
  return (
    <TouchableOpacity 
        style = {style} 
    >
      <View style={styles.deviceName}>
        <Text style={styles.deviceText}>{params}</Text>
      </View>
      <View style={styles.deviceIcon}>
        {params === 'Bulb'?
          <Bulb width={40} height={40} color={'#c4c4c4'}/>:
          params === 'Fan'?
          <Fan width={40} height={40} color={'#c4c4c4'}/>:
          <Power width={40} height={40} color={'#c4c4c4'}/>
        }
      </View>
      
    </TouchableOpacity>
  )
}
