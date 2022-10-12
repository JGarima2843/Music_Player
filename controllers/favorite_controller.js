const favorites = require('../models/favorites');
const Songs = require('../models/songsd');
// const favorites = require('../models/FavoriteP');
const User = require('../models/user');
// const favorite = require('../models/FavoriteP');



//  module.exports.create = async function(req,res){
//   console.log('controller is running');
//   const userId = req.cookies.user_id;
//   console.log('userid print', userId);
//   console.log(req.body);
 
    // try{
    //     let favorite = await favorites.create({
    //         name: req.body.name,
    //         author: req.body.author,
    //         image: req.body.image,
    //         song: req.body.song,
    //         user: userId
    //  });
    // console.log('favoirte is print',favorite);
    // await favorite.save();


  // Songs.findBy(req.body.favorite,function(err,favorite){
    // if(favorite){
      // favorites.create({
      //   name: req.body.name,
      //   author: req.body.author,
      //   image: req.body.image,
      //   song: req.body.song

       
      // })
  //     let data = await favorites.find();
  //  console.log(data);


  //    console.log('executed',favorite);
  //    return res.redirect('favorite',{
  //     title: 'Favorite'
  //  });
       
  //  }catch(err){
  //      return res.redirect('back');
   

  //  }
     
    // }

    module.exports.getfav = function(req,res){


      console.log(req.url);
      // const favourites=favorite.find({});
      console.log('59 line',favorites)
          return res.render('favorite',{
        title: 'Favorite',
        // FavoriteP:favourites 


     });
    }

    module.exports.addtofav = async function(req,res){
      console.log('line 69',req.url);
      const userId = req.query.userId;
      console.log(typeof(userId))
      const songId = req.query.songId;
      console.log('bsbcjhesb',songId);
      // console.log(req.cookies)
      //let songId = req.params.id;


      const user = await favorites.findOne({userId:userId})  
      // function(err){
      //   if(err){
      //     console.log(err);
      //   }
      // });
      
        // if(err){
        //   console.log(err);
        //   return ;
        // }
        console.log('print',user);
        if(user){
          const song = await favorites.findOne({songId:songId});
          if(song){
            console.log("93");
            console.log(song);
            return res.redirect('back');
          }
          else{

          
        //  favorites.create({
        //  userId:userId,
        //  songId:songId
        //  },function(err,fav){
        //   console.log('new : 104 ',fav);
        //  });

        await  user.songId.push(songId);
        user.save();
        
        return res.redirect("back");      
        }
      }
      else {
        console.log("inside : ");
       const f= favorites.create({
           userId:userId,
           songId:songId.push(songId)
           },function(err){
            console.log('new : 104 ',fav);
           });
           f.save();
           return res.redirect('back');
  


      }
    }
         
        
          // Songs.findById(songId, function(err,song){
          //   if(err){
          //     console.log(err)
          //   }  
          //   let favSong ;
          //   console.log('song jsjsj',song);
          //   favSong=song;
          // let favorites = user.favorites;
          // console.log('vsghavd', favorites);
          // favorites.create({
          //           name: favSong.name,
          //             author: favSong.author,
          //             image: favSong.image,
          //             song: favSong,
          //             user: userId
          //         },function(err,fav){ 
          //           console.log('dashchbs', fav);
    //                 let favAlreadyExists = false;

    //                 for(let i = 0; i < favorites.length; i++) {
    //                   console.log(favorites[i],'favorites i is print');
    //                   console.log('song id is printed',songId)
    //                   if(songId == favorites[i]._id) {
    //                       favAlreadyExists = true;
    //                   }
    //                   if(favAlreadyExists){
    //                     console.log('song already exits')
    //                     return res.redirect('back');  
    //                   }
    //                   if(!favAlreadyExists) {
    //                     favorites.push(fav);
    //                     user.save();
    //                     return res.redirect('/');
    //                     }
    //                     else{
    //                       return res.redirect('back');
    //                     }
    //                 }       
    //         } )
    //      }
    
    //   )}
    //     }
    //       // )
    //     }   
    // // })
  
    //   // })

      
    //     // let songId = req.params.id;
    //     // // console.log(songId);
        // let favSong ;
        
        // User.findById(songId, function(err,song){
        //   if(err){
        //     console.log(err)
        //   }  
        
          // console.log('song jsjsj',song);
          // favSong=song;
          // if(song){
          //   console.log('fbsvcdsbchszkh');
          //   return res.redirect('back');
          // }

          
          // console.log('favSong is print',songId);
          
          // if(!song){
      //     favorites.create({
      //         name: favSong.name,
      //           author: favSong.author,
      //           image: favSong.image,
      //           song: favSong,
      //           user: userId
      //       }, function(err,fav){
      //         console.log('print so g',fav);
      //         let favAlreadyExists = false;
      //         console.log('usr is is printed', userId);
      //         User.findById(userId,function(err,user){
      //          console.log('user is prinetd', user); 
      //           if(err){
      //             console.log(err);
      //           }
      //           if(user){
      //             let favorites = user.favorites;
      //             console.log('vsghavd', favorites);
      //             for(let i = 0; i < favorites.length; i++) {
      //               console.log(favorites[i],'favorites i is print');
      //               console.log('song id is printed',songId)
      //               if(songId == favorites[i]._id) {
      //                   favAlreadyExists = true;
      //               }
      //               if(favAlreadyExists){
      //                 console.log('song already exits')
      //                 return res.redirect('back');
      //               }
      //               if(!favAlreadyExists) {
      //                 favorites.push(fav);
      //                 user.save();
      //                 return res.redirect('/');
      //                 }
      //                 else{
      //                   return res.redirect('back');
      //                 }
      //             }       
      //           }


      //         })
              
              
      //       })

      //     // }
      //   }
      //   // )
      
          
      // // }
 
         