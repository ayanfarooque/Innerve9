const Resource = require('../models/resource');

exports.getResources = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1; // Default to page 1
        const limit = parseInt(req.query.limit, 10) || 20; // Default to 20 entries per page
        const startIndex = (page - 1) * limit;

        console.log(`Page: ${page}, Limit: ${limit}, StartIndex: ${startIndex}`);

        const resources = await Resource.find().skip(startIndex).limit(limit);
        console.log(resources);

        const totalCount = await Resource.countDocuments();

        res.status(200).json({
            metadata: {
                totalCount,
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit),
            },
            data: resources,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching resources' });
    }
};

exports.getSchedule = (req, res) => {
    res.json({ message: 'Here is the doctor schedule route' });
};