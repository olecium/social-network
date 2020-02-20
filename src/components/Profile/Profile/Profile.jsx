import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import AddPost from "./../AddPost/AddPost";
import ProfileInfo from "./../ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <section className="userInfo">
            <ProfileInfo profile={props.profile}/>
            <AddPost newPostText={props.newPostText} dispatch={props.dispatch} onPostAdd={props.addPost} onPostChange={props.addNewPostText} />
            <MyPosts posts={props.posts}/>
        </section>
    );
}
export default Profile;
