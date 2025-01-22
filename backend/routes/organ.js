const express = require('express');
const {organModel, hospitalModel} = require('../schemas/db');
const authMiddleware = require('../middleware/authMiddleware');

const orgranRouter = express.Router();

orgranRouter.get('/', async (_request, _response) => {

    try {
        const organData = await organModel.find({});
        const hospitalData = await hospitalModel.find({});
        let data = []
    


        hospitalData.map(hospital => {
            let organString = ""
            organData.map(organ => {
                if(organ.hospitalid == hospital.id){
                    console.log(organ.hospitalid + "<->" + hospital._id);
                    if(organString.length == 0) organString = organ.organname;
                    else organString = organString + ", " + organ.organname;
                }
            });
            data.push({
                hospitalId: hospital.id,
                hospitalName: hospital.name,
                hospitalPowerBackup: hospital.powerBackup,
                organString
            });
        })
    
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

orgranRouter.post('/', authMiddleware, async (_request, _response) => {

    try{

        const body = _request.body;
        const hospitalId = _request.hospitalId;

        console.log(hospitalId);

        const newOrgan = await organModel.create({
            hospitalid: hospitalId,
            organname: body.organname
        });

        return _response.json({
            "message": "Welcome to the Organ Router",
            newOrgan
        });

    } catch(_error) {

        return _response.json(_error);

    }
   
});

orgranRouter.delete('/', authMiddleware, async (_request, _response) => {

    const organId = _request.body.organId;

    const deletedOrgan = await organModel.deleteOne({
        _id: organId
    });

    console.log(deletedOrgan);

    return _response.json({
        "message": "Welcome to the Organ Router",
        deletedOrgan
    });
});

orgranRouter.put('/', authMiddleware, async (_request, _response) => {

    const body = _request.body;

    const updatedBody = await organModel.updateOne({
        _id: body.organId
    }, {
        organname: body.organname
    });

    return _response.json({
        "message": "Welcome to the Organ Router",
        updatedBody
    });
})

module.exports = orgranRouter;