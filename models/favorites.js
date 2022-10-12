const mongoose = require('mongoose');

// // const multer = require('multer');
// // const path = require('path');
const favoriteSchema = new mongoose.Schema({

userId: {
    type: String,
    required: true
},

songId:[ 
    {
    
    type: String,
    required: true
    }
]

//     name: {
//         type: String,
//         // required: true
//     },
//     author: {
//         type: String,
//         // required: true
//     },
    
//     image: {
//         type: String,
//         // required: true
        
//     },

//     song: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'songsd'
//         // require: true
//     },

//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
}) 



const favorite = mongoose.model('favorites', favoriteSchema);
module.exports = favorite;

// // let storage = multer.diskStorage({
// //     destination: function(req, file, cb) {
// //         cb(null, path.join(__dirname, '..'));
// //     },
// //     filename: function(req,file,cb) {
// //         cb(null, file.fieldname + '-' + Date.now())
// //     }
// // });

// // favoriteSchema.statics.uploadedAvatar = multer({storage: storage});

// // 
