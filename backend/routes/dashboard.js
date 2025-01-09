const express = require('express');
const { doctorModel } = require('../schemas/db');

const dashboardRouter = express.Router();

dashboardRouter.get('/', async (_request, _response) => {

    try {

        const data = await doctorModel.find({});
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

dashboardRouter.post('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to The Dashboard Router"
    });
});

dashboardRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to The Dashboard Router"
    });
});

dashboardRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to The Dashboard Router"
    });
});

module.exports = dashboardRouter;