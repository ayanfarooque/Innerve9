const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true },
    totalBeds: { type: Number, required: true },
    availableBeds: { type: Number, required: true },
    equipment: [
        {
            name: { type: String },
            quantity: { type: Number },
        },
    ],
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;