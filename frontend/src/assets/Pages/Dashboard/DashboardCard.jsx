import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const DashboardCard = ({ title, content, onViewProfile, }) => {


  return (
    <div>
    <Card className='w-full'>
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
          <Button onClick={onViewProfile} className="w-full mt-4 bg-purple-600 text-white">
            View Profile
          </Button>
      </CardContent>
    </Card>
    </div>
  )
}

export default DashboardCard
