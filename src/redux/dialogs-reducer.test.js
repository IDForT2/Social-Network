import profileReducer, {newPostCreator} from "./profile-reducer";
import dialogsReducer, {addMessageActionCreator} from "./dialogs-reducer";

let state = {
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
};

it("length of messages should be incremented", () => {
    let action = addMessageActionCreator("Test");

    let newState = dialogsReducer(state,action);

    expect(newState.messages.length).toBe(5);
});