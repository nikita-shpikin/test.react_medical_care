import React, { useContext, useState } from 'react';
import { AuthorizationContext } from '../context/context';
import style from './modal.module.css';
import json from '../../users.json';

const Modal = ({ openModal, setOpenModal }) => {
  const { isAuth, setIsAuth } = useContext(AuthorizationContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginValid, setLoginValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [loginValue, setLoginValue] = useState('Длина логина должна быть больше 8 символов');
  const [passwordValue, setPasswordValue] = useState('Длина пароля должна быть больше 6 символов');

  const submit = () => {
    if (login === json.users[0].login && password === json.users[0].password) {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
      setOpenModal(false);
      setPasswordValid(false);
      setLoginValid(false);
    } else if (login.length < 8 && password.length < 6) {
      setLoginValid(true);
      setPasswordValid(true);
    } else if (login.length < 8) {
      setLoginValid(true);
    } else if (password.length < 6) {
      setPasswordValid(true);
    } else if (login !== json.users[0].login) {
      setLoginValue('Не правильный логин');
      setLoginValid(true);
    } else {
      setPasswordValue('Не правильный пароль');
      setPasswordValid(true);
    }
  }

  return (
    <div className={openModal ? (style.modal + ' ' + style.open) : style.modal} onClick={() => setOpenModal(false)}>
      <div
        className={style.mocalContent}
        onClick={e => e.stopPropagation()}
      >
        {loginValid && <div style={{ color: 'red' }}>{loginValue}</div>}
        <input
          type="text"
          placeholder='логин'
          className={style.input}
          onChange={e => setLogin(e.target.value)}
        />
        {passwordValid && <div style={{ color: 'red' }}>{passwordValue}</div>}
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
