// const { $where } = require("../../models/user");

const music = new Audio ('./sounds/Galti-Se-Mistake.mp3');



const songs = [
   {
       id: '1',
       songName:`bekayali
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/1.jpg"
   },
   {
       id: '2',
       songName:`saki saki 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/2.jpg"
   },
   {
       id: '3',
       songName:`Zara-Zara</p>
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/3.jpg"
   },
   {
       id: '4',
       songName:`pagal
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/4.jpg"
   },
   {
       id: '5',
       songName:`Excuse
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/5.jpg"
   },
   {
       id: '6',
       songName:`Kala Tikka 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/6.jpg"
   },
   {
       id: '7',
       songName:`Temporary pyaar
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/7.jpg"
   },
   {
       id: '8',
       songName:`Hide karke
       <div class="subtitle">AUG 2019</div>`,
       poster:"images/8.jpg"
   },
   {
       id: '9',
       songName:`Jugnu
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/9.jpg"
   },
   {
       id: '10',
       songName:`Srivalli 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/10.jpg"
   },
   {
       id: '11',
       songName:`Baarish
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/11.jpg"
   },
   {
       id: '12',
       songName:`Teri Adda
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/12.jpg"
   },

   {
       id: '13',
       songName:`Galti Se Mistake <br>
       <div class="subtitle">Arjit Singh</div>`,
       poster:"/images/13.jpg"
   },
   {
       id: '14',
       songName:`Mere Yaara 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/14.jpg"
   },
   {
       id: '15',
       songName:`Desh Mere 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/15.jpg"
   },
   {
       id: '16',
       songName:`Khairiyat 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/16.jpg"
   },
   {
       id: '17',
       songName:`Dhoka 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/17.jpg"
   },
   {
       id: '18',
       songName:`Tera Fitoor 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/18.jpg"
   },
   {
       id: '19',
       songName:`Hawayein 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/19.jpg"
   },
   {
       id: '20',
       songName:`Pal 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/20.jpg"
   },
   {
       id: '21',
       songName:`Thodi Jagah 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/21.jpg"
   },
   {
       id: '22',
       songName:`Pachtaoge 
       <div class="subtitle">AUG 2019</div>`,
       poster:"/images/22.jpg"
   },
   

]

Array.from(document.getElementsByClassName('artist')).forEach((element, i)=>{
   element.getElementsByTagName('img')[0].src = songs[i].poster;
   element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('play');

masterPlay.addEventListener('click',()=>{
   if (music.paused || music.currentTime <=0) {
       music.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
   } else{
       music.pause();
       masterPlay.classList.add('fa-play');
       masterPlay.classList.remove('fa-pause');
   }
})

const makeAllPlays = () =>{
   Array.from(document.getElementsByClassName('bi')).forEach((element)=>{
           element.classList.add('fa-play');
           element.classList.remove('fa-pause');
       })
    }

    const makeAllBackgrounds = () =>{
       Array.from(document.getElementsByClassName('artist')).forEach((element)=>{
                element.style.background = "rgb(105, 105, 170, 0) ";
           })
        }


let index = 0;
let cover = document.getElementById('cover');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('bi')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
       index = e.target.id;
       makeAllPlays();
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause');
        music.src = `sounds/${index}.mp3`;
        music.play();
       cover.src = `images/${index}.jpg`;
       
       let song_title = songs.filter((ele)=>{
           return ele.id == index;
       })

       song_title.forEach(ele =>{
           let {songName} = ele;
           title.innerHTML = songName;    
       })
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
       music.addEventListener('ended',()=>{
           masterPlay.classList.add('fa-play');
           masterPlay.classList.remove('fa-pause');
       })
       makeAllBackgrounds();
      // Array.from(document.getElementsByClassName('artist'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1) ";
   })
})

let currTime = document.getElementById('currTime');
let durTime = document.getElementById('durTime');
 let seek = document.getElementById('seek');
 let bar2 = document.getElementById('bar2');
 let dot = document.getElementsByClassName('dot')[0];
 let bar = document.getElementsByClassName('bar');
function updateProgress(e) {
   const { duration, currentTime } = e.srcElement;
   const progressPercent = (currentTime/duration) * 100;
   bar2.style.width = `${progressPercent}%`;
}



music.addEventListener('timeupdate', updateProgress);
//     let music_curr = music.currTime;
//     let music_dur = music.durTime;

//     let min = Math.floor(music_dur/60);
//     let sec = Math.floor(music_dur%60);
//     if (sec<10) {
//         sec = `0${sec}`
//     }
//     durTime.innerText = `${min}:${sec}`;

//     let min1 = Math.floor(music_curr/60);
//     let sec1 = Math.floor(music_curr%60);
//     if (sec1<10) {
//         sec1 = `0${sec1}`
//     }
//     currTime.innerText = `${min1}:${sec1}`;

   let progressbar = parseInt((music.currentTime/music.duration)*100);
   seek.value = progressbar;
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;
//  });




music.addEventListener('timeupdate', DurTime);


function DurTime(e){
   const{duration,currentTime} = e.srcElement;
   var sec;
   var sec_d;

   //define minute ct
   let min = (currentTime==null)? 0:
   Math.floor(currentTime/60);
   min = min < 10 ? '0'+min:min;


   //define seconds ct
   function get_sec (x){
       if(Math.floor(x) >= 60) {
           for ( var i = 1; i<=60; i++){
               if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))){
                   sec = Math.floor(x) - (60*i);
                   sec = sec < 10 ? '0'+sec:sec;
               }
           }
       }else{
           sec = Math.floor(x);
           sec = sec < 10 ? '0'+sec:sec;
   }
}
   get_sec (currentTime,sec);

   //change currentTime dom
   currTime.innerHTML = min +':'+ sec;

   //define minute duration
   let min_d = (isNaN(duration)===true)? '0':
      Math.floor(duration/60);
      min_d =min_d <10 ? '0'+min_d:min_d;


   function get_sec_d (x) {
       if(Math.floor(x) >=60){

           for(var i = 1; i<=60; i++){
               if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))){
                   sec_d = Math.floor(x) - (60*i);
                   sec_d = sec_d < 10 ? '0'+sec_d:sec_d;
               
               }
           }
       }else{
           sec_d = (isNaN(duration) === true)? '0':
           Math.floor(x);
           sec_d = sec_d <10 ? '0'+sec_d:sec_d;
       }
   }

   //define second duration

   get_sec_d (duration);

   //change duration dom

   durTime.innerHTML = min_d +':'+ sec_d;
  
};



//volumeIcon.addEventListener('click', muteSound);

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () =>{
   if (vol.value == 0) {
       vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.add('bi-volume-mute-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
   }
   if (vol.value > 0) {
       vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-mute-fill');
       vol_icon.classList.add('bi-volume-down-fill');
   }
   if (vol.value < 0) {
       vol_icon.classList.add('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-mute-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
   }
   let vol_a = vol.value;
   vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left = `${vol_a}%`;
   audio.volume = vol_a/100;

})

let back = document.getElementById('prev');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
   index--;
   if(index < 1) {
       index = Array.from(document.getElementsByClassName('artist')).length;
   }
   music.src = `sounds/${index}.mp3`;
   music.play();
  cover.src = `images/${index}.jpg`;
  
  let song_title = songs.filter((ele)=>{
      return ele.id == index;
  })

  song_title.forEach(ele =>{
      let {songName} = ele;
      title.innerHTML = songName;    
  })
  makeAllPlays()

  document.getElementById(`${index}`).classList.remove('fa-play');
  document.getElementById(`${index}`).classList.add('fa-pause');
})

next.addEventListener('click', ()=>{
   index++;
   if(index > Array.from(document.getElementsByClassName('artist')).length) {
       index = 1;
   }
   music.src = `sounds/${index}.mp3`;
   music.play();
  cover.src = `images/${index}.jpg`;
  btn.style.color = 'white';
  
  let song_title = songs.filter((ele)=>{
      return ele.id == index;
  })

  song_title.forEach(ele =>{
      let {songName} = ele;
      title.innerHTML = songName;    
  })
  makeAllPlays()

  document.getElementById(`${index}`).classList.remove('fa-play');
  document.getElementById(`${index}`).classList.add('fa-pause');
})


// let INDEX = 0;

// const colors = ['white', 'red'];

// btn.addEventListener('click', function onClick(){
//    btn.style.background = 'rgb(34,32,32)';
//    btn.style.color = colors[INDEX];
//    console.log('added favorite');
//    INDEX = 1-INDEX;
// //    INDEX = INDEX => colors.length -1 ? 0 : INDEX + 1;
//         // INDEX = INDEX => colors.length 0 ? 1 : INDEX - 1;
// });
//  const btn = document.getElementById('test');
// console.log('fav');

// function myFunction(){
    
//     let INDEX = 0;

// const colors = ['white', 'red'];

// for (var i = 0 ; i < btn.INDEX; i++) {

// btn.addEventListener('click', function onClick(){
//     console.log('f');
//    btn.style.background = 'rgb(34,32,32)';
//    console.log('a');
//    btn.style.color = colors[INDEX];
//    console.log('added favorite');
//    INDEX = 1-INDEX;
// }
// )

// function changecolor(e){
//     console.log(e);
//     var red = document.getElementsByClassName(e.target.changecolor);
//     red[0].addEventListener(click,function onClick(){
//         for(let item of red ){
//             item.style.color = 'red';
//         }
//     })
    
// }


let buttons = document.querySelectorAll(".test");
buttons.forEach((button)=> {

    button.addEventListener("click", function(){
      console.log(button.childNodes);
        
        let like = button.childNodes[1].style.color ;
        if(like === 'red'){
            button.childNodes[1].style.color = 'white';
        }else{
            button.childNodes[1].style.color = 'red';
        }
       
       
    })
});

// let color = document.getElementsByClassName('color');
// // color.forEach((button)=>{
//     for (let button of color) {
//         button.addEventListener('click',function(e){
//             e.preventDefault();
//          })
//     }
    
// })

//  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
// </script> 


// $document.ready(function(){
// var trigger = $('div li a');
//    container = $('#content');

// trigger.on('click', function(){
//   var $this = $(this),
//   target = $this.data('target');

//   container.load(target + '.js');

//   return false;
// });
// })
// function fetchRandomlike(){
// $.ajax({
//     url: '/users/<%=song.id%>' ,
//     method: 'get',
//     success: function(data){
//         var like = data.message;
//         $('#likes').attr('src',like);
//     }
// })
// }

// $('#like-button').click(fetchRandomlike)

$("#like-button").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var onekg = document.getElementById("onekg").value;
    var totalPrice = document.getElementById("totalPrice").value;
  
    var data = {};
    data.onekg = onekg;
    data.totalPrice = totalPrice;
  
    $.ajax({
      url: "/update-shopping-cart",
      type: "POST",
      data: data,
    })
      .done(function (result) {
        updateDOM(result);
      })
      .fail(function (err) {
        console.log(err);
      });
  });
  
  var updateDOM = function (result) {
    var totalPrice_div = document.getElementById("price_span");
  
    totalPrice_div.innerHTML = result;
  };


 

