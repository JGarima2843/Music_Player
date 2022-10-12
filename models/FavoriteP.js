const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
        name: {
            type: String,
            // required: true
        },
        author: {
            type: String,
            // required: true
        },
        
        image: {
            type: String,
            // required: true
            
        },

        songId: {
            type:String,
            required: true
        },
    
        song: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'songsd'
            // require: true
        },
    
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }) 
    
    
    
    const favorite = mongoose.model('FavoriteP', favoriteSchema);
    module.exports = favorite;
    
    