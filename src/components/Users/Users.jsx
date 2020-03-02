import React from "react";
import css from './Users.module.scss';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                currentPage, 
                totalUsersCount, 
                onPageChange, 
                pageSize, 
                followingInProgress, 
                follow, 
                unfollow,
                users
            }) => {
    
    return(
        <section className={css.users}>
            <Paginator  currentPage={currentPage} 
                        pageSize={pageSize}
                        totalItemsCount={totalUsersCount}
                        onPageChange={onPageChange}/>
            <ul className={css.users_list}>
            {
                users.map(user => <User key={user.id}
                                        followingInProgress={followingInProgress} 
                                        follow={follow} 
                                        unfollow={unfollow}
                                        user={user}
                                  />
                )
            }
            </ul>
            <button className={css.btn}>Load more</button>
        </section>    
    );
}

export default Users;