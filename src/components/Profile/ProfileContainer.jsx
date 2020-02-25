import React from "react";
import Profile from "./Profile/Profile";
import {addPost, addNewPostText, setProfile, updateStatus, getStatus} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = this.props.userId;
        }

        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }
    render(){
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    };
}

let mapStateToProps = (state) => {
    
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{addPost, addNewPostText, setProfile, updateStatus, getStatus})
)(ProfileContainer);
