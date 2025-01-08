import React from 'react'
import Header from '@/assets/Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import SideBar2 from '@/assets/Comp/SideBar/SideBar2'
import Donate from './Donate'

const DonateLayout = () => {
  return (
    <div className="bg-[#f3efff] flex flex-col">
      <Header/>
      <h1 className="flex justify-center text-4xl font-semibold text-[#4A148C] p-10">Blood</h1>
      <div className='flex flex-row gap-y-16 '>
      <SideBar2/>
      <div className='min-w-[1100px]'>
      <Donate/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DonateLayout
