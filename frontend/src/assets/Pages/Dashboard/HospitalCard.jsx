import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HospitalCard = ({  name, location, beds, onViewDetails }) => {
  return (
    <div>
      <Card className="h-full ">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="mt-2">Beds: {beds}</p>
        <Button onClick={onViewDetails} className="mt-4 w-full bg-purple-600 text-white">
          View Details
        </Button>
      </CardContent>
      </Card>
    </div>
  )
}

export default HospitalCard
