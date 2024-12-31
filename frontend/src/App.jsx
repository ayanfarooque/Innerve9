import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home'
import './index.css';
import Dashboard from './assets/Pages/Dashboard/Dashboard';
import SearchLayout from './assets/Pages/Search/SearchLayout';
import Hospitaldashboard from './assets/Pages/Dashboard/Hospitaldashboard';

const App = () => {
    
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='search' element={<SearchLayout/>}/>
        <Route path="/hospital-dashboard" element={<Hospitaldashboard />} />
      </Routes>
    </>
  )
}

export default App

