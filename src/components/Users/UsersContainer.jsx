import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {loadUsers_AC, follow_AC, unfollow_AC, setPage_AC, setTotalUsersCount_AC } from "./../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (users) => {
            dispatch(loadUsers_AC(users));
        },
        setTotalUsersCount: (number) => {
            dispatch(setTotalUsersCount_AC(number));
        },
        followUser: (userID) => {
            dispatch(follow_AC(userID));
        },
        unfollowUser: (userID) => {
            dispatch(unfollow_AC(userID));
        },
        setPage: (pageNumber) => {
            dispatch(setPage_AC(pageNumber));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;