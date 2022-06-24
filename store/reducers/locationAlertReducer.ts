import { LocationAlertState,LocationAlertAction, SET_LOCATION_ALERT } from "../types";

const initialState:LocationAlertState = {
    message: ''
}

export default (state = initialState, action:LocationAlertAction): LocationAlertState =>{
    switch(action.type){
        case SET_LOCATION_ALERT:
            return{
                message: action.payload
            };
        default:
            return state;
    }
}