import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}
export default Message;