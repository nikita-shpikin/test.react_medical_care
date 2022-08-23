import React, { useContext } from 'react';
import { AuthorizationContext } from '../context/context';
import style from './modal.module.css';

const Modal = ({ openModal, setOpenModal }) => {
  const { isAuth, setIsAuth } = useContext(AuthorizationContext);

  const submit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    setOpenModal(false);
  }

  return (
    <div className={openModal ? (style.modal + ' ' + style.open) : style.modal} onClick={() => setOpenModal(false)}>
      <div
        className={style.mocalContent}
        onClick={e => e.stopPropagation()}
      >
        <input type="text" placeholder='логин' className={style.input} />
        <input type="text" placeholder='пароль' className={style.input} />
        <button className={style.button} onClick={submit}>Войти</button>
      </div>
    </div >
  );
}

export default Modal;
