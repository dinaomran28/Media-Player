var a = document.getElementsByTagName("audio")[0];
var input = document.getElementById("range");

// console.dir(a);

function play() {
    a.play();
}

function pause() {
    a.pause();
}

function stop() {
    a.load();
    a.pause();
}

function mute() {
    a.muted = !a.muted;
}

function changeVolume(volRange) {
    a.volume = volRange.valueAsNumber;
}

function changeAudio(audioRange) {
    a.currentTime = audioRange.valueAsNumber;
}

window.addEventListener("load", function () {
    //console.log(a.duration);
    input.max = a.duration;
})

var musicList = [
    {
        img: 'images/supermario.jpg',
        song: 'music/Super Mario Bros (NES) Music - Overworld Theme.mp3'
    },
    {
        img: 'images/helium.jpg',
        song: 'music/Sia_-_Helium.mp3'
    },
    {
        img: 'images/hagamestkhbya.jpg',
        song: 'music/Haga_Mestakhabeya_melody4arab.com.mp3'
    },
    {
        img: 'images/badguy.jpg',
        song: 'music/Billie_Eilish_bad_guy_(thinkNews.com.ng).mp3'
    }
]

var trackIndex = 0;

function loadSong(trackIndex) {
    var image = document.getElementById("image");
    image.src = musicList[trackIndex].img;
    a.src = musicList[trackIndex].song;
    trackIndex++;
}

a.addEventListener("durationchange", function () {
    input.max = a.duration;
})

a.addEventListener("timeupdate", function () {
    //console.log("ay7aga");
    input.value = a.currentTime;
})