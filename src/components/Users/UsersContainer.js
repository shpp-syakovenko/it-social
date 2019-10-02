import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreate,
    setCurrentPageActionCreate, setTotalUserCountActionCreate,
    setUsersActionCreate, toggleLoaderActionCreate,
    unfollowActionCreate
} from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../elements/Preloader/Preloader";

class UsersContainer extends React.Component{

    componentDidMount() {
        const {setUsers,currentPage,pageSize,setTotalUserCount, toggleLoader} = this.props;
        toggleLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setTotalUserCount(response.data.totalCount);
                setUsers(response.data.items);
                toggleLoader(false);
            });
    }

    onPageChange = (currentP) => {
        const{setCurrentPage, setUsers, pageSize, toggleLoader } = this.props;
        toggleLoader(true);
        setCurrentPage(currentP);
        setUsers([]);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentP}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
                toggleLoader(false);
            });
    };

    render(){
        const {follow, unfollow, users, pageSize, totalUsersCount, currentPage, isFetching} = this.props;
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
                />
             </>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
