import React from 'react'
import Header from '../../Comp/Header/Header'
import Footer from '../../Comp/Footer/Footer' 
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import  DashboardCard  from './DashboardCard';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import DoctorModal from './DoctorModal';
import doctorsDetailed from './Doctors.json'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("doctors");
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedDoctor, setSelectedDoctor] = useState()


  const filteredAndSortedData = useMemo(() => {
    let data = doctorsDetailed[activeSection]

    if (searchQuery) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    data = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })

    return data
  }, [activeSection, searchQuery, sortOrder])

  const renderCards = (data) => {
    return data.map((item) => {
      const { id, name, ...content } = item;
      const cardContent = activeSection === 'doctors'
        ? { specialty: content.specialty, experience: content.experience }
        : content


      return (
        <div key={id} className="w-full">
          <DashboardCard title={name} content={cardContent} isDoctor={activeSection === 'doctors'}
            onViewProfile={activeSection === 'doctors' ? () => setSelectedDoctor(item) : undefined}/>
        </div>
      );
    });
  };
  return (
    <div className="bg-[#f3efff]">
      <Header/>
      <div className="container mx-auto p-4 py-14">
      <div className="mb-6 flex justify-center space-x-[600px]">
        <div className='flex space-x-5'>
        <Button
          onClick={() => setActiveSection("doctors")}
          variant={activeSection === "doctors" ? "active" : "outline"}
          className='bg-white'
        >
          Doctors
        </Button>
        <Button
          onClick={() => setActiveSection("hospitals")}
          variant={activeSection === "hospitals" ? "active" : "outline"}
          className='bg-white'
        >
          Hospitals
        </Button>
        </div>

        <div className="flex space-x-4 w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64"
          />
          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)} >
            <SelectTrigger className='w-[180px] bg-white'>
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent className='w-[180px] bg-white'>
              <SelectItem value="asc">A-Z</SelectItem>
              <SelectItem value="desc">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>

      <h1 className="text-3xl font-bold m-12 text-center">
        {activeSection === "doctors" ? "Doctors" : "Hospitals"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderCards(filteredAndSortedData)}
      </div>

      <DoctorModal
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />

      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
