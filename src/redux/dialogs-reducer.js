const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_MESSAGE:
            return  {
                ...state,
                newMessageText: action.newText
            };
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return  {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 4, message: text}]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return ({
        type: ADD_MESSAGE
    })
};

export const updateNewPostMessageActionCreator = (text) => {
    return ({type: UPDATE_NEW_POST_MESSAGE, newText: text});
}

export default dialogsReducer;