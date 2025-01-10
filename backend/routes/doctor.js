const express = require('express');
const { hospitalModel, doctorModel, resourceModel } = require('../schemas/db')

const doctorRouter = express.Router();

doctorRouter.get('/', async (_request, _response) => {

    try {

        const hospitals = await hospitalModel.find({});
        const doctors = await doctorModel.find({});    
        const resources = await resourceModel.find({});
        console.log(resources)
        const mainData = []

        hospitals.map(hospital => {
            console.log(hospital.name  + "+" + hospital.id)
            let doctorsString = "";
            let resourceAttached = [];
            doctors.map(doctor => {
                if(doctor.hospitalId.includes(hospital.id)) { // Check if hospital.id is in doctor.hospitalId array
                    console.log(doctor.hospitalId + "+" + doctor.id + "👍🏾");
                    if(doctorsString.length == 0) doctorsString = doctor.name;
                    else doctorsString = doctorsString + ", " + doctor.name;
                } else {
                    console.log(doctor.hospitalId + "+" + doctor.id + "👎🏾");
                }
            });
            console.log('............')
            resources.map(resource => {
                if(resource.hospitalId == hospital.id){
                    console.log(resource.hospitalId + "+" + resource.id + "👍🏾");
                    resourceAttached.push(resource);
                } 
            });
            console.log("========================================")
            mainData.push({
                hospital, doctorsString, resourceAttached
            });
        });

        // console.log(mainData);

        return _response.json({
            message: "data fetched successfully",
            data: mainData 
        });

    } catch(_error){
        console.log(_error)

        return _response.status(500).json({
            "message": "error fetching data",
            _error
        });
    }
});

doctorRouter.post('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Dashboard Hospital Router"
    });
});

doctorRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Dashboard Hospital Router"
    });
});

doctorRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Dashboard Hospital Router"
    });
});

module.exports = doctorRouter;