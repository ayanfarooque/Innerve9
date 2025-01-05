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
  
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target
      setData(prevData => ({ ...prevData, [name]: checked }))
    }
  
    const handleArrayChange = (e, field) => {
      const value = e.target.value.split('\n').filter(item => item.trim() !== '')
      setData(prevData => ({ ...prevData, [field]: value }))
    }
  
    const handleDoctorChange = (index, field, value) => {
      setData(prevData => ({
        ...prevData,
        doctors: prevData.doctors.map((doctor, i) => 
          i === index ? { ...doctor, [field]: value } : doctor
        )
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
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Submitted data:', data)
      alert('Data submitted successfully!')
    }

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
        <CardContent>
          <Textarea 
            value={data.resources.join('\n')} 
            onChange={(e) => handleArrayChange(e, 'resources')}
            placeholder="Enter resources (one per line)"
            rows={5}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Organs</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea 
            value={data.organs.join('\n')} 
            onChange={(e) => handleArrayChange(e, 'organs')}
            placeholder="Enter available organs (one per line)"
            rows={5}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Blood Types</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea 
            value={data.blood.join('\n')} 
            onChange={(e) => handleArrayChange(e, 'blood')}
            placeholder="Enter available blood types (one per line)"
            rows={3}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Doctors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.doctors.map((doctor, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor={`doctor-name-${index}`}>Doctor Name</Label>
                  <Input 
                    id={`doctor-name-${index}`}
                    value={doctor.name}
                    onChange={(e) => handleDoctorChange(index, 'name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`doctor-specialty-${index}`}>Specialty</Label>
                  <Input 
                    id={`doctor-specialty-${index}`}
                    value={doctor.specialty}
                    onChange={(e) => handleDoctorChange(index, 'specialty', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Schedule</Label>
                  {doctor.schedule.map((schedule, scheduleIndex) => (
                    <div key={scheduleIndex} className="flex space-x-2 mt-2">
                      <Input 
                        value={schedule.day}
                        onChange={(e) => handleScheduleChange(index, scheduleIndex, 'day', e.target.value)}
                        placeholder="Day"
                      />
                      <Input 
                        value={schedule.hours}
                        onChange={(e) => handleScheduleChange(index, scheduleIndex, 'hours', e.target.value)}
                        placeholder="Hours"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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
