const express = require('express');
const router = express.Router();
const { getResources, getSchedule } = require('../controllers/general_controller');

router.get('/resources', getResources);
router.get('/schedule', getSchedule);

module.exports = router;