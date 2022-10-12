const express = require('express');
const router = express.Router();
const passport = require('passport');

const favoriteController = require('../controllers/favorite_controller');
// const favPageController = require('../controllers/Favouritepage_controller');


// router.get('/create', favoriteController.create);
router.get('/user', favoriteController.getfav);
router.get('/?',passport.checkAuthentication,favoriteController.addtofav);

module.exports = router;