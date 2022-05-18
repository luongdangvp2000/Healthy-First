import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { placeDetailsReducer, placeListReducer } from "./reducers/placeReducers";

const initialState = {};
const reducer = combineReducers({
    placeList: placeListReducer,
    placeDetails: placeDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;