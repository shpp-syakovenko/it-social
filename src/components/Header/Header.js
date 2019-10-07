import React from 'react';
import logo from '../../assets/images/logo.png';
import header from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
  return (
      <div className={header.header}>
          <img src={logo} alt="logo"/>
          <div className={header.logoBlock}>
              {
                  isAuth ? login : <NavLink to={'/login'}>Login</NavLink>
              }
          </div>
      </div>
    );
};

export default Header;
