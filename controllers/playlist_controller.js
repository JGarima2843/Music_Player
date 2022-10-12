const playlist = require('../models/playlist');

module.exports.playlist = function(req,res) {
    return res.render('playlist', {
        title: "Playlist"
    })
}