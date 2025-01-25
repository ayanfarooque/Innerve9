import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import data1 from '../Blood/blood.json'

const BloodAdminLayout = () => {
  const navigate = useNavigate();

  const handleEdit = (blood) => {
    navigate(`/blood/edit/${blood.id}`, { state: blood });
  };

  const location = useLocation();
  const bloodId = location.state?.bloodBankId;  // Extract hospitalId from navigate state
  const blood = data1.blood.find(blood => blood.id === bloodId);
  

  return (
        <div className="bg-[#f3efff]">
          <Button
            onClick={() => handleEdit(blood)}
            className='bg-purple-600 text-white'
          >
            Edit
          </Button>
          <div className="space-y-6 p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{blood.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>ID:</strong> {blood.id}</p>
                  <p><strong>Location:</strong> {blood.location}</p>
                </CardContent>
              </Card>
    
              <Card>
                <CardHeader>
                  <CardTitle>Available Blood Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>A+</strong> {blood.Apos}</p>
                  <p><strong>A-</strong> {blood.Aneg}</p>
                  <p><strong>B+</strong> {blood.Bpos}</p>
                  <p><strong>B-</strong> {blood.Bneg}</p>
                  <p><strong>AB+</strong> {blood.ABpos}</p>
                  <p><strong>AB-</strong> {blood.ABneg}</p>
                  <p><strong>O+</strong> {blood.Opos}</p>
                  <p><strong>O-</strong> {blood.Oneg}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  )
}

export default BloodAdminLayout
