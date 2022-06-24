import { SET_LOCATION_ALERT, LocationAlertAction } from "../types";

export const setAlert = (message: string): LocationAlertAction =>{
    return{
        type: SET_LOCATION_ALERT,
        payload: message
    }
}