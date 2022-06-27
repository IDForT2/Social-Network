import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
            {props.message}
            <div>
                <span>Like {props.likes_counter}</span>
            </div>
        </div>

    )
}

export default Post