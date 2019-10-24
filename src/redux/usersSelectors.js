import {createSelector} from "reselect";

// Простой селектор
const getUsersSelector = (state) => {
  return state.usersPage.users
};

// Реселектор который завист от простого селектра getUsersSelector если в простом не чего не поменялось вернет тотже результат
// если поменялось выполнит сложную операцию
export const getUsers = createSelector(getUsersSelector,(users) => {
  return users.filter(u => true);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
};

export const getFollowingProgress = (state) => {
  return state.usersPage.followingProgress
};
