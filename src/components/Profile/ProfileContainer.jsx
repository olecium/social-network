import React from "react";
import Profile from "./Profile/Profile";
import {addPost, addNewPostText, setProfile} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 6042;
        }

        this.props.setProfile(userId);
    }
    render(){
        
        if(!this.props.isAuth) return <Redirect to="/login" />
        return (
            <Profile {...this.props} /*profile={this.props.profile}*/ />
        );
    };
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let URLDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps,{addPost, addNewPostText, setProfile})(URLDataContainerComponent);
