import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {loadUsers, unfollowUser, followUser, setPage, setTotalUsersCount, setFetching } from "./../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { 
            this.props.loadUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);            
            this.props.setFetching(false);
        });
    }
    onPageChange = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => { 
            this.props.loadUsers(data.items);          
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

export default connect(mapStateToProps, {loadUsers, setTotalUsersCount, unfollowUser, followUser, setPage, setFetching })(UsersContainer);