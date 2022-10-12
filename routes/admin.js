const express = require('express');
const router = express.Router();
const passport = require('passport');

const adminController = require('../controllers/admin_controller');

router.get('/sign-in', adminController.signIn );

router.post('/create-session', adminController.createSession);

module.exports = router;

