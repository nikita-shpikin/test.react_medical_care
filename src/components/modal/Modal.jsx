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

  const [loginError, setLoginError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const submit = () => {

    if (login === json.users[0].login && password === json.users[0].password) {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
      setOpenModal(false);
    } else {
      if (login !== json.users[0].login) {
        setLoginError('не верный логин');
      }
      if (password !== json.users[0].password) {
        setPasswordError('не верный пароль');
      }
    }
  }

  const loginHandler = e => {
    setLogin(e.target.value);
    if (e.target.value.length < 8) {
      setLoginError('Длина лоигна не может быть меньше 8 символов');
      if (!e.target.value) {
        setLoginError('Логин не может быть пустым');
      }
    } else {
      setLoginError('')
    }
  }

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Длина пароля не может быть меньше 6 символов');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = e => {
    switch (e.target.name) {
      case 'логин':
        setLoginValid(true);
        break;
      case 'пароль':
        setPasswordValid(true);
        break;
    }
  }

  return (
    <div className={openModal ? (style.modal + ' ' + style.open) : style.modal} onClick={() => setOpenModal(false)}>
      <div className={style.mocalContent} onClick={e => e.stopPropagation()}>

        {(loginValid ?? loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
        <input
          value={login}
          onBlur={e => blurHandler(e)}
          name='логин'
          type="text"
          placeholder='логин'
          className={style.input}
          onChange={e => loginHandler(e)}
        />

        {(passwordValid ?? passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
        <input
          value={password}
          onBlur={e => blurHandler(e)}
          name='пароль'
          type="password"
          placeholder='пароль'
          className={style.input}
          onChange={e => passwordHandler(e)}
        />


        <button className={style.button} onClick={submit}>Войти</button>
      </div>
    </div >
  );
}

export default Modal;
