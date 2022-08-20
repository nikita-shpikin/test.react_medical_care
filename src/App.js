import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import './style.css';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Header />} >
        <Route index element={<Main />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes >
  );
}

export default App;
