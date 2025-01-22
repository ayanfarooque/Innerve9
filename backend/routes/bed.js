const express = require('express');
const {hospitalModel} = require('../schemas/db');
const authMiddleware = require('../middleware/authMiddleware');

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

bedRouter.post('/', authMiddleware, async (req, res) => {
    try {
      // Extract data from the request body
      const { name, beds, location, powerBackup } = req.body;
  
      // Validate the request body
      if (!name || beds === undefined || !location || powerBackup === undefined) {
        return res.status(400).json({ message: 'All fields are required.' });
      }
  
      // Save the document to the database
      const savedHospital = await hospitalModel.create({
        name: name,
        beds: beds,
        location: location,
        powerBackup: powerBackup
      });
  
      // Respond with the saved hospital
      return res.status(201).json({
        message: 'Hospital added successfully',
        hospital: savedHospital,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
});

bedRouter.delete('/', authMiddleware, async (_request, _response) => {

  const hospitalId = _request.hospitalId;
  
  const deletedHospital = await hospitalModel.deleteOne({
    _id: hospitalId
  });

  return _response.json({
      "message": "Welcome to the Bed Router",
      deletedHospital
  });

});

bedRouter.put('/', authMiddleware, async (_request, _response) => {
  const hospitalId = _request.hospitalId;
  const body = _request.body;
  console.log(_request.hospitalId)


  const updatedHospital = await hospitalModel.updateOne({
    _id: hospitalId
  }, {
    name: body.name,
    location: body.location,
    powerBackup: body.powerBackup,
    beds: body.beds
  });
  
  console.log(updatedHospital);

  return _response.json({
    "message": "Welcome to the Bed Router",
    data: updatedHospital
  });

});

module.exports = bedRouter;