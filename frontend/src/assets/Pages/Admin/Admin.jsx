import React from 'react'
import Header from '../../Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import AdminLayout from './Adminlayout'
import sd from '../../Comp/Tables/data.json'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  
  return (
    <div className="bg-[#f3efff]">
      <Header/>
      <h1 className=" flex justify-center text-5xl font-semibold text-[#4A148C] pt-10">Admin Portal</h1>
      <AdminLayout/>
      <Footer/>
    </div>
  )
}

export default Admin
