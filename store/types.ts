export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

// reverse location request
export const GET_LOCATION = 'GET_LOCATION';
export const SET_LOCATION_LOADING = 'SET_LOCATION_LOADING';
export const SET_LOCATION_ERROR = 'SET_LOCATION_ERROR';
export const SET_LOCATION_ALERT = 'SET_LOCATION_ALERT';

//## user login ##
export const GET_LOGIN = 'GET_LOGIN';
export const SET_LOGIN_LODING = 'SET_LOGIN_LODING';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const SET_LOGIN_ALERT = 'SET_LOGIN_ALERT';


export interface Weather{
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData{    
    coord:{
        lon: number;
        lat: number;
    };
    weather: Weather[];
    base: string;
    main:{
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds:{
        all: number;
    };
    dt: number;
    sys:{
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface WeatherError{
    cod: string;
    message: string;
}

export interface WeatherState{
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

interface GetWeatherAction{
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction{
    type: typeof SET_LOADING;
}

interface SetErrorrAction{
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorrAction;

export interface AlertAction{
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState{
    message: string;
}

// open weathermap reverse location request

export interface Location{
    name:        string;
    local_names: { [key: string]: string };
    lat:         number;
    lon:         number;
    country:     string;
    state:       string;
}

// export interface Location{
//     data: LocationRes[];
// }

export interface LocationError{
    cod: number;
    message: string;
}

export interface LocationState{
    data: Location | null;
    loading: boolean;
    error: string;
}

export interface GetLocationAction{
    type: typeof GET_LOCATION;
    payload: Location;
}

export interface SetLocationLoading{
    type: typeof SET_LOCATION_LOADING;
}

export interface SetLocationErrorAction{
    type: typeof SET_LOCATION_ERROR;
    payload: string;
}

export type LocationAction = GetLocationAction | SetLocationLoading | SetLocationErrorAction;

export interface LocationAlertAction{
    type: typeof SET_LOCATION_ALERT;
    payload: string;
}

export interface LocationAlertState{
    message: string;
}

//## End of reverse Location setup

// ## Start login

export interface userKey{
    status: string,
    local_key: string
}

export interface loginError{
    error: string
}

export interface loginState{
    data: userKey | null,
    loading: boolean,
    error: string,
}

interface getLoginAction{
    type: typeof GET_LOGIN
    payload: userKey
}

interface SetLoginAction{
    type: typeof SET_LOGIN_LODING
}

interface SetLoginErrorAction{
    type: typeof SET_LOGIN_ERROR;
    payload: string
}

export type LoginAction = getLoginAction | SetLoginAction | SetLoginErrorAction;

export interface LoginAlertAction{
    type: typeof SET_LOGIN_ALERT;
    payload: string;
}

export interface LoginAlertState{
    message: string;
}

// ## End of Login