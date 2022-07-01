import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((post, index) => <Post message={post.message} likes_count={post.likesCount} key ={index} />)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts