import React, {useRef} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((post, index) => <Post message={post.message} likes_count={post.likesCount} key ={index} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost} >New Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts