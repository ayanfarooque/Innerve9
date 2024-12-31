import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HospitalModal = ({ hospital, isOpen, onClose }) => {

    if (!hospital) return null;

  return (
    <div>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>{hospital.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className='grid grid-cols-2 gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Hospital Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Location:</strong> {hospital.location}
              </p>
              <p>
                <strong>Number of Beds:</strong> {hospital.beds}
              </p>
              <p>
                <strong>Power Backup:</strong> {hospital.powerBackup ? "Yes" : "No"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {hospital.resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          </div>
          <div>
          <Card>
            <CardHeader>
              <CardTitle>Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              {hospital.doctors.map((doctor, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-semibold">
                    {doctor.name} - {doctor.specialty}
                  </h3>
                  <ul className="list-disc pl-5">
                    {doctor.schedule.map((slot, slotIndex) => (
                      <li key={slotIndex}>
                        {slot.day}: {slot.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default HospitalModal
