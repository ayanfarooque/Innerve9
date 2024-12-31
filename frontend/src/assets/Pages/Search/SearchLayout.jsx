import React from 'react'
import Basictable from '@/assets/Comp/Tables/Basictable'
import Header from '@/assets/Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import NavigationBar from '@/assets/Comp/NavigationBar/NavigationBar'
import sampledata from '../../Comp/Tables/data.json'

const SearchLayout = () => {
  return (
    <div>
      <Header/>
      <div className='min-h-screen flex flex-cols'>
        <NavigationBar/>
        <Basictable data={sampledata}/>
      </div>
      <Footer/>
    </div>
  )
}

export default SearchLayout
