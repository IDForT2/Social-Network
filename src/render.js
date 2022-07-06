import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>
    );
}

rerenderEntireTree();