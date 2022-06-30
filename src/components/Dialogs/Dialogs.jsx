import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 0, name: 'Danil'},
        {id: 1, name: 'Vladislav'},
        {id: 2, name: 'Aleksey'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Nikita'}
    ]

    let messages = [
        {id: 0, message: 'Hi everyone'},
        {id: 1, message: 'How is it going?'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map (d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map(m => <Message message={m.message} /> )


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