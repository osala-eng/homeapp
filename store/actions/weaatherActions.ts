import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { WeatherAction,WeatherData,WeatherError,GET_WEATHER,SET_LOADING,SET_ERROR } from "../types";
import { api_key, base } from "../../secured/keys";

export const getWeather = (city: string): ThunkAction<void, RootState, null,WeatherAction> =>{
    return async dispatch =>{
        try{
            const res = await fetch(`${base}?q=${city}&APPID=${api_key}`);

            if(!res.ok){
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }
            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        }
        catch(err:any){
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const setLoading= (): WeatherAction=>{
    return{
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction=>{
    return{
        type: SET_ERROR,
        payload: ''
    }
}