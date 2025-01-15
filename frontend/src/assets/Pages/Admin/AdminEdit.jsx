import React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate } from 'react-router-dom';
import Header from '@/assets/Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import { PlusCircle, X } from 'lucide-react'

const AdminEdit = () => {

    const navigate = useNavigate();
    

    const data1 = [
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

    const [data, setData] = useState(data1[0])

    const handleChange = (e) => {
      const { name, value } = e.target
      setData(prevData => ({ ...prevData, [name]: value }))
    }
  
    // const handleCheckboxChange = (e) => {
    //   const { name, checked } = e.target
    //   setData(prevData => ({ ...prevData, [name]: checked }))
    // }
  
    // const handleArrayChange = (e, field) => {
    //   const value = e.target.value.split('\n').filter(item => item.trim() !== '')
    //   setData(prevData => ({ ...prevData, [field]: value }))
    // }
  
    const handleDoctorChange = (index, field, value) => {
      setData(prevData => ({
        ...prevData,
        doctors: prevData.doctors.map((doctor, i) => 
          i === index ? { ...doctor, [field]: value } : doctor
        )
      }))
    }

    const addResource = () => {
      setData(prevData => ({
        ...prevData,
        resources: [...prevData.resources, '']
      }))
    }
    
    const removeResource = (index) => {
      setData(prevData => ({
        ...prevData,
        resources: prevData.resources.filter((_, i) => i !== index)
      }))
    }
    
    const handleResourceChange = (index, value) => {
      setData(prevData => ({
        ...prevData,
        resources: prevData.resources.map((resource, i) => i === index ? value : resource)
      }))
    }
  
    const handleScheduleChange = (doctorIndex, scheduleIndex, field, value) => {
      setData(prevData => ({
        ...prevData,
        doctors: prevData.doctors.map((doctor, i) => 
          i === doctorIndex ? {
            ...doctor,
            schedule: doctor.schedule.map((schedule, j) => 
              j === scheduleIndex ? { ...schedule, [field]: value } : schedule
            )
          } : doctor
        )
      }))
    }

    const addDoctor = () => {
      const newDoctor = {
        name: '',
        specialty: '',
        schedule: [{ day: '', hours: '' }]
      };
      setData(prevData => ({
        ...prevData,
        doctors: [...prevData.doctors, newDoctor]
      }));
    };
    
    const removeDoctor = (index) => {
      setData(prevData => ({
        ...prevData,
        doctors: prevData.doctors.filter((_, i) => i !== index)
      }));
    };
    
    const addSchedule = (doctorIndex) => {
      setData(prevData => ({
        ...prevData,
        doctors: prevData.doctors.map((doctor, i) => 
          i === doctorIndex ? {
            ...doctor,
            schedule: [...doctor.schedule, { day: '', hours: '' }]
          } : doctor
        )
      }));
    };
    
    const removeSchedule = (doctorIndex, scheduleIndex) => {
      setData(prevData => ({
        ...prevData,
        doctors: prevData.doctors.map((doctor, i) => 
          i === doctorIndex ? {
            ...doctor,
            schedule: doctor.schedule.filter((_, j) => j !== scheduleIndex)
          } : doctor
        )
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Submitted data:', data)
      alert('Data submitted successfully!')
    }

  return (
    <div className="bg-[#f3efff]">
    <Header/>
    <form onSubmit={handleSubmit} className="space-y-6 p-14">
      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Hospital Name</Label>
            <Input id="name" name="name" value={data.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={data.location} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="beds">Number of Beds</Label>
            <Input id="beds" name="beds" type="number" value={data.beds} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="oxygencyl">Oxygen Cylinders</Label>
            <Input id="oxygencyl" name="oxygencyl" type="number" value={data.oxygencyl} onChange={handleChange} required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="powerBackup" name="powerBackup" checked={data.powerBackup} onCheckedChange={(checked) => setData(prevData => ({ ...prevData, powerBackup: checked }))} />
            <Label htmlFor="powerBackup">Power Backup</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.resources.map((resource, index) => (
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
          <CardTitle>Availiable Organs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.organs.map((resource, index) => (
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
            Add Organs
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Doctors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.doctors.map((doctor, doctorIndex) => (
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


      <div className='flex gap-x-10'>
      <Button type="submit" className='bg-purple-600 text-white'>Save Changes</Button>
      </div>
    </form>
    <Footer/>
    </div>
  )
}

export default AdminEdit
