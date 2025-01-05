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
import Organs from './assets/Comp/Tables/Organs'
import Basictable from './assets/Comp/Tables/Basictable';
import Bloodtable from './assets/Comp/Tables/BloodTable'
import Admin from './assets/Pages/Admin/Admin';
import AdminEdit from './assets/Pages/Admin/AdminEdit';
import Blood from './assets/Pages/Blood/Blood'

const App = () => {
    
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path="/hospital-dashboard" element={<Hospitaldashboard />} />
        <Route path="search" element={<SearchLayout/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="adminedit" element={<AdminEdit/>}/>
        <Route path="/beds" element={<Beds/>}/>
        <Route path="/oxygen-cylinder" element={<Oxygencyl/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/organs"  element={<Organs/>}/>
        <Route path="/basictable" element={<Basictable/>}/>
        <Route path="/bloodtable" element={<Blood/>}/>
        <Route path="/blood" element={<Blood/>}/>
      </Routes>
    </>
  )
}

export default App

