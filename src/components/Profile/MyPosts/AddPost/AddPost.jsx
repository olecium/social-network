import React from "react";
import css from "./AddPost.module.scss";



const AddPost = (props) => {
    return(
        <section className={css.add_post}>
            <h3>Add post</h3>
            <p>
                <textarea onChange={props.updatePostMessage} value={props.message} name="usernews" id="usernews" cols="70" rows="3"></textarea>
            </p>
            <button type="submit" onClick={props.addPost}>Send</button>
        </section>
    );
}
export default AddPost;
