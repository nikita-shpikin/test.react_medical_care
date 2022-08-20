import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from './header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className='container'>
      <div className={style.header}>
        <Link to='/'> <img src={logo} alt="logo" /> </Link>
        <div className={style.wrapper}>
          <Link to='contacts' className={style.link}>Контакты</Link>
          <button className={style.button}>Войти</button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Header;
