import photo from "../images/photo.png";
import { profileAPI } from "./../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

// INITIAL STATE
let initialState = {
    posts: [
        {
            id: 1,
            photo: `${photo}`,
            text: "It was a long day, but I'm happy to announce that I've got a job!",
            likes: 235
        },
        {
            id: 2, 
            photo: `${photo}`, 
            text: "What about an interview?", 
            likes: 233
        }
    ],
    profile: null,
    status: ""
};

// REDUCER
const profileReducer = (state = initialState, action) => {   
    switch(action.type){        
        case ADD_POST: {      
            return {
                ...state,
                newPostText: '',
                posts: [ ...state.posts, {
                    id: 3,
                    photo: `${photo}`,
                    text: action.text,
                    likes: 0
                }]
            }; 
        }      
        case DELETE_POST: {      
            return {
                ...state,
                posts: [ ...state.posts.filter(p => p.id !== action.postId)]
            }; 
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            };
        }
        default: 
            return state;
    }
}

export default profileReducer;

// ACTION CREATORS

export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO_SUCCESS, photo});

// THUNK
export const setProfile = (userId) => async (dispatch) => {      
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {      
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {      
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {      
    let response = await profileAPI.updatePhoto(file);
    if(response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const saveProfileInfo = (profile) => async (dispatch, getState) => {  
    const userId = getState().auth.userId;
    const response = await profileAPI.updateProfileData(profile);
    if(response.resultCode === 0) {
        dispatch(setProfile(userId));
    } else {
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Common error";
        let action = stopSubmit("editProfile", {_error: errorMessage});
        //let action = stopSubmit("editProfile", {"contacts": { "facebook": errorMessage } });
        dispatch(action);
        return Promise.reject(errorMessage);
    }
}