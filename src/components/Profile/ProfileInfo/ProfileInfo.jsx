import React, { useState } from "react";
import photo from "./../../../images/photo.png";
import css from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import ProfileData from "./ProfileData";
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";


const ProfileInfo = ({profile, isOwner, status, updateStatus, saveProfileInfo, savePhoto}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profile){
        return <Preloader/>
    }
    let picture = profile.photos.large ? profile.photos.large : photo;

    const activateEditMode = () => {
        setEditMode(true);
    }
    const onSubmit = (formData) => {
        saveProfileInfo(formData).then(
            () => {
                setEditMode(false);
            }
        );    
    }

    const onMainPhotoSelected = (e) => {
        let file = e.target.files;
        if (file.length){
            savePhoto(file[0]);
        }
    }
    return (
        <>
            <h1>Profile</h1>
            <section className={css.profile}>
                <div>
                    <span className={css.profile__picture}>
                        <img className={css.profile__picture_img} src={picture} alt="Profile pic ture"/>
                    </span>
                    {
                        isOwner && <input type="file" onChange={onMainPhotoSelected} />
                    }
                </div>
                { 
                    editMode 
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
                    : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} activateEditMode={activateEditMode} />
                }
                
            </section>
        </>
    );
}
 
export default ProfileInfo;