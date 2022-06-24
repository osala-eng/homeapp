import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../../StyleSheet';
import { SafeAreaView, View } from 'react-native';
import Rooms from '../../mockdata/mockdata.json';
import NewsDelivery from '../NewsDelivery';
import { Devices } from '../Devices';

const Home = ({ navigation }: { navigation: any }) => {
  const openSettings = () => {
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <NewsDelivery set={openSettings} />
      <View style={styles.view} >
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Bulb'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Tv'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Music'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Fan'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Tv'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Heater'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Microwave'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Fan'} />
        <Devices style={styles.devices} room={Rooms.livingroom.name} params={'Bulb'} />
      </View>
    </SafeAreaView>
  );
};

export default Home
