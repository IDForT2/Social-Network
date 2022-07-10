import React from "react";
import {addMessageActionCreator, updateNewPostMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewPostMessageActionCreator(text));
    }

    return (
        <Dialogs updateNewPostMessageActionCreator={onMessageChange}
                 addMessage={addMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
        />
    )
}

export default DialogsContainer