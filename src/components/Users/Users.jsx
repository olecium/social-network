import React from "react";
import css from './Users.module.scss';
import usericon from "./../../images/usericon.png";

const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    
    return(
        <section className={css.users}>
            <ul className={css.pagination}>
                {pages.map( p => {
                    return <li className={props.currentPage === p ? `${css.page} ${css.page__selected}` : css.page}>
                        <span onClick={() => {props.onPageChange(p)}}>{p}</span>
                    </li>
                } )}
                
            </ul>
            <ul class={css.users_list}>
            {
                props.users.map(u => {
                                                    
                    return(
                        <li key={u.id} className={css.user}>
                            <div className={css.user_image__wrapper}>
                                <p><img className={css.user_image} src={ u.photos.small != null ? u.photos.small :usericon} alt=""/></p>
                                {
                                    u.followed === 1 
                                    ? <button className={`${css.user_follow__button} ${css.user_follow__button_active}`} onClick={ () => { props.unfollowUser(u.id) } }>Unfollow</button>
                                    : <button className={css.user_follow__button}  onClick={ () => { props.followUser(u.id) } }>Follow</button>
                                }
                            </div>
                            <div className={css.user_info}>
                                <p className={css.user_name}>{u.name}</p>
                                <p>{u.status}</p>
                            {/*<p className={css.user_location}>{u.location.country}, {u.location.city}</p>*/}
                            </div>
                        </li>
                    );
                })
            }
            </ul>
            <button className={css.btn}>Load more</button>
        </section>    
    );
}

export default Users;