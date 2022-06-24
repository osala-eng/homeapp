import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../store";
import { getWeather } from "../store/actions/weaatherActions";
import {getLocation} from '../store/actions/locationAction';
import News from "./News";
import { View } from "react-native";
import styles from "../StyleSheet";
import { Weather } from "../mockdata/data";
import {Location} from '../store/types'

let loader = 0;
let updateTimer = 0;
const delayTime = 1000;

const coordinates = {
    lat: -4.032548,
    lon: 39.683936
}

export default function NewsDelivery ({set}:{set: any}){
   const dispatch = useDispatch();
   const weatherData = useSelector((state: RootState) => state.weather.data);
   const locationData = useSelector((state: RootState) => state.location.data);
   if(loader < 2 && !weatherData){
        dispatch(getLocation(coordinates.lat, coordinates.lon));
        locationData && (dispatch(getWeather(`${locationData.name},${locationData.country}`)));
        loader++;
        console.log('xx');
    }

    const update = (): void=>{
        dispatch(getLocation(coordinates.lat, coordinates.lon));
        locationData && (dispatch(getWeather(`${locationData.name},${locationData.country}`)));
        console.log('refresh',weatherData);
    }
       
    return(
        <View style={styles.newsView}>
            {
                !weatherData?
                Weather && <News update={update} data={Weather} set={set}/>:
                weatherData && <News update={update} data={weatherData} set={set}/>
            }    
        </View>   
    )
}