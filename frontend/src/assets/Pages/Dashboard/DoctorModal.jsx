import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import doctorsDetailed from './Doctors.json'; 

const DoctorModal = ({ doctor, isOpen, onClose }) => {
  // Find the doctorI by ID in the imported JSON file
  //const doctorI = doctorsDetailed.find((doc) => doc.id === doctor);

  // If no doctorI is found, return null
  if (!doctor) return null;

  // Destructure the doctorI data
  const { name, specialty, experience, education, bio, schedule } = doctor;

  return (
    <div >
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{specialty}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Experience Section */}
          <div>
            <h4 className="font-medium mb-2">Experience</h4>
            <p>{experience}</p>
          </div>

          {/* Education Section */}
          <div>
            <h4 className="font-medium mb-2">Education</h4>
            <p>{education}</p>
          </div>

          {/* Bio Section */}
          <div>
            <h4 className="font-medium mb-2">Bio</h4>
            <p>{bio}</p>
          </div>

          {/* Schedule Section */}
          <div>
            <h4 className="font-medium mb-2">Schedule</h4>
            {Array.isArray(schedule) && schedule.length > 0 ? (
              <ul>
                {schedule.map((slot, index) => (
                  <li key={index}>
                    {slot.day}: {slot.hours}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No schedule available</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default DoctorModal;
