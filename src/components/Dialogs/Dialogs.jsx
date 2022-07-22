import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messege";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMassageReduxForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Navigate to={"/login"}/>;

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div> {messagesElements} </div>
            </div>
            <AddMassageReduxForm onSubmit={addNewMessage}/>
        </div>

    )
}

export default Dialogs;