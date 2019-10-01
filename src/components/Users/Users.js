import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import avatar from '../../assets/images/avatar.jpeg'


class Users extends React.Component {

    componentDidMount() {
        const {setUsers,currentPage,pageSize,setTotalUserCount} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setTotalUserCount(response.data.totalCount);
                setUsers(response.data.items);
            });
    }

    onPageChange = (currentP) => {
      const{setCurrentPage, setUsers, pageSize } = this.props;
      setCurrentPage(currentP);
        setUsers([]);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentP}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            });


    };

    render() {
        const {follow, unfollow, users, pageSize, totalUsersCount, currentPage} = this.props;
        let pageCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];

        for(let i = 1; i <= pageCount; i++){
            pages.push(i);
        }


        return (
            <div className={s.users}>
                <h2>Users</h2>
                <div className={s.pagination}>
                    {
                        pages.map(p =>
                                <span key={p} onClick={() => this.onPageChange(p)}
                                      className={currentPage === p ? s.activePage : null}>
                        {p}
                    </span>
                        )
                    }
                </div>

                {
                    users.map(user =>
                        <div key={user.id} className={s.user}>
                            <div className={s.avatar}>
                                <img src={user.photos.small !== null ? user.photos.small : avatar} alt="avatar"/>
                                {user.followed
                                    ? <button onClick={() => unfollow(user.id)}> unfollow</button>
                                    : <button onClick={() => follow(user.id)}> follow</button>
                                }
                            </div>
                            <div className={s.description}>
                                <div className={s.leftDesc}>
                                    <div className={s.fullName}>
                                        {user.name}
                                    </div>
                                    <div className={s.status}>
                                        {user.status}
                                    </div>
                                </div>
                                <div className={s.rightDesc}>
                                    <div className={s.country}>
                                        {'user.location.country'}
                                    </div>
                                    <div className={s.city}>
                                        {'user.location.city'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;
