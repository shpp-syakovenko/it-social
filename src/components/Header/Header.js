import React from 'react';
import logo from '../../assets/images/logo.png';
import header from './header.module.css';

const Header = () => {
  return (
      <div className={header.header}>
          <img src={logo} alt="logo"/>
      </div>
    );
};

export default Header;