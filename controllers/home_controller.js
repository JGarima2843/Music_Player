const Songs = require('../models/songsd');

module.exports.home = function(req,res) {
    console.log(req.user);
    Songs.find({},function(err,user){
        if(err){
            console.log("error line 7 : ",err);
        }
        console.log("details: " ,user);
        return res.render('home',{
            title: 'newsong',
            songsd: user
          });
     })
    
}