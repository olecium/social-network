import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import AddPost from "./../AddPost/AddPost";
import ProfileInfo from "./../ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <section className="userInfo">
            <ProfileInfo profile={props.profile} 
                        isOwner={props.isOwner} 
                        status={props.status} 
                        updateStatus={props.updateStatus}
                        saveProfileInfo={props.saveProfileInfo}
                        savePhoto={props.savePhoto}
            />
            <AddPost newPostText={props.newPostText} dispatch={props.dispatch} /*onPostChange={props.addNewPostText}*/ onPostAdd={props.addPost} />
            <MyPosts posts={props.posts}/>
        </section>
    );
}
export default Profile;
