import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let startState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {id: userId, email, login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        usersAPI.authMe()
            .then(response => {
                const{id, email, login} = response.data.data;
                if(response.data.resultCode === 0){
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export default authReducer;
