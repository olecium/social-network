import React from "react";
import Profile from "./Profile/Profile";
import {addPost, addNewPostText, setUserProfile} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import * as axios from "axios";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) //${this.props.userId}
        .then(response => { 
            this.props.setUserProfile(response.data);
        });
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
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


export default connect(mapStateToProps,{addPost, addNewPostText, setUserProfile})(ProfileContainer);
