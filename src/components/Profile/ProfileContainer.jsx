import React from "react";
import Profile from "./Profile/Profile";
import {addPost, setProfile, updateStatus, getStatus, saveProfileInfo, savePhoto} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = this.props.userId;
            if(!userId){
                this.props.history.push("/login");
            }
        }

        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render(){
        return (
            <Profile {...this.props} 
                    isOwner={!this.props.match.params.userId}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
            />
        );
    };
}

let mapStateToProps = (state) => {
    
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{addPost, setProfile, updateStatus, getStatus, saveProfileInfo, savePhoto})
)(ProfileContainer);
