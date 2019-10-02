const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

let startState = {
    users: [
/*        {id: 0, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Sergey Yakovenko', followed: true, status: 'I\'m happy today', location: {country: 'Ukraine', city: 'Kropuvnuckiy'}},
        {id: 1, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Dmitriy Polishuck', followed: false, status: 'I\'m fine today', location: {country: 'Italy', city: 'Roma'}},
        {id: 2, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Roma Zagorskiy', followed: true, status: 'I want eat today', location: {country: 'Greece', city: 'Athens'}},
        {id: 3, urlPhoto: 'https://pbs.twimg.com/profile_images/552426642107166720/iaEkxjZG.jpeg', fullName: 'Igor Bagnuk', followed: false, status: 'I want sleep today', location: {country: 'Latvia', city: 'Riga'}}*/
    ],
    pageSize: 40,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false
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
        default:
            return state;
    }
};

export const followActionCreate = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowActionCreate = (userId) => ({type: UNFOLLOW, userId: userId });
export const setUsersActionCreate = (users) => ({type: SET_USERS, users: users });
export const setCurrentPageActionCreate = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUserCountActionCreate = (totalCount) =>({type: TOTAL_USERS_COUNT, totalCount});
export const toggleLoaderActionCreate = (isFetching) =>({type: TOGGLE_LOADER, isFetching});

export default usersReducer;
