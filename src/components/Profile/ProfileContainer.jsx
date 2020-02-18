import React from "react";
import Profile from "./Profile/Profile";
import {addPost_actionCreator, addNewPostText_actionCreator} from "../../redux/profile-reducer";
import StoreContext from "../../StoreContext";

const ProfileContainer = () => {

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                                    
                    let state = store.getState().profilePage;

                    const addPost = () => {
                        store.dispatch(addPost_actionCreator());
                    }

                    const postChange = (message) => {
                        store.dispatch(addNewPostText_actionCreator(message));
                    }


                    return <Profile state={state} 
                                    dispatch={store.dispatch} 
                                    newPostText={state.newPostText} 
                                    posts={state.posts} 
                                    onPostAdd={addPost} 
                                    onPostChange={postChange}/>
                    
                }            
            }
        </StoreContext.Consumer>
    );
}
export default ProfileContainer;
