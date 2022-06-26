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
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
)
}

export default MyPosts