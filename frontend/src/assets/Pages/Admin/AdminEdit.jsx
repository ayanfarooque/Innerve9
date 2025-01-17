import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { PlusCircle, X } from 'lucide-react'
import Footer from '@/assets/Comp/Footer/Footer';
import Header from '@/assets/Comp/Header/Header';
import { useLocation } from 'react-router-dom';

const AdminEdit = () => {

  // const data = data1[0]

  // const initialFormData = {
  //   id: data.id,
  //   name: data.name,
  //   location: data?.location || '',
  //   beds: data?.beds || 0,
  //   oxygencyl: data?.oxygencyl || 0,
  //   powerBackup: data?.powerBackup || false,
  //   resources: data?.resources || [],
  //   organs: data?.organs || [],
  //   blood: data?.blood || [],
  //   doctors: data?.doctors || []
  // };

  const location = useLocation();
  const hospital = location.state;

  const [formData, setFormData] = useState(hospital);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleResourceChange = (index, value) => {
    setFormData(prev => {
      const updatedResources = [...prev.resources];
      updatedResources[index] = value;
      return { ...prev, resources: updatedResources };
    });
  };

  const addResource = () => {
    setFormData(prev => ({
      ...prev,
      resources: [...prev.resources, '']
    }));
  };

  const removeResource = (index) => {
    setFormData(prev => ({
      ...prev,
      resources: prev.resources.filter((_, i) => i !== index)
    }));
  };

  const handleOrgansChange = (index, value) => {
    setFormData(prev => {
      const updatedOrgans = [...prev.organs];
      updatedOrgans[index] = value;
      return { ...prev, organs: updatedOrgans };
    });
  };
  
  const addOrgans = () => {
    setFormData(prev => ({
      ...prev,
      organs: [...prev.organs, '']
    }));
  };

  const removeOrgans = (index) => {
    setFormData(prev => ({
      ...prev,
      organs: prev.organs.filter((_, i) => i !== index)
    }));
  };
  

  const handleDoctorChange = (index, field, value) => {
    setFormData(prev => {
      const updatedDoctors = [...prev.doctors];
      updatedDoctors[index] = {
        ...updatedDoctors[index],
        [field]: value
      };
      return { ...prev, doctors: updatedDoctors };
    });
  };

  const addDoctor = () => {
    setFormData(prev => ({
      ...prev,
      doctors: [
        ...prev.doctors,
        { name: '', specialty: '', schedule: [] }
      ]
    }));
  };

  const removeDoctor = (index) => {
    setFormData(prev => ({
      ...prev,
      doctors: prev.doctors.filter((_, i) => i !== index)
    }));
  };

  const handleScheduleChange = (doctorIndex, scheduleIndex, field, value) => {
    setFormData(prev => {
      const updatedDoctors = [...prev.doctors];
      const updatedSchedule = [...updatedDoctors[doctorIndex].schedule];
      updatedSchedule[scheduleIndex] = {
        ...updatedSchedule[scheduleIndex],
        [field]: value
      };
      updatedDoctors[doctorIndex].schedule = updatedSchedule;
      return { ...prev, doctors: updatedDoctors };
    });
  };

  const addSchedule = (doctorIndex) => {
    setFormData(prev => {
      const updatedDoctors = [...prev.doctors];
      updatedDoctors[doctorIndex].schedule.push({ day: '', hours: '' });
      return { ...prev, doctors: updatedDoctors };
    });
  };

  const removeSchedule = (doctorIndex, scheduleIndex) => {
    setFormData(prev => {
      const updatedDoctors = [...prev.doctors];
      updatedDoctors[doctorIndex].schedule = updatedDoctors[doctorIndex].schedule
        .filter((_, i) => i !== scheduleIndex);
      return { ...prev, doctors: updatedDoctors };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://your-api-url.com/admins/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        alert('Data updated successfully!');
        console.log('Updated data:', result);
      } else {
        alert('Failed to update data. Please try again.');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      alert('An error occurred while updating the data.');
    }
  };

  // Fix for power backup checkbox
  const handlePowerBackupChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      powerBackup: checked
    }));
  };

  return (
    <div>
    <Header/>
    <form onSubmit={handleSubmit} className="space-y-6 p-14">
      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Hospital Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="beds">Number of Beds</Label>
            <Input id="beds" name="beds" type="number" value={formData.beds} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="oxygencyl">Oxygen Cylinders</Label>
            <Input id="oxygencyl" name="oxygencyl" type="number" value={formData.oxygencyl} onChange={handleChange} required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="powerBackup" 
              checked={formData.powerBackup} 
              onCheckedChange={handlePowerBackupChange} 
            />
            <Label htmlFor="powerBackup">Power Backup</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Organs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.organs.map((resource, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input 
                value={resource}
                onChange={(e) => handleOrgansChange(index, e.target.value)}
                placeholder="Enter organs"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeOrgans(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={addOrgans}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Organs
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.resources.map((resource, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input 
                value={resource}
                onChange={(e) => handleResourceChange(index, e.target.value)}
                placeholder="Enter resource"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeResource(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={addResource}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Resource
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Doctors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.doctors.map((doctor, doctorIndex) => (
            <Card key={doctorIndex}>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor={`doctor-name-${doctorIndex}`}>Doctor Name</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeDoctor(doctorIndex)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Input 
                  id={`doctor-name-${doctorIndex}`}
                  value={doctor.name}
                  onChange={(e) => handleDoctorChange(doctorIndex, 'name', e.target.value)}
                />
                <div>
                  <Label htmlFor={`doctor-specialty-${doctorIndex}`}>Specialty</Label>
                  <Input 
                    id={`doctor-specialty-${doctorIndex}`}
                    value={doctor.specialty}
                    onChange={(e) => handleDoctorChange(doctorIndex, 'specialty', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Schedule</Label>
                  {doctor.schedule.map((schedule, scheduleIndex) => (
                    <div key={scheduleIndex} className="flex space-x-2 mt-2">
                      <Input 
                        value={schedule.day}
                        onChange={(e) => handleScheduleChange(doctorIndex, scheduleIndex, 'day', e.target.value)}
                        placeholder="Day"
                      />
                      <Input 
                        value={schedule.hours}
                        onChange={(e) => handleScheduleChange(doctorIndex, scheduleIndex, 'hours', e.target.value)}
                        placeholder="Hours"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSchedule(doctorIndex, scheduleIndex)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => addSchedule(doctorIndex)}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addDoctor}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Doctor
          </Button>
        </CardContent>
      </Card>

      <Button type="submit" className='bg-purple-600 text-white'>Save Changes</Button>
    </form>
    <Footer/>
    </div>
  );
};

export default AdminEdit;