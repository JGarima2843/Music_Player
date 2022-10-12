const FavoriteP = require('../models/FavoriteP');
const Like = require('../models/like');
const User = require('../models/user');

module.exports.toggleLike = async function(req,res){
    try{
        let likeable;
        if (req.query.type == 'User'){
            likeable = await User.findById(req.query.id).populate('likes');
        }else{
            return;
        }

        let existingLike = await Like.findOne({
            likeable: req.query.id,
            FavoriteP: req.query.type,
            user: req.user._id
        })
        if (existingLike){
           return res.redirect('back');

        }else{
            // else make a new like

            let newLike = await Like.create({
                user: req.user._id,
                likeable: req.query.id,
                FavoriteP: req.query.type
            });

            likeable.likes.push(newLike._id);
            likeable.save();

        }

    } catch(err){
        console.log(err);
        
    }
}