import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

let startState = {
    users: [
/*        {id: 0, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Sergey Yakovenko', followed: true, status: 'I\'m happy today', location: {country: 'Ukraine', city: 'Kropuvnuckiy'}},
        {id: 1, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Dmitriy Polishuck', followed: false, status: 'I\'m fine today', location: {country: 'Italy', city: 'Roma'}},
        {id: 2, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Roma Zagorskiy', followed: true, status: 'I want eat today', location: {country: 'Greece', city: 'Athens'}},
        {id: 3, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Igor Bagnuk', followed: false, status: 'I want sleep today', location: {country: 'Latvia', city: 'Riga'}}*/
    ],
    pageSize: 50,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const usersReducer = (state = startState, action) => {

    switch (action.type) {

        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case  TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount };
        case  TOGGLE_LOADER:
            return {...state, isFetching: action.isFetching };
        case  FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId] // Добавляем новый id (Подписываемся)
                : state.followingProgress.filter(id => id !== action.userId) // //Удаляем Id (отписываемся): функция filter копирует все id кроме того что нам пришел

            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUserCount = (totalCount) =>({type: TOTAL_USERS_COUNT, totalCount});
export const toggleLoader = (isFetching) =>({type: TOGGLE_LOADER, isFetching});
export const toggleFollowingProgress = (isFetching, userId) =>({type: FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleLoader(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(setTotalUserCount(data.totalCount));
            dispatch(setUsers(data.items));
            dispatch(toggleLoader(false));
        });
    }
};

export const unfollow = (userId) => { // кнопка отписаться
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export const follow = (userId) => { // кнопка подписаться
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export default usersReducer;
