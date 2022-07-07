
let store = {
    _state: {

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

    },
    getState (){
        return this._state;
    },
    _callSubscriber (){

    },
    addPost () {
        let newPost = {
            id: 2,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }

}

export default store;