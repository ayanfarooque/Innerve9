import React from 'react'
import Basictable from '@/assets/Comp/Tables/Basictable'
import Header from '@/assets/Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import SideBar from '../../Comp/SideBar/SideBar'
import sampledata from '../../Comp/Tables/data.json'


const SearchLayout = () => {
  return (
    <div>
      <Header/>
      <div >
        <SideBar/>
      </div>
      <Footer/>
    </div>
  )
}

export default SearchLayout
