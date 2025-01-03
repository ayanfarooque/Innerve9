import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home'
import './index.css';
import Dashboard from './assets/Pages/Dashboard/Dashboard';
import SearchLayout from './assets/Pages/Search/SearchLayout';
import Hospitaldashboard from './assets/Pages/Dashboard/Hospitaldashboard';
import Beds from './assets/Comp/Tables/beds';
import Oxygencyl from './assets/Comp/Tables/Oxygencyl';
import Resources from './assets/Comp/Tables/Resources';
import Doctors from './assets/Comp/Tables/Doctors'

const App = () => {
    
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path="/hospital-dashboard" element={<Hospitaldashboard />} />
        <Route path='search' element={<SearchLayout/>}/>
          <Route path="/beds" element={<Beds/>}/>
          <Route path="/oxygen-cylinder" element={<Oxygencyl/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
      </Routes>
    </>
  )
}

export default App

