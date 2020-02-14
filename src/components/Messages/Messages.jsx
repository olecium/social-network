import React from "react";
import css from './Messages.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageTemplate from "./MessageTemplate/MessageTemplate";

const Messages = (props) => {

    let dialogsElements = props.dialogs.map( (d) => {
        return(<DialogItem name={d.name} avatar={d.avatar} id={d.id} active={d.active}/>);
    });
    let messageElements = props.messages.map( (m) => {
        return(<MessageTemplate id={m.id} date={m.date} from={m.from} message={m.message} />);
    } );
    return(
        <section className={css.messages_wrapper}>
            <h1 className="primary_title">My Messages</h1>
            <div className={css.messages}>
                <nav className={css.dialogs}>
                    <ul className={css.dialogs_list}>
                        {dialogsElements}
                    </ul>
                </nav>
                <div className={css.friend_messages__wrapper}>
                    <div className={css.friend_messages}>
                        {messageElements}
                    </div>
                    <div className={css.add_message}>
                        <textarea className={css.add_message__box} name="message" id="" rows="10"></textarea>
                        <button className={css.add_message__button}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Messages;
