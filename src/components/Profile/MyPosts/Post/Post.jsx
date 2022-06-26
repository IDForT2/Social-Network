import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post