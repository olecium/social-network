import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {loadUsers_AC, follow_AC, unfollow_AC, setPage_AC, setTotalUsersCount_AC } from "./../../redux/users-reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {
    
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
        return <Users   totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        onPageChange={this.onPageChange}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);