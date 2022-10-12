const User = require('../models/user');


module.exports.signIn = function(req,res) {
    return res.render('admin-sign-in', {
      title: 'Admin Sign In'
  });
}

module.exports.createSession = function(req,res){
    console.log(req.body);
    User.findOne({email:req.body.email}, function(err,user){
      if(err){
        console.log('error in signing in user');
        return;
      }
  
      if(user){
        if(user.password != req.body.password){
          console.log('1234');
          return res.redirect('back');
        }
        res.cookie('user_id',user.id);
        console.log('5678');
        return res.redirect('/songd/create');
  
      }else{
        console.log('9090');
        return res.redirect('back');
      }
    })
}  