import friendpic1 from "../images/friendpic1.jpg";
import friendpic2 from "../images/friendpic2.jpg";
import friendpic3 from "../images/friendpic3.jpg";

const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

// INITIAL STATE
let initialState = {
    messages: [
                {id: 1, date: "2nd Oct 13:42", from: "me", message: "Hi Helena! How are you?"},
                {id: 2, date: "2nd Oct 13:42", from: "Helena", message: "Hi John! I'm good thank you. U?"},
                {id: 3, date: "2nd Oct 13:43", from: "me", message: "Not too bad. Just a rainy day. Hoping for sunshine and sea."},
                {id: 4, date: "2nd Oct 13:43", from: "Helena", message: "What place are you wondering about?"},
            ],
    newMessageText: "",
    dialogs: [
                {id: 1, name: "Maria", avatar: `${friendpic1}`},
                {id: 2, name: "Anton", avatar: `${friendpic2}`},
                {id: 3, name: "Helena", avatar: `${friendpic3}`, active: true}
            ]
};

// REDUCER
const messagesReducer = (state = initialState, action) => {

    /*
    let stateCopy = {...state};
    stateCopy.messages = [...state.messages];
    */

    
    switch(action.type) {

        case NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        case ADD_MESSAGE: {
            let message = state.newMessageText;
            return {
                ...state,   
                newMessageText: "",            
                messages: [...state.messages, {
                    id: 5, 
                    date: "2nd Oct 13:42", 
                    from: "me", 
                    message: message
                }]
            };
        }
        default:
            return state;
    }
}

export default messagesReducer;

// ACTION CREATORS
export const addMessage_actionCreator = () => ({type: ADD_MESSAGE});

export const addNewMessageText_actionCreator = (message) => {
    let action = {type: NEW_MESSAGE_TEXT, newMessage: message };
    return action;
}