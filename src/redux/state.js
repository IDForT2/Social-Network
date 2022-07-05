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
            }]
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
        ]
    },

    sidebar: {

        friends: [
            {id: 0, name: 'Sashko', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 1, name: 'Vlad', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
            {id: 2, name: 'Mikita', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        ]

    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 2,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;