import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messege";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map (d => <DialogItem name={d.name} id={d.id}  img={d.img}/> );

    let messagesElements = props.messages.map(m => <Message message={m.message} /> )

    let  newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewPostMessageActionCreator(text);
    };

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                    value={props.newMessageText} className={classes.textarea}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;