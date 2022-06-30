import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 0, message: 'Hello!', likesCount: 15},
        {id: 1, message: 'How are you?', likesCount: 20}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes_count={p.likesCount} />)

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