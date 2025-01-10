const express = require('express');
const {organModel, hospitalModel} = require('../schemas/db');

const orgranRouter = express.Router();

orgranRouter.get('/', async (_request, _response) => {

    try {
        const organData = await organModel.find({});
        const hospitalData = await hospitalModel.find({});
        let data = []
    
        organData.map(organ => {
            hospitalData.map(hospital => {
                if(organ.hospitalid == hospital.id) 
                    data.push({
                        hospital,
                       organ 
                    });
            });
        });
    
        console.log(data);
    
        return _response.json({
            "Message": "welcome to the organ router",
            data: data
        });

    } catch(_error){

        return _response.status(500).json({
            "message": "error fetching data"
        });

    }

})

orgranRouter.post('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Organ Router"
    });
})

orgranRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Organ Router"
    });
})

orgranRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Organ Router"
    });
})

module.exports = orgranRouter;