import React from 'react';
import logo from '../../assets/images/logo.png';
import header from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
  return (
      <div className={header.header}>
          <img src={logo} alt="logo"/>
          <div className={header.logoBlock}>
              {
                  isAuth
                    ? <div>{login} <button onClick={logout}>logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>
              }
          </div>
      </div>
    );
};

export default Header;
