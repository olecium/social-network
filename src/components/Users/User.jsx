import React from "react";
import css from './Users.module.scss';
import usericon from "./../../images/usericon.png";
import {NavLink} from "react-router-dom";

const User = ({followingInProgress, follow, unfollow, user}) => {
    
    return(        
        <li key={user.id} className={css.user}>
            <NavLink to={`/profile/${user.id}`} >View Profile</NavLink>
            <div className={css.user_image__wrapper}>
                <p><img className={css.user_image} src={ user.photos.small != null ? user.photos.small :usericon} alt=""/></p>
                {
                    user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} 
                                className={`${css.user_follow__button} ${css.user_follow__button_active}`} 
                                onClick={ () => { unfollow(user.id); } }>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} 
                                className={css.user_follow__button}  
                                onClick={ () => { follow(user.id); } }>Follow</button>
                }
            </div>
            <div className={css.user_info}>
                <p className={css.user_name}>{user.name}</p>
                <p>{user.status}</p>
            {/*<p className={css.user_location}>{u.location.country}, {u.location.city}</p>*/}
            </div>
        </li>
    );
}

export default User;