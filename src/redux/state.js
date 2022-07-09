import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;