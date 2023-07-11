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
    error
}

// reducer function
const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAYOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;
        case GET_LAYOUT_SUCCESS:
            return {
                
            }
            break;
        case GET_LAYOUT_FAILED:
            return {

            }
            break;
        default:
            return state;
    }
}

export default layoutReducer;