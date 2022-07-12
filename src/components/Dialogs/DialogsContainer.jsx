import React from "react";
import {addMessageActionCreator, updateNewPostMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewPostMessageActionCreator: (text) => {
            dispatch(updateNewPostMessageActionCreator(text));
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer