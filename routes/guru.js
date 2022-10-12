const express = require('express');
const router = express.Router();

const guruController = require('../controllers/guru_controller');

router.get('/guru', guruController.guru);

module.exports = router;