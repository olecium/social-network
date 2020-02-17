import React from "react";
import css from "./AddPost.module.scss";

const AddPost = (props) => {

    const addPost = () => {
        props.onPostAdd();
    }

    const postChange = (e) => {
        let message = e.target.value;
        props.onPostChange(message);
    }

    return(
        <section className={css.add_post}>
            <h3>Add post</h3>
            <p>
                <textarea onChange={postChange} value={props.newPostText} name="usernews" id="usernews"></textarea>
            </p>
            <button type="submit" onClick={addPost}>Send</button>
        </section>
    );
}
export default AddPost;
