import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post message='Hello!' likes_counter='15'/>
                <Post message='How are you?' likes_counter='20'/>
            </div>
        </div>
)
}

export default MyPosts