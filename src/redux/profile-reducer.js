import photo from "../images/photo.png";

const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';
const ADD_POST = 'ADD_POST';

// INITIAL STATE
let initialState = {
    posts: [
        {
            id: 1,
            photo: `${photo}`,
            text: "It was a long day, but I'm happy to announce that I've got a job!",
            likes: 235
        },
        {id: 2, photo: `${photo}`, text: "What about an interview?", likes: 233}
    ],
    newPostText: "Hello"
};

// REDUCER
const profileReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_POST:             
            let newPost = {
                id: 3,
                photo: `${photo}`,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        
        case UPDATE_POST_MESSAGE: 
            state.newPostText = action.newText;
            return state;

        default: 
            return state;
    }
}

export default profileReducer;

// ACTION CREATORS
export const addPost_actionCreator = () => ({type: ADD_POST});

export const addNewPostText_actionCreator = (message) => {
    let action = {type: UPDATE_POST_MESSAGE, newText: message};
    return action;
}