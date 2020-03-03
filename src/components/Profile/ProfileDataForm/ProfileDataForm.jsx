import React from "react";
import css from "./../ProfileInfo/ProfileInfo.module.scss";
//import ProfileContact from "../ProfileInfo/ProfileContact";
import { CreateFieldWithLabel, Input, Textarea } from "../../common/FormControls/FormControls";
import { reduxForm } from "redux-form";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return(    
        <div className={css.profile__info}>
            <h1>Profile Edit</h1>
            { error && 
                <div className={css.form_error}>{error}</div>
            }
            <form onSubmit={handleSubmit}>
                { CreateFieldWithLabel("Full name", "fullName", Input, undefined, {type: "text" }, "") }
                { CreateFieldWithLabel("Interests", "aboutMe", Input, undefined, {type: "text" }, "") }
                { CreateFieldWithLabel("Looking for a job", "lookingForAJob", Input, undefined, {type: "checkbox" }, "") }
                { CreateFieldWithLabel("My professional skills", "lookingForAJobDescription", Textarea, undefined, {}, "") }
                
                <p><b>Contacts:</b></p>
                    {                        
                        Object.keys(profile.contacts).map( key => {
                            return <div key={key}>
                                        {CreateFieldWithLabel(key, "contacts."+key, Input, undefined, {type: "text" }, "")}
                                    </div>
                        })                        
                    }
                
                <button>Save</button>
            </form>
        </div>
    )
}
const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);
export default ProfileDataReduxForm;