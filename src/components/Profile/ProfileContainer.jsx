import React from "react";
import Profile from "./Profile/Profile";
import {addPost_actionCreator, addNewPostText_actionCreator} from "../../redux/profile-reducer";

const ProfileContainer = (props) => {

    let state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPost_actionCreator());
    }

    const postChange = (message) => {
        props.store.dispatch(addNewPostText_actionCreator(message));
    }

    return(
        <Profile state={state} dispatch={props.store.dispatch} newPostText={state.newPostText} posts={state.posts} onPostAdd={addPost} onPostChange={postChange}/>
    );
}
export default ProfileContainer;
