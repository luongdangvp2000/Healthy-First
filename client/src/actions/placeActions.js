import Axios from "axios"
import {
  PLACE_LIST_REQUEST,
  PLACE_LIST_SUCCESS,
  PLACE_LIST_FAIL,
  PLACE_DETAILS_REQUEST,
  PLACE_DETAILS_SUCCESS,
  PLACE_DETAILS_FAIL,
  PLACE_CREATE_REQUEST,
  PLACE_CREATE_SUCCESS,
  PLACE_CREATE_FAIL,
  PLACE_CREATE_RESET,
  PLACE_UPDATE_REQUEST,
  PLACE_UPDATE_SUCCESS,
  PLACE_UPDATE_FAIL,
  PLACE_UPDATE_RESET,
  PLACE_DELETE_REQUEST,
  PLACE_DELETE_SUCCESS,
  PLACE_DELETE_FAIL,
  PLACE_DELETE_RESET,
  PLACE_CERTIFICATE_CREATE_SUCCESS,
  PLACE_CERTIFICATE_CREATE_REQUEST,
  PLACE_CERTIFICATE_CREATE_RESET,
  PLACE_CERTIFICATE_CREATE_FAIL
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
    dispatch({ type: PLACE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PLACE_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const createPlace = () => async (dispatch, getState) => {
  dispatch({ type: PLACE_CREATE_REQUEST });
  const { userSignin: { userInfo } } = getState();
  try {
    const { data } = await Axios.post('/api/places', {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PLACE_CREATE_SUCCESS,
      payload: data.place,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PLACE_CREATE_FAIL, payload: message });
  }
};

export const updatePlace = (place) => async (dispatch, getState) => {
  dispatch({ type: PLACE_UPDATE_REQUEST, payload: place });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/places/${place._id}`, place, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PLACE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PLACE_UPDATE_FAIL, error: message });
  }
};

export const deletePlace = (placeId) => async (dispatch, getState) => {
  dispatch({ type: PLACE_DELETE_REQUEST, payload: placeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/places/${placeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PLACE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PLACE_DELETE_FAIL, payload: message });
  }
};

export const createCertificate =
  (placeId, certificate) => async (dispatch, getState) => {
    dispatch({ type: PLACE_CERTIFICATE_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/places/${placeId}/certificates`,
        certificate,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PLACE_CERTIFICATE_CREATE_SUCCESS,
        payload: data.certificate,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PLACE_CERTIFICATE_CREATE_FAIL, payload: message });
    }
  };