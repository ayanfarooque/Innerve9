const express = require('express');
const { hospitalModel } = require('../schemas/db')

const hospitalRouter = express.Router();

hospitalRouter.get('/', async (_request, _response) => {

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

hospitalRouter.post('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Dashboard Hospital Router"
    });
});

hospitalRouter.delete('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Dashboard Hospital Router"
    });
});

hospitalRouter.put('/', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the Dashboard Hospital Router"
    });
});
module.exports = hospitalRouter;