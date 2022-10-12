
const express = require('express');
const router = express.Router();

const arjitController = require("../controllers/arjit_controller");

router.get('/arjit', arjitController.arjit);

module.exports = router;
