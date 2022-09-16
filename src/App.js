import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;