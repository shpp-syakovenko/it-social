import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS';

let startState = {
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
                postData: [
                    ...state.postData,
                    {id: state.postData.length, message: action.value, like: 10}
                ]
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
        case DELETE_POST:
            return {
                ...state,
               postData: state.postData.filter(post => post.id !== action.id)
            };
        case SAVE_AVATAR_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.avatar
                }
            };
        default:
            return state;
    }
};

export const addPostActionCreate = (value) => ({ type: ADD_POST, value });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePostActionCreate = (id) => ({type: DELETE_POST, id});
export const saveAvatarSuccess = (avatar) => ({type: SAVE_AVATAR_SUCCESS, avatar});

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
};

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
};

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
};

export const saveAvatar = (avatar) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(avatar);
        if (response.data.resultCode === 0) {
            dispatch(saveAvatarSuccess(response.data.data.photos));
        }
    }
};

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const profileId = getState().auth.id;
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(profileId));
        }else {
            // Общая ошибка для всей формы
            dispatch(stopSubmit("profileForm", {_error: response.data.messages[0]}));

            // response.data.messages[0] нужно разпарсить и вытащить концовку сообщения (как пример facebook)
            //dispatch(stopSubmit("profileForm", {"contacts":{"facebook": response.data.messages[0]}}));
            return Promise.reject(response.data.messages[0]);
        }
    }
};

export default profileReducer;
