import axios from "axios";
import { PAGE_LIST_FAIL, PAGE_LIST_REQUEST, PAGE_LIST_SUCCESS } from "../constants/pageConstants";

export const listNotes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PAGE_LIST_REQUEST,
        })
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,

            }
        };
        const { data } = await axios.get('http://localhost:5000/api/pages', config)

        dispatch({
            type: PAGE_LIST_SUCCESS,
            payload: data,
        });
    }


    catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: PAGE_LIST_FAIL, payload: message,
        })
    }
}