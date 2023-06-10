//alert('test')
console.log("welcome to spotify");
// initilize the variables
let songIndex =0;
let audioElement= new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let giff = document.getElementById('giff');
let masterSongName =document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    
{songName:"warriyo",filepath:"songs/1.mp3",coverPath: "covers/1.jpg"},
{songName:"cielo",filepath:"songs/2.mp3",coverPath: "covers/2.jpg"},
{songName:"deaf",filepath:"songs/3.mp3",coverPath: "covers/3.jpg"},
{songName:"different heven",filepath:"songs/4.mp3",coverPath: "covers/4.jpg"},
{songName:"jane heros",filepath:"songs/5.mp3",coverPath: "covers/5.jpg"},
{songName:"Salam-e-Ishq",filepath:"songs/6.mp3",coverPath: "covers/6.jpg"}, 
{songName:"meeray khoboo mai jo",filepath:"songs/7.mp3",coverPath: "covers/7.jpg"},  
 
]
songItem.forEach((element,i)=>{
   //console.log(element,i);
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})

//let audioElement =new Audio('1.mp3');
//audioElement.play();
//Handleplay pause click
masterPlay.addEventListener('click',()=>{
 if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    giff.style.opacity=1; 
 }
 else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    giff.style.opacity=0; 
 }
})

//ListenToEvents

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update SeekBar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{

   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
   })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
      // console.log(e.target);
      makeAllPlays();
     songIndex  = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src = 'songs/${songIndex+1}.mp3';//check this u have to update
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
   })
})
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>6){
      songIndex=0
   }else{
    songIndex +=1;
   }
   audioElement.src= 'songs/${songIndex+1}.mp3';
   audioElement.currentTime =0;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
   
})

document.getElementById('previous').addEventListener('click',()=>{
   if(songIndex<=0){
      songIndex=0
   }else{
    songIndex -=1;
   }
   audioElement.src= 'songs/${songIndex+1}.mp3';
   audioElement.currentTime =0;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
   
})

