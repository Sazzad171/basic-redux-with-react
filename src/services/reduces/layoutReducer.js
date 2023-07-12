// import constants
import {
    GET_LAYOUT_REQUEST,
    GET_LAYOUT_SUCCESS,
    GET_LAYOUT_FAILED
} from '../constants/layoutConstant';

// initial state
const initialState = {
    layout: [],
    loading: false,
    error: false
}

// reducer function
const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAYOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LAYOUT_SUCCESS:
            return {
                layout: action.payload,
                loading: false
            }
        case GET_LAYOUT_FAILED:
            return {
                layout: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default layoutReducer;