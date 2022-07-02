import classes from "../Navbar.module.css";

const FriendsItem = (props) => {

    return (<div>
            <div className={classes.friendsItem}>
                <img src={props.img}/>
                <div>{props.name}</div>
            </div>
        </div>

    )
}

export default FriendsItem