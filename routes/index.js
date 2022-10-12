const express = require('express');
const router = express.Router();

const homeController = require("../controllers/home_controller");

console.log('router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.get('/arjit', require('./arjit'));
router.get('/guru', require('./guru'));
router.use('/favorite',require('./favorite'));
router.use('/songdetail',require('./songdetail'));
router.use('/songd',require('./songd'));
router.use('/FavoriteP',require('./FavoriteP'));
router.use('/admin', require('./admin'));
module.exports = router;
