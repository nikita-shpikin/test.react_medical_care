import React from 'react';
import style from './modal.module.css';

const Modal = ({ openModal, setOpenModal }) => {
  return (
    <div className={openModal ? (style.modal + ' ' + style.open) : style.modal} onClick={() => setOpenModal(false)}>
      <div className={style.mocalContent} onClick={e => e.stopPropagation()}>
        <input type="text" placeholder='логин' className={style.input} />
        <input type="text" placeholder='пароль' className={style.input} />
        <button className={style.button}>Войти</button>
      </div>
    </div >
  );
}

export default Modal;
