import React from 'react'
import Header from '../../Comp/Header/Header'
import Footer from '../../Comp/Footer/Footer'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import  DashboardCard  from './DashboardCard';
import healthcaredata from "./Dashboard.json";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("hospitals");

  const renderCards = (data) => {
    return data.map((item) => {
      const { id, name, ...content } = item;
      return (
        <div key={id} className="w-full">
          <DashboardCard title={name} content={content} />
        </div>
      );
    });
  };
  return (
    <div className="bg-[#f3efff]">
      <Header/>
      <div className="container mx-auto p-4 ">
      <div className="mb-6 flex justify-center space-x-4 ">
        <Button
          onClick={() => setActiveSection("doctors")}
          variant={activeSection === "doctors" ? "outline" : ""}
          className={`bg-white ${activeSection === "doctors" ? "border-2 border-purple-500" : ""}`}
        >
          Doctors
        </Button>
        <Button
          onClick={() => setActiveSection("hospitals")}
          variant={activeSection === "hospitals" ? "outline" : ""}
          className={`bg-white ${activeSection === "hospitals" ? "border-2 border-purple-500" : ""}`}
        >
          Hospitals
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">
        {activeSection === "doctors" ? "Doctors" : "Hospitals"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderCards(healthcaredata[activeSection])}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
