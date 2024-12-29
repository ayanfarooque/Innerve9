import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const DashboardCard = ({ title, content = {} }) => {
  return (
    <div>
    <Card className="w-full bg-white">
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
      </CardContent>
    </Card>
    </div>
  )
}

export default DashboardCard
