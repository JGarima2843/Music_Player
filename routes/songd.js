const express = require('express');
const router = express.Router();

const songdController = require('../controllers/songsd_controller');

router.post('/fetch', songdController.fetch);
router.get('/create', songdController.create);


module.exports = router;