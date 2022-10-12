const favorite = require('../models/favorites');



module.exports.heart = function(req,res) {
    return res.render(favorite,favorite.push(favoriteSchema))

}