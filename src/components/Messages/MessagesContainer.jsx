import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageTemplate from "./MessageTemplate/MessageTemplate";
import Messages from "./Messages/Messages";
import {addMessage_actionCreator, addNewMessageText_actionCreator} from "./../../redux/messages-reducer";
import StoreContext from "../../StoreContext";

const MessagesContainer = () => {

    
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagesPage;

                    let dialogsElements = state.dialogs.map( (d) => {
                        return(<DialogItem name={d.name} avatar={d.avatar} id={d.id} active={d.active}/>);
                    });
                    let messageElements = state.messages.map( (m) => {
                        return(<MessageTemplate id={m.id} date={m.date} from={m.from} message={m.message} />);
                    } );

                    const addMessage = () => {
                        store.dispatch(addMessage_actionCreator());
                    }

                    const addNewMessageText = (newMessage) => {
                        store.dispatch(addNewMessageText_actionCreator(newMessage));
                    }
        
                    return <Messages addMessage={addMessage} 
                                    addNewMessageText={addNewMessageText} 
                                    newMessageText={state.newMessageText} 
                                    dialogsElements={dialogsElements} 
                                    messageElements={messageElements}/>
                }
            }
        </StoreContext.Consumer>
    );
}
export default MessagesContainer;
