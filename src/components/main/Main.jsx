import React from 'react';
import style from './main.module.css';
import heart from '../../assets/heart.svg';
import notebook from '../../assets/notebook.svg';
import stetoskop from '../../assets/stetoskop.svg';

const Main = () => {
  return (
    <div className={style.main}>
      <h1 className={style.title}>Место для получения медицинской помощи</h1>
      <div className={style.wrapper}>
        <button className={style.button}>Войти</button>
        <button className={style.button}>Контакты</button>
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
    </div>
  );
}

export default Main;
