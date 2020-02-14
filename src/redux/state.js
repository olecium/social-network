import friendpic1 from "../images/friendpic1.jpg";
import friendpic2 from "../images/friendpic2.jpg";
import friendpic3 from "../images/friendpic3.jpg";
import photo from "../images/photo.png";

let renderLayout = () => {
    console.log('state');
}
let state = {
    messagesPage: {
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
    },
    profilePage: {
            posts: [
                {
                    id: 1,
                    photo: `${photo}`,
                    text: "It was a long day, but I'm happy to announce that I've got a job!",
                    likes: 235
                },
                {id: 2, photo: `${photo}`, text: "What about an interview?", likes: 233}
            ],
            newPostText: "Hello"
    },
    sidebar: {
        nav: [
            {id: 1, title: "Messages", link: "/messages"},
            {id: 2, title: "News", link: "/news"},
            {id: 3, title: "Music", link: "/music"}
        ],
        friendList: [
            {id: 1, name: 'Vasya', surname: 'Pupkin'},
            {id: 2, name: 'Kate', surname: 'Milkin'},
            {id: 3, name: 'Lola', surname: 'Judren'},
            {id: 5, name: 'Mira', surname: 'Numk'},
            {id: 6, name: 'Valery', surname: 'Binky'}
        ]
    }
}
export default state;

export const addPost = (message) => {
    let newPost = {
        id: 3,
        photo: `${photo}`,
        text: message,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    renderLayout(state);
}

export const updatePostMessage = (newText) => {
    let message = e.target.value;
    addPost(message);
}

export const subscriber = (observer) => {
    renderLayout = observer;
}

