import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import hospitalsData from './Doctors.json';

const HospitalPage = () => {
    const hospitalss = hospitalsData.hospitals;

    console.log(hospitalss[0]);

    // if (!hospitalss || !Array.isArray(hospitalss)) {
    //     console.error("Invalid data format: hospitals is not an array");
    //     return <div>Error: Hospital data is invalid</div>;
    // }

    return (
        <div className="container mx-auto p-4">
            <h1>AAAAAAAAAAA</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {hospitalss.map((hospital) => (
                    <Card key={hospital.id} className="mb-4">
                        <CardHeader>
                            <CardTitle>{hospital.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <dl className="grid grid-cols-1 gap-2">
                                <div>
                                    <dt className="font-medium">Location:</dt>
                                    <dd>{hospital.location}</dd>
                                </div>
                                <div>
                                    <dt className="font-medium">Number of Beds:</dt>
                                    <dd>{hospital.beds}</dd>
                                </div>
                                <div>
                                    <dt className="font-medium">Power Backup:</dt>
                                    <dd>{hospital.powerBackup ? 'Yes' : 'No'}</dd>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HospitalPage;
