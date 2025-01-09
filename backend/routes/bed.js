const express = require('express');
const {hospitalModel} = require('../schemas/db');

const bedRouter = express.Router();

bedRouter.get('/', async (_request, _response) => {

    try {

        const data = await hospitalModel.find({});
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

bedRouter.post('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Bed Router"
    });
});

bedRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Bed Router"
    });
});

bedRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Bed Router"
    });
});

module.exports = bedRouter;