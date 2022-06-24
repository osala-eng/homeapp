import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { LocationAction,Location,LocationError,GET_LOCATION,SET_LOCATION_LOADING,SET_LOCATION_ERROR } from "../types";
import { api_key,loc_base} from "../../secured/keys";

export const getLocation = (lat: number, lon: number): ThunkAction<void, RootState, null, LocationAction> =>{
    return async dispatch =>{
        try{
            const res = await fetch(`${loc_base}lat=${lat}&lon=${lon}&limit=1&appid=${api_key}`);
            if(!res.ok){
                const resData: LocationError = await res.json();
                throw new Error(resData.message);
            }
            const resData: Location = await res.json();
            dispatch({
                type: GET_LOCATION,
                payload: endJson(JSON.stringify(resData))
            });
           // const test = JSON.stringify(resData);
            //console.log(endJson(test));
        }
        catch(err:any){
            dispatch({
                type: SET_LOCATION_ERROR,
                payload: err.message
            });
            console.log(err)
        };
    };
};

export const setLoading = (): LocationAction =>{
    return{
        type: SET_LOCATION_LOADING
    };
};

export const setError = (): LocationAction =>{
    return{
        type: SET_LOCATION_ERROR,
        payload: ''
    };
};

function endJson(datain: string){
    let x = datain.replace('[','');
    x = x.replace(']','');
    return JSON.parse(x)
}