import React from "react";
import { Field } from "redux-form";
import css from './Messages.module.scss';

const MessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <Field className={css.add_message__box} name={"message"} component={"textarea"} />
            <button className={css.add_message__button}>Send</button>
        </form>
    )
}
export default MessageForm;