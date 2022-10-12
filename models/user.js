const mongoose = require('mongoose');

// const multer = require('multer');
// const path = require('path');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
       type: String,
       required: true,
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FavoriteP'
        }
       
    ]

},  
    {
        timestamps: true
    }); 


// let storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, path.join(__dirname, '..'));
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// })

// userSchema.statics = multer({storage: storage});

const User = mongoose.model('User', userSchema);

module.exports = User;