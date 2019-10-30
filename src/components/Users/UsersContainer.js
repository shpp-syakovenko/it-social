import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsersCurrentPage, unfollow} from "../../redux/usersReducer";
import Preloader from "../elements/Preloader/Preloader";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component{

    componentDidMount() {
        const {currentPage,pageSize, getUsersCurrentPage} = this.props;
        getUsersCurrentPage(currentPage, pageSize);
    }

    onPageChange = (currentP) => {

        const {pageSize, getUsersCurrentPage} = this.props;
        getUsersCurrentPage(currentP, pageSize);

    };

    render(){
        const {follow, unfollow, users, pageSize, totalUsersCount, currentPage, isFetching, followingProgress} = this.props;


        return (
            <>
                {isFetching ? <Preloader/> : null }

                <Users pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       onPageChange={this.onPageChange}
                       currentPage={currentPage}
                       users={users}
                       unfollow={unfollow}
                       follow={follow}
                       followingProgress={followingProgress}
                />
            </>
        )
    }
}

// функция которая возвращает обьект пропсов которые будут переданы компоненту UsersContainer
/*const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
};*/

/* Развернутая запись функции которые передаем connect

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreate(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreate(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreate(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreate(currentPage));
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountActionCreate(totalCount));
        },
        toggleLoader: (toggleLoader) => {
            dispatch(toggleLoaderActionCreate(toggleLoader));
        }
    }
};
*/

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
};


export default connect(mapStateToProps, {
    // Connect сам подставляет функции с обьекта в dispatch
    follow, unfollow, getUsersCurrentPage
})(UsersContainer)
