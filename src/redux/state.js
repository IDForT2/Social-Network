import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {
                id: 0,
                message: 'Hello!',
                likesCount: 15
            },
            {
                id: 1,
                message: 'How are you?',
                likesCount: 20
            }],
        newPostText: 'Type here'
    },

    dialogsPage: {
        dialogs: [
            {id: 0, name: 'Sashko', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 1, name: 'Vladislav', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 2, name: 'Aleksey', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 3, name: 'Ilya', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 4, name: 'Artem', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 5, name: 'Mikita', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}
        ],
        messages: [
            {id: 0, message: 'Hi everyone'},
            {id: 1, message: 'How is it going?'},
            {id: 2, message: 'What are you doing?'},
            {id: 3, message: 'Yo'}
        ],
        newMessageText: 'Type here'
    },

    sidebar: {

        friends: [
            {id: 0, name: 'Sashko', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 1, name: 'Vlad', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 2, name: 'Mikita', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        ]

    }

}

export let addPost = () => {
    let newPost = {
        id: 2,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "";
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export default state;