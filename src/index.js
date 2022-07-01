import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {
        id: 0,
        message: 'Hello!',
        likesCount: 15
    },
    {
        id: 1,
        message: 'How are you?',
        likesCount: 20
    }]

let dialogs = [
    {id: 0, name: 'Danil'},
    {id: 1, name: 'Vladislav'},
    {id: 2, name: 'Aleksey'},
    {id: 3, name: 'Ilya'},
    {id: 4, name: 'Artem'},
    {id: 5, name: 'Nikita'}
]

let messages = [
    {id: 0, message: 'Hi everyone'},
    {id: 1, message: 'How is it going?'},
    {id: 2, message: 'What are you doing?'},
    {id: 3, message: 'Yo'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
