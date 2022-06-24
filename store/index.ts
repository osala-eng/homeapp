import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";

// ## Reverse location ##
import locationReducer from "./reducers/locationReducer";
import locationAlertReducer from "./reducers/locationAlertReducer";

//## login ##
import loginReducer from "./reducers/loginReducer";
import loginAlertReducer from "./reducers/loginAlertReducer";


const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer,

    //## Reverse location ##
    location: locationReducer,
    locationAlert: locationAlertReducer,

    //## Login
    login: loginReducer,
    loginAlert: loginAlertReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType <typeof rootReducer>;

export default store;