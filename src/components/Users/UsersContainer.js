import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreate,
    setCurrentPageActionCreate, setTotalUserCountActionCreate,
    setUsersActionCreate,
    unfollowActionCreate
} from "../../redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)
