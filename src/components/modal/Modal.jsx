import React, { useContext, useState } from 'react';
import { AuthorizationContext } from '../context/context';
import style from './modal.module.css';
import json from '../../users.json';

const Modal = ({ openModal, setOpenModal }) => {
  const { isAuth, setIsAuth } = useContext(AuthorizationContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (login === json.users[0].login && password === json.users[0].password) {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
      setOpenModal(false);
    } else {
      alert('нет!');
    }
  }

  return (
    <div className={openModal ? (style.modal + ' ' + style.open) : style.modal} onClick={() => setOpenModal(false)}>
      <div
        className={style.mocalContent}
        onClick={e => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder='логин'
          className={style.input}
          onChange={e => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder='пароль'
          className={style.input}
          onChange={e => setPassword(e.target.value)}
        />

        <button className={style.button} onClick={submit}>Войти</button>
      </div>
    </div >
  );
}

export default Modal;
