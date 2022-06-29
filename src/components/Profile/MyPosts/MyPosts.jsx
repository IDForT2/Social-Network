import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hello!' likes_counter='15'/>
                <Post message='How are you?' likes_counter='20'/>
            </div>
        </div>
)
}

export default MyPosts