const express = require('express');
const oxygenRouter = express.Router();
const {oxygenModel, hospitalModel} = require('../schemas/db');
const authMiddleware = require('../middleware/authMiddleware');

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

oxygenRouter.post('/', authMiddleware, async (_request, _response) => {
    try{
        const body = _request.body;

        const newOxygen = await oxygenModel.create({
            amount: body.amount,
            hospitalId: _request.hospitalId
        });

        console.log(newOxygen);

        return _response.json({
            "message": "insertion successfull",
            newOxygen
        });

    } catch(_error){ 
        return _response.json(_error)
    }
});

oxygenRouter.put('/', authMiddleware, async (_request, _response) => {
    try{

        const body = _request.body;
        
        const newOxygenUpdated = await oxygenModel.updateOne({
            _id: body.oxygenId,
        }, {
            amount: body.amount
        });

        console.log(newOxygenUpdated);

        return _response.json({
            "Message": "Data updated",
            newOxygenUpdated
        });

    } catch(_error) {
        return _response.json(_error);
    }
});

module.exports = oxygenRouter;