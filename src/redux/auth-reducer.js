const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }
}

export const setAuthUserData = (userid, email, login, isFetching) => {
    return ({type: SET_USER_DATA, data: {userid, email, login, isFetching}});
}


export default authReducer;