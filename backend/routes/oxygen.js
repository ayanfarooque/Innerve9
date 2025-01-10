const express = require('express');
const oxygenRouter = express.Router();
const {oxygenModel, hospitalModel} = require('../schemas/db');

oxygenRouter.get('/', async (_request, _response) => {
    const oxygenData = await oxygenModel.find({});
    const hospitalData = await hospitalModel.find({});
    let data = []

    oxygenData.map(oxygen => {
        hospitalData.map(hospital => {
            if(oxygen.hospitalId == hospital.id) 
                data.push({
                    hospital,
                    oxygen
                });
        });
    });

    console.log(data);

    return _response.json({
        "Message": "welcome to the oxygen router",
        data: data
    });
});

module.exports = oxygenRouter;