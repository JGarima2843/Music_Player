const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require("../controllers/users_controller");
//  const FavoriteController = require("../controllers/favorite_controller");
// const playlistController = require('../controllers/playlist_controller');
// const heartController = require('../controllers/heart_controller');
 
console.log('user loaded');

// router.get('/profile',userController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
// router.get('/:id',usersController.addtofav);


router.post('/create', usersController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),usersController.createSession);

// router.get('/Favorite', favoriteController.favorite);
// router.get('/playlist', playlistController.playlist);
// router.get('/Favorite',heartController.heart);
// router.get('/favorite', fav)
// router.get('/favorite', FavoriteController.favorite)



module.exports = router;
