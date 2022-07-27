import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControls";

const MyPosts = React.memo(props => {
    console.log("Hey");
    let postsElements =
        props.posts.map((post, index) => <Post message={post.message} likes_count={post.likesCount}
                                               key={index}/>)

    let newPostElement = React.createRef();

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

let maxLength = maxLengthCreator(50)

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newPostBody" placeholder='Enter new post' validate={[required, maxLength]}/>
            </div>
            <div>
                <button>New Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'AddPostForm'
})(AddPostForm);

export default MyPosts