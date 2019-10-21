import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let startState = {
    postText: '',
    postData: [
        {id: 0, message: 'Hello world!!!', like: 3},
        {id: 1, message: 'First post!', like: 7},
        {id: 2, message: 'Second post', like: 2}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = startState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postText: '',
                postData: [
                    ...state.postData,
                    {id: state.postData.length, message: state.postText, like: 10}
                ]
            };
        case UPDATE_POST:
            return {
                ...state,
                postText: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPostActionCreate = () => ({ type: ADD_POST });
export const updatePostTextActionCreate = (text) => ({type: UPDATE_POST, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
          .then(response => {
              dispatch(setStatus(response.data));
          });
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
          .then(response => {
              if(response.data.resultCode === 0){
                  dispatch(setStatus(status));
              }
          });
    }
};

export default profileReducer;
