import photo from "../images/photo.png";
import { profileAPI } from "./../api/api";

const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    newPostText: "",
    profile: null,
    status: ""
};

// REDUCER
const profileReducer = (state = initialState, action) => {

   
    switch(action.type){
        
        case ADD_POST: {      
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [ ...state.posts, {
                    id: 3,
                    photo: `${photo}`,
                    text: text,
                    likes: 0
                }]
            }; 
        }
        case UPDATE_POST_MESSAGE: {
            return {
                ...state,
                newPostText: action.newText
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
        default: 
            return state;
    }
}

export default profileReducer;

// ACTION CREATORS
export const addPost = () => ({type: ADD_POST});

export const addNewPostText = (message) => {
    let action = {type: UPDATE_POST_MESSAGE, newText: message};
    return action;
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// THUNK
export const setProfile = (userId) => {
    return( (dispatch) => {      
        profileAPI.getProfile(userId).then(data => { 
            dispatch(setUserProfile(data));
        });
    });
}

export const getStatus = (userId) => {
    return( (dispatch) => {      
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response));
        });
    });
}

export const updateStatus = (status) => {
    return( (dispatch) => {      
        profileAPI.updateStatus(status).then(response => { 
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    });
}