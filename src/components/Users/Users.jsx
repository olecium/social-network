import React from "react";
import css from './Users.module.scss';
import usericon from "./../../images/usericon.png";
import * as axios from "axios";

class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.loadUsers(response.data.items) ;
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChange = (pageNumber) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.loadUsers(response.data.items) 
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) pages.push(i);

        return  <section className={css.users}>
                    <ul className={css.pagination}>
                        {pages.map( p => {
                            return <li className={this.props.currentPage === p ? `${css.page} ${css.page__selected}` : css.page}>
                                <span onClick={() => {this.onPageChange(p)}}>{p}</span>
                            </li>
                        } )}
                        
                    </ul>
                    <ul class={css.users_list}>
                    {
                        this.props.users.map(u => {
                                                            
                            return(
                                <li key={u.id} className={css.user}>
                                    <div className={css.user_image__wrapper}>
                                        <p><img className={css.user_image} src={ u.photos.small != null ? u.photos.small :usericon} alt=""/></p>
                                        {
                                            u.followed === 1 
                                            ? <button className={`${css.user_follow__button} ${css.user_follow__button_active}`} onClick={ () => { this.props.unfollowUser(u.id) } }>Unfollow</button>
                                            : <button className={css.user_follow__button}  onClick={ () => { this.props.followUser(u.id) } }>Follow</button>
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
    }
}

export default Users;