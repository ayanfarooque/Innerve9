import React from 'react'
import Basictable from '@/assets/Comp/Tables/Basictable'
import Header from '@/assets/Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import SideBar from '../../Comp/SideBar/SideBar'
import sampledata from '../../Comp/Tables/data.json'


const SearchLayout = () => {
  return (
    <div className="bg-[#f3efff]">
      <Header/>
      <h1 className="flex justify-center text-center text-3xl font-semibold text-[#4A148C] py-5">Search</h1>
      <div className='flex flex-cols'>
        <SideBar/>
      </div>
      <Footer/>
    </div>
  )
}

export default SearchLayout
