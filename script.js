console.log('welcome to player');
let songIndex = 0;
//Initaializind the variables
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let playButton = document.getElementById('playCircle');
let forwardButton = document.getElementById('forward');
let backwardButton = document.getElementById('backward');
let progressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let smallPlay = Array.from(document.getElementsByClassName('smallPlay'));
let gif = document.getElementById('gif');
let songText = document.getElementById('songText');

let Songs = [
    {
        songName:  'Sheher Ki Ladki - Khandaani Shafakhana (2019)',
        filePath: "songs/0.mp3", coverPath:" covers/1.jpg",
    },{
        songName:  "Brown Rang International Villager 320 Kbps",
        filePath: "songs/1.mp3", coverPath:" covers/2.jpg",
    },{
        songName:  "Desi Kalakaar - YO YO Honey singh",
        filePath: "songs/2.mp3", coverPath:" covers/3.jpg",
    },{
        songName:  "Blow that Smoke - official",
        filePath: "songs/3.mp3", coverPath:" covers/4.jpg",
    },{
        songName:  "Love Yourself- by Justin Beiber ",
        filePath: "songs/4.mp3", coverPath:" covers/5.jpg",
    },


];




playButton.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        songText.innerText = Songs[songIndex].songName;
        alert(" Bhaya gaane mat Baja naa bhaya");
    }
    else{
        audioElement.pause();
        playButton.classList.remove('fa-circle-pause');
        playButton.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
    })

songItems.forEach((element,i)=> {
    // console.log(element,i);
    element.getElementsByClassName('songName')[0].innerText = Songs[i].songName;
    element.getElementsByTagName('img')[0].src = Songs[i].coverPath;
    songText.innerText = Songs[songIndex].songName;
    })

const makeAllPlay = ()=>{
    smallPlay.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

} 

// const makeAllPaused = ()=>{
//     smallPlay.forEach((element)=>{
//         element.classList.add('fa-circle-pause');
//         element.classList.remove('fa-circle-play');
//     })
    // e.classList.add('fa-circle-play');

// } 
smallPlay.forEach((element)=>{
// console.log(element);

element.addEventListener('click', (e)=>{

    if(audioElement.paused){
        // console.log(e.target);
        songIndex = parseInt(e.target.id);
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        songText.innerText = Songs[songIndex].songName;
        gif.style.opacity = 1;
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
    }
    else {
        // console.log(e.target);
        songIndex = parseInt(e.target.id);
        // makeAllPaused();
        e.target.classList.add('fa-circle-play');
        e.target.classList.remove('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        gif.style.opacity = 0;
        playButton.classList.add('fa-circle-play');
        playButton.classList.remove('fa-circle-pause');
        // audioElement.paused();
    }


})})


forwardButton.addEventListener('click', ()=>{

    if(songIndex <= 4){
        songIndex += 1;
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        songText.innerText = Songs[songIndex].songName;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
    }
})


backwardButton.addEventListener('click', ()=>{

    if(songIndex >= 0){
        songIndex -= 1;
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        songText.innerText = Songs[songIndex].songName;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
    }



})













    
  