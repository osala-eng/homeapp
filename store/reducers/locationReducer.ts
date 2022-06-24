import { LocationState,LocationAction,GET_LOCATION,SET_LOCATION_LOADING,SET_LOCATION_ERROR } from "../types";

const initialState: LocationState={
    data: null,
    loading: false,
    error: ''
}

export default (state= initialState, action: LocationAction):LocationState =>{
    switch(action.type){
        case GET_LOCATION:
            return{
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOCATION_LOADING:
            return{
                ...state,
                loading: true
            }
        case SET_LOCATION_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}