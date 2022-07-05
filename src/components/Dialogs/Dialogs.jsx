import React, {useRef} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messege";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id}  img={d.img}/> );

    let messagesElements = props.state.messages.map(m => <Message message={m.message} /> )

    let  newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    };

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;