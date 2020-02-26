import React from "react";
import { Field } from "redux-form";

const AddPostForm = (props) => {    

    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field name={"userpost"} component={"textarea"}/>
            </p>
            <button type="submit">Send</button>
        </form>
    )
}
export default AddPostForm;