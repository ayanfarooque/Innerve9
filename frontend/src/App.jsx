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
import Admin from './assets/Pages/Admin/Admin';
import AdminEdit from './assets/Pages/Admin/AdminEdit';
import Blood from './assets/Pages/Blood/BloodLayout'
import BloodLayout from './assets/Pages/Blood/BloodLayout';
import Apositive from './assets/Pages/Blood/Apositive';
import Anegative from './assets/Pages/Blood/Anegative';
import Bpositive from './assets/Pages/Blood/Bpositive';
import Bnegative from './assets/Pages/Blood/Bnegative';
import ABpositive from './assets/Pages/Blood/ABpositive';
import ABnegative from './assets/Pages/Blood/ABnegative';
import Opositive from './assets/Pages/Blood/Opositive';
import Onegative from './assets/Pages/Blood/Onegative';
import Donate from './assets/Pages/Blood/Donate';
import DonateLayout from './assets/Pages/Blood/DonateLayout';
import AuthPage from './assets/Pages/Admin/AuthPage';

const App = () => {
    
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>

          <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="/hospital-dashboard" element={<Hospitaldashboard />} />
          

          <Route path="search" element={<SearchLayout/>}/>
            <Route path="/beds" element={<Beds/>}/>
            <Route path="/oxygen-cylinder" element={<Oxygencyl/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/doctors" element={<Doctors/>}/>
            <Route path="/organs"  element={<Organs/>}/>
            <Route path="/bloodtable" element={<Blood/>}/>
          

          <Route path="blood" element={<BloodLayout/>}/>
            <Route path="/apositive" element={<Apositive/>}/>
            <Route path='/anegative' element={<Anegative/>}/>
            <Route path="/bpositive" element={<Bpositive/>}/>
            <Route path='/bnegative' element={<Bnegative/>}/>
            <Route path="/abpositive" element={<ABpositive/>}/>
            <Route path='/abnegative' element={<ABnegative/>}/>
            <Route path="/opositive" element={<Opositive/>}/>
            <Route path='/onegative' element={<Onegative/>}/>
            <Route path='/donate' element={<DonateLayout/>}/>
          
          <Route path="/authpage" element={<AuthPage/>}/>
            <Route path="/bloodedit" element={<BloodEdit/>}/>
            <Route path="/authpage/bloodadmin" element={<BloodAdmin/>}/>
            <Route path="/authpage/admin" element={<Admin/>}/>
            <Route path="/adminedit" element={<AdminEdit/>}/>
        
      </Routes>
    </>
  )
}

export default App

