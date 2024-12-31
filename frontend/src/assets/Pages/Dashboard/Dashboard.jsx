import React from 'react'
import Header from '../../Comp/Header/Header'
import Footer from '../../Comp/Footer/Footer' 
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import  DashboardCard  from './DashboardCard';
import DoctorModal from './DoctorModal';
import doctorsDetailed from './Doctors.json'

const Dashboard = () => {

  const navigate = useNavigate();

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
      const { id, name, specialty, experience, ...content } = item; // Destructure properties
      
      // Determine the card content based on the active section
      const cardContent = activeSection === 'doctors'
        ? { specialty, experience } // Include only doctor-specific fields
        : content; // Include remaining content for hospitals or other sections
  
      return (
        <div key={id} className="w-full">
          <DashboardCard
            id={id}
            title={name} // Use the name as the title
            content={cardContent} // Pass the processed content
            onViewProfile={activeSection === 'doctors' ? () => setSelectedDoctor(item) : undefined} // Attach the click handler for doctors
          />
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
          variant={activeSection === "doctors" ? "active" : "close"}
        >
          Doctors
        </Button>
        <Button
          onClick={() => navigate("/hospital-dashboard")}
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
        Doctors
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
