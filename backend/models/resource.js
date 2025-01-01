const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true },
    cityName: { type: String, required: true },
    zoneName: { type: String, required: true },
    wardName: { type: String, required: true },
    totalBeds: { type: Number, required: true },
    availableBeds: { type: Number, required: true },
    facilityType: { type: String },
    classType: { type: String },
    level: { type: String },
    pharmacyAvailable: { type: String },
    ambulanceAvailable: { type: String },
    countOfAmbulance: { type: Number },
    averageMonthlyFootfall: { type: Number },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;