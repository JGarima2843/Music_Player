const favorites = require('../models/favorites');
const Song=require('../models/songsd');
// const { find } = require('../models/user');


module.exports.fetch = async function(req,res){
    console.log(req.body);
    try{
        let favPageSong = await favorites.create({
            name:req.body.name,
            author:req.body.author,
            image: req.body.image,
            song: req.body.song
        });

        favPageSong.save();
    }catch(err){
        return res.redirect('back');
    }
}

module.exports.create = async function(req,res){
    console.log(req.user);
   const id=req.user._id ;
   console.log(typeof(id));

    var favSongs = await favorites.findOne({userId:req.user._id})
    //       ,function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //     // console.log(favSongs);
    //     }
    // })
    //  .clone().catch(function(err){ console.log(err)})
    console.log(favSongs);
    const songDetail=[];
    const tr=favSongs.songId;
    console.log(tr);
    console.log(favSongs.songId);
    for(e of tr){
        const ele=e;
        const s=await Song.findById({_id:ele})
        //     ,function(err){
        //     if(err){
        //         console.log(err);
        //     }
        // });
        console.log(s);

        songDetail.push(s);

    }

    console.log("array of fav  ",songDetail);
    console.log("1 :" ,favSongs);
    return res.render('favorite',{
        title: 'Favorite Songs',
        favorite: songDetail
    }) 
}
