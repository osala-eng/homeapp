import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { LoginAction, userKey, loginError, GET_LOGIN, SET_LOGIN_LODING, SET_LOGIN_ERROR } from "../types";
import { cred_base } from "../../secured/keys";
import md5 from "md5";

export const getCredentials = (userName: string, passWord: string): ThunkAction<void, RootState, null, LoginAction> =>{
    return async dispatch => {
        try{
            const res = await fetch(`${cred_base}/qu/${userName}/qp/${md5(passWord)}`);

            if(!res.ok){
                const resData: loginError = await res.json()
                console.log('res not ok', resData)
                throw new Error(resData.error)
            }
            const resData: userKey = await res.json();
            dispatch({
                type: GET_LOGIN,
                payload: resData
            });
            console.log('res ok', resData)
        }
        catch(err:any){
            dispatch({
                type: SET_LOGIN_ERROR,
                payload: err.message
            });
            console.log('gen err', err)
        }
    }
}

export const setCredLoading = (): LoginAction =>{
    return{
        type: SET_LOGIN_LODING
    };
};