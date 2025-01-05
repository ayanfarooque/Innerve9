import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
    <header className="w-full bg-gradient-to-r from-[#673AB7] to-[#311B92] text-white">
      <div className=" flex items-center justify-between px-4 py-2 ">
        <div className="flex items-center space-x-2 ">
          <img src='src\assets\Logo\nha.png' className='h-16'/>
        </div>
        <div className='flex'>
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold px-12">
          Hospital Resource Portal
        </h1>
        <Button onClick={() => navigate('/')} className='bg-purple-600 text-white'>Home</Button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
