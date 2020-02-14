import React from "react";
import css from "./AddPost.module.scss";

const AddPost = () => {
    return(
        <section className={css.add_post}>
            <h3>Add post</h3>
            <p>
                <textarea name="usernews" id="usernews" cols="70" rows="3"></textarea>
            </p>
            <button type="submit">Send</button>
        </section>
    );
}
export default AddPost;
