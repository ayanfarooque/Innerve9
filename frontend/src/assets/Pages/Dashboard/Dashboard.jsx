import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import DashboardCard from './DashboardCard';
import DoctorModal from './DoctorModal';
import axios from "axios";
import Header from '../../Comp/Header/Header';
import Footer from '../../Comp/Footer/Footer';

const Dashboard = () => {

  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("doctors");
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [mainData, setMainData] = useState(null); // Initialize the state to store the fetched data

  // Fetch data using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get("http://localhost:3000/api/dashboard"); 
        console.log(response.data.data)
        setMainData(response.data.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array makes this run once when the component mounts

  const filteredAndSortedData = useMemo(() => {
    if (!mainData) return []; // Return empty if data is not loaded yet

    let data = mainData;

    if (searchQuery) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    data = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return data;
  }, [activeSection, searchQuery, sortOrder, mainData]);

  const renderCards = (data) => {
    return data.map((item) => {
      const { id, name, specialty, experience, ...content } = item;

      const cardContent = activeSection === 'doctors'
        ? { specialty, experience }
        : content;

      return (
        <div key={id} className="w-full">
          <DashboardCard
            id={id}
            title={name}
            content={cardContent}
            onViewProfile={activeSection === 'doctors' ? () => setSelectedDoctor(item) : undefined}
          />
        </div>
      );
    });
  };

  return (
    <div className="bg-[#f3efff]">
      <Header />
      <div className="container mx-auto px-14 py-14">
        <div className="mb-6 flex justify-center space-x-[600px]">
          <div className='flex space-x-5'>
            <Button
              onClick={() => setActiveSection("doctors")}
              className='bg-purple-600 text-white'
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
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)}>
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
      <Footer />
    </div>
  );
};

export default Dashboard;
