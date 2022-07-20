import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: 0,
            message: 'Hello!',
            likesCount: 15
        },
        {
            id: 1,
            message: 'How are you?',
            likesCount: 20
        }],

    newPostText: 'Type here',

    profile: null,

    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = {
                id: 2,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: "",
                posts: [newPost, ...state.posts]
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const newPostCreator = () => {

    return ({type: ADD_POST});
}

export const setUserProfile = (profile) => {

    return ({type: SET_USER_PROFILE, profile});
}

export const setStatus = (status) => {

    return ({type: SET_STATUS, status});
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export const updateNewPostTextCreator = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, newText: text});
}

export default profileReducer;