import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {loadUsers_AC, follow_AC, unfollow_AC } from "./../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (users) => {
            dispatch(loadUsers_AC(users));
        },
        followUser: (userID) => {
            dispatch(follow_AC(userID));
        },
        unfollowUser: (userID) => {
            dispatch(unfollow_AC(userID));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;