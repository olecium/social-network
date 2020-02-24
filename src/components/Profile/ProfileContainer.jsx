import React from "react";
import Profile from "./Profile/Profile";
import {addPost, addNewPostText, setProfile} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 6042;
        }

        this.props.setProfile(userId);
    }
    render(){
        return (
            <Profile {...this.props} /*profile={this.props.profile}*/ />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{addPost, addNewPostText, setProfile})
)(ProfileContainer);
