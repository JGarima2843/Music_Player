const express = require('express');
const passport = require('passport');
const router = express.Router();


const favPageController = require('../controllers/Favouritepage_controller');

router.post('/create', favPageController.fetch);
router.get('/', passport.checkAuthentication ,favPageController.create);

module.exports = router;