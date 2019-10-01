import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={s.side_bar}>
            <ul>
                <li><NavLink activeClassName={s.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink activeClassName={s.active} to='/dialogs'>Messages</NavLink></li>
                <li><NavLink activeClassName={s.active} to='/news'>News</NavLink></li>
                <li><NavLink activeClassName={s.active} to='/music'>Music</NavLink></li>
                <li><NavLink activeClassName={s.active} to='/settings'>Settings</NavLink></li>
                <li><NavLink activeClassName={s.active} to='/users'>Users</NavLink></li>
            </ul>
        </div>
    );
};

export default SideBar;
