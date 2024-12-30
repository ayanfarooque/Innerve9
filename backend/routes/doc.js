const express = require('express');
const router = express.Router();
const { handleDoc } = require('../controllers/doc_controller');

router.get('/', handleDoc);

module.exports = router;