import { authAPI } from "./../api/api";

// INITIAL STATE
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

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

        default: 
            return state;
    }
}

export default authReducer;

// ACTION CREATORS
export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});

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