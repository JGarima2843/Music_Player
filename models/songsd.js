const mongoose = require('mongoose');
// const userId = req.cookies.user_id;

const songsdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
   
    image:{
        type: String,
        required: true
    },
    song:{
        type: String,
        required: true
    },
     
    

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
 
    // favorites: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'favorites'
    //     }
    // ]
})

const songsd = mongoose.model('songsd', songsdSchema);
module.exports = songsd;
