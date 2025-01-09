const express = require('express');
const {organModel} = require('../schemas/db');

const orgranRouter = express.Router();

orgranRouter.get('/', async (_request, _response) => {

    try {

        const data = await organModel.find({});
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