import React from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.css';
import heart from '../../assets/heart.svg';
import notebook from '../../assets/notebook.svg';
import stetoskop from '../../assets/stetoskop.svg';
import Modal from '../../components/modal/Modal.jsx';

const Main = ({ openModal, setOpenModal }) => {

  return (
    <div className={style.main}>
      <h1 className={style.title}>Место для получения медицинской помощи</h1>
      <div className={style.wrapper}>
        <button className={style.button} onClick={() => setOpenModal(true)}> Войти </button>
        <Link to='/contacts' className={style.button}>Контакты </Link>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <img src={heart} alt="heart" />
          <h2 className={style.cardTitle}>Экстренный Случай</h2>
          <p className={style.text}>Рыба текст</p>
        </div>
        <div className={style.card}>
          <img src={stetoskop} alt="stetoskop" />
          <h2 className={style.cardTitle}>Экстренный Случай</h2>
          <p className={style.text}>Рыба текст</p>
        </div>
        <div className={style.card}>
          <img src={notebook} alt="notebook" />
          <h2 className={style.cardTitle}>Лечение рака</h2>
          <p className={style.text}>Рыба текст</p>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default Main;
