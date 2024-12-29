import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home'
import './index.css';
import Dashboard from './assets/Pages/Dashboard/Dashboard';

const App = () => {
    
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App

