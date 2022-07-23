import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png'/>

        <div className={classes.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to="/login">Login</NavLink> }
        </div>
    </header>
}

export default Header