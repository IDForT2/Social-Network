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
        <div className={classes.dialog}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Danil' id='1'/>
                <DialogItem name='Vladislav' id='2'/>
                <DialogItem name='Aleksey' id='3'/>
                <DialogItem name='Ilya' id='4'/>
                <DialogItem name='Artem' id='5'/>
                <DialogItem name='Nikita' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message text='Hi everyone'/>
                <Message text='How is it going?'/>
                <Message text='What are you doing?'/>
                <Message text='Yo'/>
            </div>
        </div>

    )
}

export default Dialogs;