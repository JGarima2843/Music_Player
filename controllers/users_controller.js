const User = require('../models/user');
const Songs = require('../models/songsd');
const favorites = require('../models/favorites')


const fs = require('fs');
const path = require('path');
const e = require('express');

// module.exports.profile = function(req,res) {
//   if(req.cookies.user_id){
//     User.findById(req.cookies.user_id,function(err,user){
//       if(user){
//         res.render('/user_profile',{
//           title: "User Profile",
//           user:user});
//         }
//         return res.redirect('/user/sign-in');
//       });
//     }
//     else{return res.redirect('/user/signIn'); }
//   }
   

module.exports.signUp = function(req,res) {
  return res.render('user_sign_up', {
    title: 'Sign Up'
});
}


module.exports.signIn = function(req,res) {
  return res.render('user_sign_in', {
    title: 'Sign In'
});
  
}

// module.exports.createSession= function(req, res){
//   console.log('session is created',err);
// //    req.flash('success', 'Logged in Successfully!');
//     return res.redirect('/');
// };

module.exports.create = function(req,res){
  if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
  }

  User.findOne({email:req.body.email},function(err,user){
    if(err){
      console.log('error in signing up user');
      return;
    }

  if(!user){
     User.create(req.body, function(err,user){
      if(err){
        console.log('error in creating signing up user');
        return;
      }
     return res.redirect('/users/sign-in');
    });
  }else{
    return res.redirect('back');
  }
  
  })
  
 }

//  module.exports.createSession = function(req,res){
//   return res.redirect('/');
//  }



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
      return res.redirect('/');

    }else{
      console.log('9090');
      return res.redirect('back');
    }
  })
      
}

// module.exports.addtofav = function(req,res){
  // console.log('req-------->',req,req.objectMode);
  // const userId = req.cookies.user_id;
  // console.log(req.cookies);
  // const user = User.find({});
  // console.log('useris found',user);

// const user =  User.findById(userId,(err,user)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('print',user)

// })
  
  
  // if(req.cookies.user_id){
  //   User.findById(req.cookies.user_id, function(err,user){
  //     if(user){
  //       return res.render('home',{
  //         title: 'Home',
  //         user:user
  //       })

  //     }else{
  //       return res.redirecct('/users/sign-in');
  //     }
     
  //   })

  // }else{
  //   return res.redirect('/users/sign-in');
  // }
      
  // let songId = req.params.id;
  // console.log('songId------------->',songId);
  // let favSong ;
  
  
  // Songs.findById(songId, function(err,song){
  //   if(err){
  //     console.log(err)
  //   }
    // console.log(song);
    // favSong=song;
    // console.log('favSong is print',favSong);
    // console.log('user is printed',user);

  //  favorites.create({
      // user: req.user._id,
        // name: favSong.songname,
        //   author: favSong.author,
        //   image: favSong.image,
        //   song: favSong,
        //   user: userId
          
      // } , function(err,fav){
      //   console.log('print so g',fav);
      //   favSong.favorites.push(fav);
      //   favSong.save();
      //   return res.redirect('/');
      // });
      // console.log('favorite is printed', favorites);
   
      // favoS.save();

    
//   })
    
// }

// module.exports.createSession = function(req,res){
//   req.flash('success', 'Logged in successfully');
//   return res.redirect('/');
// }
