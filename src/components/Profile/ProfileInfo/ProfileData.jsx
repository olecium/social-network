import React from "react";
import ProfileContact from "./ProfileContact";
import css from "./ProfileInfo.module.scss";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileData = ({profile, status, updateStatus, isOwner, activateEditMode}) => {
    return(   
        <> 
            <div className={css.profile__info}>
                { isOwner && <button onClick={activateEditMode}>Edit profile</button> }
                <h2>{ profile.fullName}</h2>
                <p><b>Interests:</b> {profile.aboutMe}</p>               
                <p><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</p>
                { profile.lookingForAJob &&
                    <p><b>My professional skills:</b> {profile.lookingForAJobDescription}</p>
                }
                <p><b>Contacts:</b></p>
                    <ul>
                        {                        
                            Object.keys(profile.contacts).map( key => {
                                return <ProfileContact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                            })                        
                        }
                    </ul>   
                <ProfileStatus status={status} updateStatus={updateStatus} />          
            </div>
        </>
    )
}
export default ProfileData;