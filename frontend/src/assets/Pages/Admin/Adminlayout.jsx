import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import data1 from './adminkeyvalue';
import { Button } from '@/components/ui/button'

const AdminLayout = () => {

  const navigate = useNavigate();

  const handleEdit = (hospital) => {
    navigate(`/admin/edit/${hospital.id}`, { state: hospital });
  };
  

  const location = useLocation();
  const hospitalId = location.state?.hospitalId;  // Extract hospitalId from navigate state
  const hospital = data1.hospitals.find(hospital => hospital.id === hospitalId); // Filter relevant data

  if (!hospital) {
    return <div>No hospital data available</div>;
  }

  console.log(hospital)

  return (
    <div className="bg-[#f3efff]">
          <div className='pt-10 pl-14'>
            <Button
              onClick={() => handleEdit(hospital)}
              className='bg-purple-600 text-white'
            >
              Edit
            </Button>
          </div>
      <div className="space-y-6 p-14">
          <>
          <div  className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl">{hospital.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>ID:</strong> {hospital.id}</p>
                <p><strong>Location:</strong> {hospital.location}</p>
                <p><strong>Beds:</strong> {hospital.beds}</p>
                <p><strong>Oxygen Cylinders:</strong> {hospital.oxygencyl}</p>
                <p><strong>Power Backup:</strong> {hospital.powerBackup ? 'Yes' : 'No'}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {hospital.resources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Organs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {hospital.organs.map((organ, index) => (
                    <li key={index}>{organ}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Blood Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {hospital.blood.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hospital.doctors.map((doctor, index) => (
                  <Card key={index} className="mb-4 last:mb-0">
                    <CardHeader>
                      <CardTitle>{doctor.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><strong>Specialty:</strong> {doctor.specialty}</p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Day</TableHead>
                            <TableHead>Hours</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {doctor.schedule.map((schedule, scheduleIndex) => (
                            <TableRow key={scheduleIndex}>
                              <TableCell>{schedule.day}</TableCell>
                              <TableCell>{schedule.hours}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          </div>
          </>
      </div>
    </div>
  );
};

export default AdminLayout;
