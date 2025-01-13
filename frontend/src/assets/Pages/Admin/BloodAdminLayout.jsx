import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BloodAdminLayout = () => {
    const data = [
        {
        id:"9D55VE7GY69",
        name:"Heller, Gerhold and Rolfson",
        location:"71850 Manley Pass",
        Apos :9,
        Aneg :3,
        Bpos:3,
        Bneg:6,
        ABpos:10,
        ABneg:4,
        Opos:2,
        Oneg:14
        }
      ];
    
      const blood = data[0];
  return (
        <div className="bg-[#f3efff]">
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
