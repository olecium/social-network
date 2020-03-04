import { authAPI } from "./../api/api";
import { stopSubmit } from "redux-form";
import { securityAPI } from '../api/api';

// INITIAL STATE
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS';

// REDUCER
const authReducer = (state = initialState, action) => {
   
    switch(action.type){
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: 
            return state;
    }
}

export default authReducer;

// ACTION CREATORS
export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}
});
export const getCaptchaSuccess = (captchaUrl) => (
    {type: GET_CAPTCHA_SUCCESS, payload: {captchaUrl}
});

// THUNK
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();
    
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        const isAuth = true;
        dispatch(setAuthUserData(id, email, login, isAuth));
    }
}

export const userLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.authLogin(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }

        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Common error";
        let action = stopSubmit("login", {_error: errorMessage});        
        dispatch(action);
    }
}
export const userLogout = () => async (dispatch) => {
    let response = await authAPI.authLogout();
   
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    } 
}

export const getCaptcha = () => async (dispatch) => {   
    let response = await securityAPI.getCaptcha();
    dispatch(getCaptchaSuccess(response.url));
}