import React from "react";
import photoWebp from "../../../images/photo.webp";
import photo from "../../../images/photo.png";
import css from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <>
            <h1>Profile</h1>
            <section className={css.profile}>
                <span className={css.profile__picture}>
                    <picture>
                      <source type="image/webp" srcSet={photoWebp} />
                      <img className={css.profile__picture_img} src={photo} alt="Profile pic ture"/>
                    </picture>
                </span>
                <div className={css.profile__info}>
                    <h2>{/*console.log(props)*/}{ props.profile.fullName}</h2>
                    <p>Date of birth: 2 Jan</p>
                    <p>City: Minsk</p>
                    <p>Interests: {props.aboutMe}</p>
                </div>
            </section>
        </>
    );
}
export default ProfileInfo;