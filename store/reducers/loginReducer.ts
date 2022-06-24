import { loginState, LoginAction, GET_LOGIN, SET_LOGIN_LODING, SET_LOCATION_ERROR, SET_LOGIN_ERROR } from "../types";

const initialState: loginState = {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: LoginAction): loginState =>{
    switch(action.type){
        case GET_LOGIN:
            return{
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOGIN_LODING:
            return{
                ...state,
                loading: true
            }

        case SET_LOGIN_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}