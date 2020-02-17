import React from "react";
import css from "./AddPost.module.scss";
import {addPost_actionCreator, addNewPostText_actionCreator} from "./../../../../redux/profile-reducer";

const AddPost = (props) => {

    let newPostElement = React.createRef();

    const addPost = () => {
        let action = {type: 'ADD_POST'};
        props.dispatch(addPost_actionCreator());
    }

    const onPostChange = (e) => {
        let message = e.target.value;
        props.dispatch(addNewPostText_actionCreator(message));
    }

    return(
        <section className={css.add_post}>
            <h3>Add post</h3>
            <p>
                <textarea onChange={onPostChange} value={props.newPostText} name="usernews" id="usernews"></textarea>
            </p>
            <button type="submit" onClick={addPost}>Send</button>
        </section>
    );
}
export default AddPost;
