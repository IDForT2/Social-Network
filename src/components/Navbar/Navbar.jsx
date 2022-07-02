import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";

const setActive =({isActive}) => isActive ? classes.activeLink : classes.item;

const Navbar = (props) => {

    let friendsElements = props.state.friends.map (f => <FriendsItem name={f.name} id={f.id}  img={f.img}/> );

    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to = '/profile' className={setActive}> Profile </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs/*' className={setActive}>Messages</NavLink>
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
        <div className={classes.item}>
            <NavLink to='/friends' className={setActive}>Friends</NavLink>
           {<div>
                {friendsElements}
            </div>}
        </div>
    </nav>
}

export default Navbar