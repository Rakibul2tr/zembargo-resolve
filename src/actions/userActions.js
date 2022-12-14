import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

export const login = (subData, reset, navigate) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        

        const { data } = await axios.post('http://localhost:5000/api/user/login', subData, config);
        window.localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        if (data) {
            reset()
        }
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const logOut = () => async (dispatch) => {
    window.localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGIN_LOGOUT })
}

export const registerUser = (subData, picUrl, reset) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        const { data } = await axios.post('http://localhost:5000/api/users', {
            name: subData.name,
            email: subData.email,
            password: subData.password,
            pic: picUrl,
        }, config)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        if (data) {
            reset()
        }
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, payload: error?.response && error.response?.data?.message ?
                error.response.data.message : error.message,
        })
    }
}