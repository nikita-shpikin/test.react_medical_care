import React from 'react';
import style from './modal.module.css';

const Modal = ({ openModal, setOpenModal }) => {
  return (
    <div className={openModal ? (style.modal + ' ' + style.open) : style.modal} onClick={() => setOpenModal(false)}>
      <div className={style.mocalContent} onClick={e => e.stopPropagation()}>
        <input type="text" placeholder='логин' />
        <input type="text" placeholder='пароль' />
      </div>
    </div >
  );
}

export default Modal;
