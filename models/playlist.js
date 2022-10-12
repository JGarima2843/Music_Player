const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    
    }
}) 

const playlist = mongoose.model('playlist', playlistSchema);
module.exports = playlist;