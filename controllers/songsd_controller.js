
const Songs = require('../models/songsd');

module.exports.fetch = async function(req,res){
    const userId = req.cookies.user_id;
    console.log('userid is found', userId);
    console.log(req.body);
    try{
        let songd = await Songs.create({
            name: req.body.songname,
            author: req.body.author,
            image: req.body.image,
            song: req.body.song,
            user: userId 
     });
    
    songd.save();
    
   let data = await Songs.find();
   console.log(data);
     console.log('executed',songd);
       return res.redirect('/');
       
   }catch(err){
       return res.redirect('back');
   

   }
     
}

module.exports.create = async function(req,res){
    return res.render('songsd',{
        title: 'Songs'
        
    })
     
   
  };
     

