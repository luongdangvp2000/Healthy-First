import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
    placeDetailsReducer,
    placeListReducer,
    placeCreateReducer,
} from "./reducers/placeReducers";
import { 
    userDetailsReducer,
    userRegisterReducer, 
    userSigninReducer,
    userUpdateProfileReducer, 
} from './reducers/userReducers';


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    }, //keep user sign in when refresh
};
const reducer = combineReducers({
    placeList: placeListReducer,
    placeDetails: placeDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    placeCreate: placeCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;