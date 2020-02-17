import friendpic1 from "../images/friendpic1.jpg";
import friendpic2 from "../images/friendpic2.jpg";
import friendpic3 from "../images/friendpic3.jpg";

let initialState = {
    messages: [
                    {id: 1, date: "2nd Oct 13:42", from: "me", message: "Hi Helena! How are you?"},
                    {id: 2, date: "2nd Oct 13:42", from: "Helena", message: "Hi John! I'm good thank you. U?"},
                    {id: 3, date: "2nd Oct 13:43", from: "me", message: "Not too bad. Just a rainy day. Hoping for sunshine and sea."},
                    {id: 4, date: "2nd Oct 13:43", from: "Helena", message: "What place are you wondering about?"},
                ],
                    dialogs: [
                    {id: 1, name: "Maria", avatar: `${friendpic1}`},
                    {id: 2, name: "Anton", avatar: `${friendpic2}`},
                    {id: 3, name: "Helena", avatar: `${friendpic3}`, active: true}
                ]
};

const messagesReducer = (state = initialState, action) => {

    return state;
}

export default messagesReducer;