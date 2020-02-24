import React from "react";
import css from './Messages.module.scss';
import { Redirect } from "react-router-dom";

const Messages = (props) => {

    const onMessageChange = (e) => {
        let message = e.target.value;
        props.addNewMessageText(message);
    }

    const onMessageSend = (e) => {
        let message = e.target.value;
        props.addMessage(message);
    }

    if(!props.isAuth) { return <Redirect to="/login" />}

    return(
        <section className={css.messages_wrapper}>
            <h1 className="primary_title">My Messages</h1>
            <div className={css.messages}>
                <nav className={css.dialogs}>
                    <ul className={css.dialogs_list}>
                        {props.dialogsElements}
                    </ul>
                </nav>
                <div className={css.friend_messages__wrapper}>
                    <div className={css.friend_messages}>
                        {props.messageElements}
                    </div>
                    <div className={css.add_message}>
                        <textarea className={css.add_message__box} name="message" onChange={onMessageChange} value={props.newMessageText}></textarea>
                        <button className={css.add_message__button} onClick={onMessageSend}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Messages;
