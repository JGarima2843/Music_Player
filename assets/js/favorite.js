const { application } = require("express");
const favorite = require("../../models/favorite");

const trigger = document.querySelector(".trigger");
  trigger.addEventListener("click", () => {
    const fullTextSibling = trigger.previousElementSibling;
    fullTextSibling.classList.add("active");
    const closeModal = document.querySelector(".full_text > div");
    closeModal.addEventListener("click", () =>{
        fullTextSibling.classList.remove("active");
    })
  })

  

  // const audioInfo = document.querySelector(".audio-info");
  // const heart = document.querySelector(".heart");
  // heart.addEventListener("click", function onClick(){
  //   favorite_list.push('audioInfo');
    
  // })
  
     
  //   app.get('/user/favorite', function(req,res ){
       
  //    favorite.find({}, function(err, favorite){
  //        if(err){
  //            console.log('Error is fetching favorite from db');
  //            return;
  //        }
  //       console.log(favorite);
  //      return res.render('favorite', {
  //          title: "Favorite",
  //          favorite_list: favorite_list
  //     });
  //    }) 
  //   });
    
  //   app.get('/favorite',  function(req,res){
  //     console.log(req.query);
  //     // let id = req.query.id;
       
  //     favorite.findByIdAndUpdate (favorite_list,(err)=>{
  //         if(err){console.log (err); return}
          
  //         return res.redirect('back'); 
  
  //     })
  // })

  //    app.get('/liked-song', function(req,res){
  //      console.log('************', req.body);
  //      favorite.create({
  //          name: req.body.name,
  //          author: req.body.author,
  //          img: req.body.img
  //      }, function(err, newFavorite){
  //          if(err){console.log('error is creating', err)
  //      return;}
  //      console.log('********',newFavorite)
  //      return res.redirect('back');
  //      });
  //   });

// app.get('/heart', function(req,res){
  // console.log(req.query)
//   let id = req.query.id;

//   favorite.findById(id,(err)=>{
//     if(err){console.log(err); return}
 
//     return res.redirect('back');
//   })
// })
    
     
    