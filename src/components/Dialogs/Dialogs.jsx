import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messege";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map (d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.messages.map(m => <Message message={m.message} /> )


    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;