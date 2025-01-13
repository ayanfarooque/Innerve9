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

const BloodEdit = () => {
  const data1 = [
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
                </CardContent>
      </Card>

      <Card >
        <CardHeader>
          <CardTitle >Blood</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-2 pl-5 space-x-5'>
      <div className='space-y-2 pl-5'>
        <Label htmlFor="beds" className='pl-3'>A+</Label>
        <Input id="beds" name="beds" type="number" value={data.Apos} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>A-</Label>
        <Input id="beds" name="beds" type="number" value={data.Aneg} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>B+</Label>
        <Input id="beds" name="beds" type="number" value={data.Bpos} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>B-</Label>
        <Input id="beds" name="beds" type="number" value={data.Bneg} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>AB+</Label>
        <Input id="beds" name="beds" type="number" value={data.ABpos} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>AB-</Label>
        <Input id="beds" name="beds" type="number" value={data.ABneg} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>O+</Label>
        <Input id="beds" name="beds" type="number" value={data.Opos} onChange={handleChange} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor="beds" className='pl-3'>O-</Label>
        <Input id="beds" name="beds" type="number" value={data.Oneg} onChange={handleChange} required />
      </div>
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

export default BloodEdit
