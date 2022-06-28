import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const setActive =({isActive}) => isActive ? classes.activeLink : classes.item;

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to = '/profile' className={setActive}> Profile </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' className={setActive}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' className={setActive}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' className={setActive}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar