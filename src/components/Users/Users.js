import React from 'react';
import s from './users.module.css';
//import Paginator from "../elements/Paginator/Paginator";
import User from "./User";
import Pagination from "react-js-pagination";


const Users = ({pageSize, totalUsersCount, onPageChange, currentPage, users, unfollow, follow, followingProgress}) => {

    return (
        <div className={s.users}>
            <h2>Users</h2>
          {/*<Paginator pageSize={pageSize}
                     totalUsersCount={totalUsersCount}
                     onPageChange={onPageChange}
                     currentPage={currentPage}
          />*/}
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={pageSize}
            totalItemsCount={totalUsersCount}
            pageRangeDisplayed={10}
            onChange={onPageChange}
            innerClass={s.pagin}
            activeClass={s.active}
          />

            {
                users.map(user =>
                  <User key={user.id}
                        user={user}
                        followingProgress={followingProgress}
                        unfollow={unfollow}
                        follow={follow}
                  />
                )
            }
        </div>
    )
};

export default Users;
