import React from "react";
import {newPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(newPostCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts
                    updateNewPostTextCreator={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer