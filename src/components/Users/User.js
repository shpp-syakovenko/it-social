import React from 'react';
import s from './users.module.css';
import avatar from '../../assets/images/avatar.jpeg'
import {NavLink} from "react-router-dom";

const User = ({user, followingProgress, unfollow, follow}) => {
  return(
    <div key={user.id} className={s.user}>
      <div className={s.avatar}>
        <NavLink to={'profile/' + user.id}>
          <img src={user.photos.small !== null ? user.photos.small : avatar} alt="avatar"/>
        </NavLink>
        {user.followed
          ? <button disabled={followingProgress.some(id => id === user.id)} // some - если бы хотябы один id есть в массиве возвр. true
                    onClick={() => unfollow(user.id)}>
            unfollow</button>
          : <button disabled={followingProgress.some(id => id === user.id)}
                    onClick={() => follow(user.id)}>
            follow</button>
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
};

export default User;
