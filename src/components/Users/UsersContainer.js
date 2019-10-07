import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsers, toggleFollowingProgress, unfollow} from "../../redux/usersReducer";
import Preloader from "../elements/Preloader/Preloader";

class UsersContainer extends React.Component{

    componentDidMount() {
        const {currentPage,pageSize, getUsers} = this.props;
        getUsers(currentPage, pageSize);
    }

    onPageChange = (currentP) => {

        const {pageSize, getUsers} = this.props;
        getUsers(currentP, pageSize);

    };

    render(){
        const {follow, unfollow, users, pageSize, totalUsersCount, currentPage, isFetching, toggleFollowingProgress, followingProgress} = this.props;
        let pageCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];

        for(let i = 1; i <= pageCount; i++){
            pages.push(i);
        }

        return (
            <>
                {isFetching ? <Preloader/> : null }

                <Users pages={pages}
                       onPageChange={this.onPageChange}
                       currentPage={currentPage}
                       users={users}
                       unfollow={unfollow}
                       follow={follow}
                       toggleFollowingProgress={toggleFollowingProgress}
                       followingProgress={followingProgress}
                />
            </>
        )
    }
}

// функция которая возвращает обьект пропсов которые будут переданы компоненту UsersContainer
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
};

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


export default connect(mapStateToProps, {
    // Connect сам подставляет функции с обьекта в dispatch
    follow, unfollow, toggleFollowingProgress, getUsers
})(UsersContainer)
