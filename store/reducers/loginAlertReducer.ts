import { LoginAlertState, LoginAlertAction, SET_LOGIN_ALERT } from "../types";

const initialState: LoginAlertState = {
    message: ''
}

export default (state = initialState, action: LoginAlertAction): LoginAlertState =>{
    switch(action.type){
        case SET_LOGIN_ALERT:
            return{
                message: action.payload
            }
        default:
            return state

    }

}