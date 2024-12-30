const Resource = require('../models/resource');

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching resources' });
    }
};

exports.getSchedule = (req, res) => {
    res.json({ message: 'Here is the doctor schedule route' });
};