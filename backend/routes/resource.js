const express = require('express');
const {resourceModel} = require('../schemas/db');

const resourceRouter = express.Router();

resourceRouter.get('/', async (_request, _response) => {

    try {

        const data = await resourceModel.find({});
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

resourceRouter.post('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Resource Router"
    });
});

resourceRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Resource Router"
    });
});

resourceRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Resource Router"
    });
});


module.exports = resourceRouter;