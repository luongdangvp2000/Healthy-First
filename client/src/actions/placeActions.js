import Axios from "axios"
import {
    PLACE_LIST_REQUEST,
    PLACE_LIST_SUCCESS,
    PLACE_LIST_FAIL,
    PLACE_DETAILS_REQUEST,
    PLACE_DETAILS_SUCCESS,
    PLACE_DETAILS_FAIL,
} from "../constants/placeConstants";

export const listPlaces = () => async (dispatch) => {
    dispatch({
        type: PLACE_LIST_REQUEST
    });
    try {
        const data = await Axios.get('/api/places');
        dispatch({
            type: PLACE_LIST_SUCCESS, payload: data.data
        });
    } catch (error) {
        dispatch({
            type: PLACE_LIST_FAIL, payload: error.message
        });
    };
};

export const detailsPlace = (placeId) => async (dispatch) => {
    dispatch({ type: PLACE_DETAILS_REQUEST, payload: placeId });
    try {
        const { data } = await Axios.get(`/api/places/${placeId}`)
        dispatch({ type: PLACE_DETAILS_SUCCESS, payload: data.data});
    } catch (error) {
        dispatch({
            type: PLACE_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};