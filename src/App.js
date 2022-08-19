import React from 'react';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import './style.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
