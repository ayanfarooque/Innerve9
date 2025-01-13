import React from 'react'
import Header from '../../Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import AdminLayout from './Adminlayout'
import sd from '../../Comp/Tables/data.json'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-[#f3efff]">
      <Header/>
      <h1 className=" flex justify-center text-5xl font-semibold text-[#4A148C] pt-10">Admin Portal</h1>
      <div className='pt-10 pl-14'>
        <Button
            onClick={() => navigate('/adminedit')}
            className='bg-purple-600 text-white'
        >
            Edit
        </Button>
      </div>
      <AdminLayout/>
      <Footer/>
    </div>
  )
}

export default Admin
