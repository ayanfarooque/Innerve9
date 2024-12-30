import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import HospitalPage from './HospitalPage'
import { Link } from 'react-router-dom';

const DashboardCard = ({ id, title, content, onViewProfile, isDoctor,isHospital }) => {

  const CardWrapper = isHospital ? HospitalPage : 'div';
  const cardProps = isHospital
  ? { as: Link, to: `/hospitals/${id}` }
  : {};


  return (
    <div>
    <CardWrapper {...cardProps}>
    <Card className={`w-full ${isHospital ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-1 text-sm">
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <dt className="font-medium">{key}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {isDoctor && onViewProfile && (
          <Button onClick={onViewProfile} className="w-full mt-4 bg-purple-600 text-white">
            View Profile
          </Button>
        )}
      </CardContent>
    </Card>
    </CardWrapper>
    </div>
  )
}

export default DashboardCard
