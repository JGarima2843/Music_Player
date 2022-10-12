const mongoose = require('mongoose');
const FavoriteP = require('./FavoriteP');
const songsd = require('./songsd');
const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId
    },

    likeable: {
        type:mongoose.Schema.ObjectId,
        require: true,
        refPath: 'FavoriteP'
    },

    FavoriteP: {
        type: String,
        required: true,
        ref: 'FavoriteP'
    }
}, {
    timestamps: true
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;