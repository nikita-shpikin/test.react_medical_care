import React, { useContext } from 'react';
import { AuthorizationContext } from '../context/context';
import { Outlet, Link } from 'react-router-dom';
import style from './header.module.css';
import logo from '../../assets/logo.svg';

const Header = ({ setOpenModal }) => {
  const { isAuth, setIsAuth, goOut } = useContext(AuthorizationContext);

  return (
    <div className='container'>
      <div className={style.header}>
        <Link to='/'> <img src={logo} alt="logo" /> </Link>
        <div className={style.wrapper}>

          <Link to='contacts' className={style.link}>Контакты</Link>
          {isAuth
            ? <button className={style.button} onClick={goOut}>Выйти</button>
            : <button className={style.button} onClick={() => setOpenModal(true)}>Войти</button>
          }
        </div>
      </div>

      <Outlet />
    </div >
  );
}

export default Header;
