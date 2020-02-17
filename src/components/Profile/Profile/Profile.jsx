import React from "react";
import photoWebp from "../../../images/photo.webp";
import photo from "../../../images/photo.png";
import MyPosts from "../MyPosts/MyPosts";
import AddPost from "./../AddPost/AddPost";
import css from "./Profile.module.scss";

const Profile = (props) => {
    return(
        <section className="userInfo">
            <h1>Profile</h1>
            <section className={css.profile}>
                <span className={css.profile__picture}>
                    <picture>
                      <source type="image/webp" srcSet={photoWebp} />
                      <img className={css.profile__picture_img} src={photo} alt="Profile pic ture"/>
                    </picture>
                </span>
                <div className={css.profile__info}>
                    <h2>John Dole</h2>
                    <p>Date of birth: 2 Jan</p>
                    <p>City: Minsk</p>
                    <p>Interests: photography, video, cats</p>
                </div>
            </section>

            <AddPost newPostText={props.newPostText} dispatch={props.dispatch} onPostAdd={props.onPostAdd} onPostChange={props.onPostChange} />
            <MyPosts posts={props.posts}/>
        </section>
    );
}
export default Profile;
