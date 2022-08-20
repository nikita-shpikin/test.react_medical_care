import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import './style.css';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Routes>
      <Route path='/*' element={<Header openModal={openModal} setOpenModal={setOpenModal} />} >
        <Route index element={<Main openModal={openModal} setOpenModal={setOpenModal} />} />
        <Route path='contacts' element={<Contacts openModal={openModal} setOpenModal={setOpenModal} />} />
      </Route>
    </Routes >
  );
}

export default App;
