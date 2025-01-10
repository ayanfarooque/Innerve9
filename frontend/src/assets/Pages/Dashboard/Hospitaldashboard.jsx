import React, { useState, useMemo, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HospitalCard from './HospitalCard';
import HospitalModal from './HospitalModal';
import Header from '@/assets/Comp/Header/Header';
import Footer from '@/assets/Comp/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hospitaldashboard = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitalData, setHospitalData] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state
  const dummyvar = {
    "name": "wow",
    "education": "lawda merann"
  }

  useEffect(() => {
    // Fetching data from the API
    axios.get('http://localhost:3000/api/dashboard/hospital') // Replace with your actual API endpoint
      .then(response => {
        setHospitalData(response.data.data); // Assuming your response contains the list of hospitals
        setLoading(false); // Set loading to false when data is fetched
        console.log(response.data.data)
      })
      .catch(err => {
        console.error('Error fetching data: ', err);
        setError('Failed to fetch hospital data.');
        setLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once when component mounts

  const filteredAndSortedHospitals = useMemo(() => {
    let hospitals = hospitalData;

    // Filter based on search query
    if (searchQuery) {
      hospitals = hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort alphabetically
    hospitals = [...hospitals].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.hospital.name.localeCompare(b.hospital.name);
      } else {
        return b.hospital.name.localeCompare(a.hospital.name);
      }
    });

    return hospitals;
  }, [hospitalData, searchQuery, sortOrder]);

  if (loading) {
    return (
      <div className="bg-[#f3efff]">
        <Header />
        <div className="container mx-auto px-14 py-14 text-center">
          <h2>Loading hospitals...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f3efff]">
        <Header />
        <div className="container mx-auto px-14 py-14 text-center">
          <h2>{error}</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#f3efff]">
      <Header />
      <div className="container mx-auto px-14 py-14">
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
          {filteredAndSortedHospitals.map((item) => (
            <HospitalCard
              key={item.hospital.id}
              id={item.hospital.id}
              name={item.hospital.name}
              location={item.hospital.location}
              beds={item.hospital.beds}
              onViewDetails={() => {
                setSelectedHospital(item)
                console.log(item)
              }}
            />
          ))}
        </div>

        <HospitalModal
          hospital={selectedHospital}
          isOpen={!!selectedHospital}
          onClose={() => setSelectedHospital(null)}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Hospitaldashboard;
