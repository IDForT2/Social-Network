const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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

    profile: null
};

const profileReducer = (state= initialState, action) => {
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

export const updateNewPostTextCreator = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, newText: text});
}

export default profileReducer;