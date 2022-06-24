import React, { FC, useState } from "react"
import { Text, TouchableOpacity, View, ImageBackground, SafeAreaView, ScrollViewBase } from "react-native"
import styles from "../StyleSheet"
import Settings from "./icons/Settings"
import { WeatherData } from "../store/types";
import Console from "./Console";
import { DW, Timeago, UP } from './functions/LocalFunctions'
import { now } from "moment";
import Left from "./icons/Left";
import Right from "./icons/Right";
import Card from "./templates/Card";







interface WeatherProps {
  data: WeatherData;
}

const News = ({ data, update, set }: { data: WeatherData, update: any, set: any }) => {

  React.useEffect(()=>{
    //reload();
  })
  const [roomParams, setRoomParams] = useState({
    temperature: 20,
    humidity: 30,
    brightness: 50,
  });
  const [Time, setTime] = useState({data: Timeago(data.dt * 1000)});
  const consoles = 2;
  const [consoleId, setConsoleId] = useState({ id: 0 });
  
  const reload = (): void => {
    setTime({
      ...Time,
      data: Timeago(data.dt * 1000)
    });
    update();
  }

  if (Time.data !== Timeago(data.dt * 1000)) reload();

  const adjustRoomParams = (param: string,dir: boolean):void =>{
    if(param === 'TEMP' && dir){
      setRoomParams({
        ...roomParams,
        temperature: roomParams.temperature + 1
      });
    }
    else if(param === 'TEMP' && !dir){
      setRoomParams({
        ...roomParams,
        temperature: roomParams.temperature - 1
      });
    }
    else if(param === 'HUM' && dir){
      setRoomParams({
        ...roomParams,
        humidity: roomParams.humidity + 1
      });
    }
    else if(param === 'HUM' && !dir){
      setRoomParams({
        ...roomParams,
        humidity: roomParams.humidity - 1
      });
    }
    else if(param === 'LUX' && dir){
      setRoomParams({
        ...roomParams,
        brightness: roomParams.brightness + 1
      });
    }
    else if(param === 'LUX' && !dir){
      setRoomParams({
        ...roomParams,
        brightness: roomParams.brightness - 1
      });
    }
  }

  const changeId = (num: number, dir: boolean): void => {
    setRoomParams({
      ...roomParams,
      humidity: roomParams.humidity
    });

    if (consoleId.id < num && dir && consoleId.id !== num) {
      setConsoleId({
        ...consoleId,
        id: consoleId.id + 1,
      });
    }
    else if (consoleId.id <= num && !dir && consoleId.id !== 0) {
      setConsoleId({
        ...consoleId,
        id: consoleId.id - 1,
      });
    }
    else if (consoleId.id === num && dir) {
      setConsoleId({
        ...consoleId,
        id: 0,
      });
    }
    else if (consoleId.id === 0 && !dir) {
      setConsoleId({
        ...consoleId,
        id: num,
      });
    }
  }

  return (
    <View style={styles.newsViewInner} onMagicTap={() => reload()} >
      <View style={styles.newsViewHead}>
        <TouchableOpacity style={styles.headConfig}>
          <Text style={{ color: '#98a399', fontSize: 25 }}>
            Settup Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headSet} onPress={()=>set()}>
          <Settings width={25} height={25} color={'#98a399'} />
        </TouchableOpacity>
      </View>
      <View style={styles.newsViewInfo}>
        <View style={styles.newsViewIn}>
          {/*Atmospherics in Card */}
          <Card>
            <Text style={{ color: '#878787', fontSize: 40}}>Inside:</Text>
            <Text style={styles.textValues}>Temp: 20°C</Text>
            <Text style={styles.textValues}>Hum: 30%</Text>
          </Card>
          {/* Console */}
          <SafeAreaView style={styles.scrollViewBase} >
            <View style={styles.consoleTitle}>
              <Text style={{ color: '#878787', fontSize: 30 }}>{
                  consoleId.id === 0?
                  `Set Temperature`:
                  consoleId.id === 1?
                  `Set humidity`:
                  `Set Brightness`}</Text>
            </View>
            <View style={styles.consoleBody}>
              <TouchableOpacity style={styles.scrollSide} onPress={() => changeId(consoles, DW)}>
                <Left width={30} height={30} color={'#878787'}/>
              </TouchableOpacity>
              <View style={styles.scrollContainer}>
                {
                  (consoleId.id === 0) ?
                    <Console value={roomParams.temperature} store={adjustRoomParams} id = {'TEMP'}/> :
                    (consoleId.id === 1) ?
                      <Console value={roomParams.humidity} store={adjustRoomParams} id = {'HUM'}/> :
                      <Console value={roomParams.brightness} store={adjustRoomParams} id = {'LUX'}/>
                }
              </View>
              <TouchableOpacity style={styles.scrollSide} onPress={() => changeId(consoles, UP)}>
                <Right width={30} height={30}  color={'#878787'}/>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
        <Card >
          <Text style={{ color: '#878787', fontSize: 40 , textAlign: "center"}}>Outside:</Text>
            {
              data.sys.country !== '...' ?
                <Text style={styles.textValues}>{`Temp: ${Math.round(data.main.temp - 273)}`}°C </Text> :
                <Text style={styles.textValues}>Temp</Text>
            }
            {
              data.sys.country !== '...' ?
                <Text style={styles.textValues}>{`Hum: ${Math.round(data.main.humidity)}`}%</Text> :
                <Text style={styles.textValues}>Humidity</Text>
            }
            {
              data.sys.country !== '...' ?
                <Text style={styles.textValues}>{`P: ${Math.round(data.main.pressure)}`} Pa</Text> :
                <Text style={styles.textValues}>Pressure</Text>
            }
            <TouchableOpacity onPress={() => reload()}>
              <ImageBackground source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                style={{ width: 80, height: 80, alignSelf: "center" }}
              />
            </TouchableOpacity>

            {
              data.sys.country !== '...' ?
                <Text style={styles.textValues }>{data.weather[0].description}</Text> :
                <Text style={styles.textValues}>Description</Text>
            }
            <Text style={styles.extraInfo}>{`${data.name}, ${data.sys.country}`}</Text>
            <Text style={styles.extraInfo}>{`Feels like: ${(data.main.feels_like -273).toFixed(0)}ºC`}</Text>
            {
              data.sys.country === '...' ?
                <Text style={styles.extraInfo}>{`Loading...`}</Text> :
                <Text style={styles.extraInfo}>{`Data from: ${Time.data}`}</Text>
            }
        </Card>
        
      </View>
    </View>
  )
}

export default News