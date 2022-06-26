import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Alabama_Hills1-1200px.jpg'/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile