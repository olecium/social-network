import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {loadUsers, unfollowUser, followUser, setPage, setTotalUsersCount, setFetching } from "./../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.loadUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);            
            this.props.setFetching(false);
        });
    }
    onPageChange = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.loadUsers(response.data.items);          
            this.props.setFetching(false);
        });
    }

    render() {
        return <>
                    {this.props.isFetching ? <Preloader /> : null}
                    
                    <Users   totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                users={this.props.users}
                                followUser={this.props.followUser}
                                unfollowUser={this.props.unfollowUser}
                                onPageChange={this.onPageChange}
                                setFetching={this.props.setFetching}
                    />
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (users) => {
            dispatch(loadUsers_AC(users));
        },
        setTotalUsersCount: (number) => {
            dispatch(setTotalUsersCount_AC(number));
        },
        setTotalUsersCount: (userID) => {
            dispatch(follow_AC(userID));
        },
        unfollowUser: (userID) => {
            dispatch(unfollow_AC(userID));
        },
        setPage: (pageNumber) => {
            dispatch(setPage_AC(pageNumber));
        },
        setFetching: (isFetching) => {
            dispatch(setFetching_AC(isFetching));
        }
    }
}*/

export default connect(mapStateToProps, {loadUsers, setTotalUsersCount, setTotalUsersCount, unfollowUser, followUser, setPage, setFetching })(UsersContainer);