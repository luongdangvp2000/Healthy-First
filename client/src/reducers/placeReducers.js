const {
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
    PLACE_CERTIFICATE_CREATE_REQUEST,
    PLACE_CERTIFICATE_CREATE_SUCCESS,
    PLACE_CERTIFICATE_CREATE_FAIL,
    PLACE_CERTIFICATE_CREATE_RESET,
} = require('../constants/placeConstants');


export const placeListReducer = (state = { loading: true, places: [] }, action) => {
    switch (action.type) {
        case PLACE_LIST_REQUEST:
            return { loading: true };
        case PLACE_LIST_SUCCESS:
            return { loading: false, places: action.payload };
        case PLACE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }

}

export const placeDetailsReducer = (state = {
    //product: {}, 
    loading: true
},
    action) => {
    switch (action.type) {
        case PLACE_DETAILS_REQUEST:
            return { loading: true };
        case PLACE_DETAILS_SUCCESS:
            return { loading: false, place: action.payload };
        case PLACE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const placeCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_CREATE_REQUEST:
            return { loading: true };
        case PLACE_CREATE_SUCCESS:
            return { loading: false, success: true, place: action.payload };
        case PLACE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PLACE_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const placeUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_UPDATE_REQUEST:
            return { loading: true };
        case PLACE_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case PLACE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PLACE_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const placeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_DELETE_REQUEST:
            return { loading: true };
        case PLACE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PLACE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case PLACE_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const placeCertificateCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_CERTIFICATE_CREATE_REQUEST:
            return { loading: true };
        case PLACE_CERTIFICATE_CREATE_SUCCESS:
            return { loading: false, success: true, certificate: action.payload };
        case PLACE_CERTIFICATE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PLACE_CERTIFICATE_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

