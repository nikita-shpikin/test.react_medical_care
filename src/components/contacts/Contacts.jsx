import React from 'react';
import Modal from '../modal/Modal.jsx';
import style from './contacts.module.css';

const Contacts = ({ openModal, setOpenModal }) => {
  return (
    <div>
      <h1 className={style.title}>Контакты</h1>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default Contacts;
