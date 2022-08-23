import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Authorization from './components/authorization/Authorization.jsx';
import { AuthorizationContext } from './components/context/context.js';
import './style.css';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthorizationContext.Provider value={{ isAuth, setIsAuth }}>
      <Routes>
        <Route path='/*' element={<Header setOpenModal={setOpenModal} />} >
          {isAuth ?
            < Route index element={<Authorization />} />
            :
            < Route index element={<Main openModal={openModal} setOpenModal={setOpenModal} />} />
          }
          <Route path='contacts' element={<Contacts openModal={openModal} setOpenModal={setOpenModal} />} />

        </Route>
      </Routes >
    </AuthorizationContext.Provider>
  );
}

export default App;
