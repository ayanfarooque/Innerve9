const express = require("express");
const {bloodModel} = require('../schemas/db');

const bloodRouter = express.Router();

bloodRouter.get('/', async (_request, _response) => {

    try {

        const data = await bloodModel.find({});
        console.log(data);

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
    return _response.json({
        "message": "Welcome to the Blood Router"
    });
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