import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminLayout = () => {
  const data = [
    {
      id: 13,
      name: "City General Hospital",
      location: "123 Main St, Downtown, City 12345",
      beds: 500,
      oxygencyl: 15,
      powerBackup: true,
      resources: [
        "Emergency Room",
        "Intensive Care Unit",
        "Radiology Department",
        "Surgery Center",
        "Maternity Ward"
      ],
      organs: ["Heart", "Kidneys", "Liver", "Lungs", "Pancreas", "Corneas", "Bone Marrow"],
      blood: ["A+", "A-", "AB+"],
      doctors: [
        {
          name: "Dr. John Doe",
          specialty: "Cardiology",
          schedule: [
            { day: "Monday", hours: "9:00 AM - 5:00 PM" },
            { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
            { day: "Friday", hours: "9:00 AM - 3:00 PM" }
          ]
        },
        {
          name: "Dr. Jane Smith",
          specialty: "Pediatrics",
          schedule: [
            { day: "Tuesday", hours: "8:00 AM - 4:00 PM" },
            { day: "Thursday", hours: "9:00 AM - 5:00 PM" }
          ]
        }
      ]
    }
  ];

  const hospital = data[0]; // Correctly access the first object from the array

  return (
    <div className="bg-[#f3efff]">
      <div className="space-y-6 p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default AdminLayout;
