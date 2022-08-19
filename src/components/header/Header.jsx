import React from 'react';
import style from './header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo" />

      <div className={style.wrapper}>
        <a href="" className={style.link}>Контакты</a>
        <button className={style.button}>Войти</button>
      </div>
    </div>
  );
}

export default Header;
