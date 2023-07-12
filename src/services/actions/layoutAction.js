import axios from "axios";

import {
    GET_LAYOUT_REQUEST,
    GET_LAYOUT_SUCCESS,
    GET_LAYOUT_FAILED
} from "../constants/layoutConstant";

// action for fetch layouts data
export const getAllLayouts = () => async (dispatch) => {
    dispatch({
        type: GET_LAYOUT_REQUEST
    });
    try {
        const res = await axios.get("https://layout.layoutdesign.io/api/version_1/layouts?&per_page=10");
        dispatch({
            type: GET_LAYOUT_SUCCESS,
            payload: res.data.data
        });
    }
    catch (err) {
        dispatch({
            type: GET_LAYOUT_FAILED,
            payload: err.message
        })
    }
}