console.log("welcome to spotify");

let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "salam-e-ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"}
]

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play')
    }
})
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
})


