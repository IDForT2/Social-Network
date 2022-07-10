import React from "react";
import {newPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(newPostCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostTextCreator={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer