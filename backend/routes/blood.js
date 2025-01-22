const express = require("express");
const {bloodBankModel} = require('../schemas/db');

const bloodRouter = express.Router();

bloodRouter.get('/', async (_request, _response) => {

    try {

        const data = await bloodBankModel.find({});
        console.log(data);
        console.log('avv kaleja')

        return _response.json({
            message: "data fetched successfully",
            data: data
        });

    } catch(_error){

        return _response.status(500).json({
            "message": "error fetching data"
        });

    }
});

bloodRouter.post('/', async (_request, _response) => {
    try{

        const body = _request.body;

        const newBloodBank = await bloodBankModel.create({
            name: body.name,
            location: body.location,
            adminEmail: body.email,
            adminPassword: body.password
        });

        return _response.json({
            "message": "Welcome to the Blood Router",
            newBloodBank
        });

    } catch(_error) {

        return _response.json(_error);

    }
});

bloodRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Blood Router"
    });
});

bloodRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Blood Router"
    });
});

module.exports = bloodRouter;