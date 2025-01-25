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
import { useLocation } from 'react-router-dom';

const BloodEdit = () => {
  const location = useLocation();
  const hospital = location.state;

      const [data, setData] = useState(hospital)

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
  
      const handleBloodChange = (index, value) => {
        setFormData(prev => {
          const updatedBlood = [...prev.blood];
          updatedBlood[index] = value;
          return { ...prev, blood: updatedBlood };
        });
      };
    
      const removeBlood = (index) => {
        setFormData(prev => ({
          ...prev,
          blood: prev.blood.filter((_, i) => i !== index)
        }));
      };
    
      const handleBloodSubmit = async () => {
        try {
          const response = await fetch(`https://your-api-url.com/blood-data`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ blood: formData.blood }), // Sending only blood data
          });
    
          if (response.ok) {
            const result = await response.json();
            alert('Blood data updated successfully!');
            console.log('Updated blood data:', result);
          } else {
            alert('Failed to update blood data. Please try again.');
          }
        } catch (error) {
          console.error('Error updating blood data:', error);
          alert('An error occurred while updating blood data.');
        }
      };
    
  return (
    <div>
      <Header/>
      <form onSubmit={handleBloodSubmit} className="space-y-6 p-14">
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
