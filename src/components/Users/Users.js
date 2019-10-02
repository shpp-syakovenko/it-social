import React from 'react';
import s from './users.module.css';
import avatar from '../../assets/images/avatar.jpeg'


const Users = ({pages, onPageChange, currentPage, users, unfollow, follow}) => {

    return (
        <div className={s.users}>
            <h2>Users</h2>
            <div className={s.pagination}>
                {
                    pages.map(p =>
                            <span key={p} onClick={() => onPageChange(p)}
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
};

export default Users;
