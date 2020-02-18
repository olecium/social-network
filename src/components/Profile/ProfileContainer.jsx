import Profile from "./Profile/Profile";
import {addPost_actionCreator, addNewPostText_actionCreator} from "../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostAdd: () => { 
            dispatch(addPost_actionCreator());
        },
        onPostChange: (message) => {
            dispatch(addNewPostText_actionCreator(message));
        }
    }
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;
