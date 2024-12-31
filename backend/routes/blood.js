const express = require('express');
const router = express.Router();
const { handleBlood } = require('../controllers/blood_controller');

router.get('/', handleBlood);

module.exports = router;