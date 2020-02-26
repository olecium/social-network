import { authAPI } from "./../api/api";

// INITIAL STATE
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_LOGIN_DATA = 'SET_AUTH_LOGIN_DATA';

// REDUCER
const authReducer = (state = initialState, action) => {
   
    switch(action.type){
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case SET_AUTH_LOGIN_DATA: {
            return {
                ...state,
                userId: action.userId,
                isAuth: true
            }
        }

        default: 
            return state;
    }
}

export default authReducer;

// ACTION CREATORS
export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const setAuthLoginData = (userId) => ({type: SET_AUTH_LOGIN_DATA, userId});

// THUNK
export const authoriseUser = () => {
    return ((dispatch) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    })
}

export const authoriseLogin = (email, password, rememberMe) => {
    return ((dispatch) => {
        authAPI.authLogin(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                let userId = response.data.data.userId;
                dispatch(setAuthLoginData(userId));
            } 
        });
    })
}