import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.scss"

function MyPosts(props) {

    let posts = props.posts.map( (p) => {
        return(<Post photo={p.photo} text={p.text} likes={p.likes} />);
    } );

    return(
        <section className={css.my_posts}>
            <h3>My posts</h3>
            {posts}
        </section>
    );
}

export default MyPosts;
