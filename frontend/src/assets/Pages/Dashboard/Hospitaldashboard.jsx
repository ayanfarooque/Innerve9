import React from 'react'
import { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HospitalCard from './HospitalCard';
import HospitalModal from './HospitalModal';
import healthcareData from '../../Comp/Tables/data.json';
import Header from '@/assets/Comp/Header/Header';
import Footer from '@/assets/Comp/Footer/Footer';
import { useNavigate } from 'react-router-dom';


const Hospitaldashboard = () => {

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedHospital, setSelectedHospital] = useState(null);

  const filteredAndSortedHospitals = useMemo(() => {
    let hospitals = healthcareData;

    // Filter based on search query
    if (searchQuery) {
      hospitals = hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort alphabetically
    hospitals = [...hospitals].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return hospitals;
  }, [searchQuery, sortOrder]);
    
  return (
    <div className=" bg-[#f3efff]">
      <Header/>
      
      <div className="container mx-auto p-4 py-14">
      <div className="mb-6 flex justify-center space-x-[600px]">
        <div className='flex space-x-5'>
        <Button
          onClick={() => navigate("/dashboard")}
          className='bg-white'
        >
          Doctors
        </Button>
        <Button
          onClick={() => navigate("/hospital-dashboard")}
          className='bg-purple-600 text-white'
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

      
      <h1 className="text-3xl font-bold m-12 text-center">Hospitals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAndSortedHospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            id={hospital.id}
            name={hospital.name}
            location={hospital.location}
            beds={hospital.beds}
            onViewDetails={() => setSelectedHospital(hospital)}
          />
        ))}
      </div>

      <HospitalModal
        hospital={selectedHospital}
        isOpen={!!selectedHospital}
        onClose={() => setSelectedHospital(null)}
      />
      </div>
      <Footer/>
    </div>
  )
}

export default Hospitaldashboard
