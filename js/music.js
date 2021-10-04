const play_pause = document.getElementById('play-pause');
const audio_song = document.getElementById('audio-song');
const name_songPlay = document.getElementById('name-songPlay');
const cover_songPlay = document.getElementById('cover-songPlay');
var song_playing = false;
var song_number = 0;
var play_list = document.getElementById('play-list');
var createNodeMusic = false;
var id = "";

//? funtion music
function categoryMusic() {
    document.getElementById('onload-category').style.display = "flex";
    setTimeout(() => {
        document.getElementById('music-category').style.display = "flex"
        document.getElementById('onload-category').style.display = "none";
    }, 1000);
    document.getElementById('title-Page').innerHTML = "Música";
    if (createNodeMusic == false) {
        for (let x = 0; x < songList.length; x++) {
            let divNodeSong = document.createElement('div');
            play_list.appendChild(divNodeSong);
            divNodeSong.setAttribute("class", "song");
            divNodeSong.setAttribute("id", ("song-" + (x + 1)));

            let divNodeList = document.createElement('div');
            divNodeSong.appendChild(divNodeList);
            divNodeList.setAttribute("class", "list_cover");
            
            let imgNode = document.createElement('img');
            divNodeList.appendChild(imgNode);
            imgNode.setAttribute("src", songList[x].songCover);
            imgNode.setAttribute("alt", songList[x].songName);

            let divNodeDetails = document.createElement('div');
                divNodeSong.appendChild(divNodeDetails)
                divNodeDetails.setAttribute("class", "details_song");

                    let pNodeName = document.createElement('p');
                    divNodeDetails.appendChild(pNodeName);
                    pNodeName.setAttribute("class", "song_name");
                    pNodeName.innerHTML = songList[x].songName;
                    
                    let pNodeDuration = document.createElement('p');
                    divNodeDetails.appendChild(pNodeDuration);
                    pNodeDuration.setAttribute("class", "song_duration");
                    pNodeDuration.innerHTML = songList[x].songDuration;
        }
    }
    for (let x = 0; x <  play_list.childElementCount; x++) {
        id = "song-" + (x + 1);
        document.getElementById(id).classList.remove('song_ActivePlay');
    }
    createNodeMusic = true;
    song_playing = false;
    song_number = 0;
    play_pause.classList.remove('active');
    play_pause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    loadSong(songList[song_number]);
    id = "song-" + (song_number + 1);
    document.getElementById(id).classList.add('song_ActivePlay');
    cover_songPlay.style.animationPlayState = "paused";
}
//? song List
const songList = [
    {
        song: "https://jairtorres1003.github.io/files/music/(1)Gym%20Class%20Heroes%20ft.%20Adam%20Levine%20-%20Stereo%20Hearts.mp3",
        songName: "Gym Class Heroes ft Adam Levine  Stereo Hearts",
        songCover: "images/(1)Gym Class Heroes ft. Adam Levine - Stereo Hearts.jpg",
        songDuration: "Duración: 3:30"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(2)Stressed%20Out%20by%20twenty%20one%20pilots.mp3",
        songName: "Stressed Out by twenty one pilots",
        songCover: "images/(2)Stressed Out by twenty one pilots.jpg",
        songDuration: "Duración: 3:22"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(3)Cuarteto%20de%20Nos%20-%20Lo%20malo%20de%20ser%20bueno.mp3",
        songName: "Cuarteto de Nos - Lo malo de ser bueno",
        songCover: "images/(3)Cuarteto de Nos - Lo malo de ser bueno.jpg",
        songDuration: "Duración: 4:02"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(4)Farruko%20-%20Pepas.mp3",
        songName: "Farruko - Pepas",
        songCover: "images/(4)Farruko - Pepas.jpg",
        songDuration: "Duración: 4:47"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(5)Kidd%20Keo%20-%20Ma%20Vie%20feat.%20Yay.mp3",
        songName: "Kidd Keo - Ma Vie feat. Yay",
        songCover: "images/(5)Kidd Keo - Ma Vie feat. Yay.jpg",
        songDuration: "Duración: 3:54"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(6)Nathan%20Evans%20-%20Wellerman.mp3",
        songName: "Nathan Evans - Wellerman",
        songCover: "images/(6)Nathan Evans - Wellerman.jpg",
        songDuration: "Duración: 2:35"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(7)Moves%20like%20Jagger%20-%20Maroon%205%20ft.%20Cristina%20Aguilera.mp3",
        songName: "Moves like Jagger - Maroon 5 ft. Cristina Aguilera",
        songCover: "images/(7)Moves like Jagger - Maroon 5 ft. Cristina Aguilera.jpg",
        songDuration: "Duración: 3:22"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(8)MAGIC!%20-%20Rude.mp3",
        songName: "MAGIC! - Rude",
        songCover: "images/(8)MAGIC! - Rude.jpg",
        songDuration: "Duración: 3:46"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(9)Morat%20%26%20Alvaro%20Soler%20-%20Yo%20Contigo%2C%20Tú%20Conmigo.mp3",
        songName: "Morat & Alvaro Soler - Yo Contigo, Tú Conmigo",
        songCover: "images/(9)Morat & Alvaro Soler - Yo Contigo, Tú Conmigo.jpg",
        songDuration: "Duración: 2:59"
    },
    {
        song: "https://jairtorres1003.github.io/files/music/(10)Maneskin%20-%20Beggin.mp3",
        songName: "Måneskin - Beggin'",
        songCover: "images/(10)Maneskin - Beggin.jpg",
        songDuration: "Duración: 3:31"
    }
];
//? Play or Pause
//!!! play_pause.addEventListener('click', () => (song_playing ? pauseSong() : playSong()));
function playPause() {
    if (song_playing == true) {
        pauseSong();
    } else {
        playSong();
    }
}
//? play music
function playSong() {
    song_playing = true;
    audio_song.play();
    play_pause.classList.add('active');
    play_pause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    cover_songPlay.style.animationPlayState = "running";
}
//? pause music
function pauseSong() {
    song_playing = false;
    audio_song.pause();
    play_pause.classList.remove('active');
    play_pause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    cover_songPlay.style.animationPlayState = "paused";
}
//? prev music
function prevSong() {
    song_number--;
    document.getElementById(id).classList.remove('song_ActivePlay');
    if (song_number < 0) {
        song_number = songList.length - 1;
        id = "song-" + (song_number + 1);
        document.getElementById(id).classList.add('song_ActivePlay');
    }
    id = "song-" + (song_number + 1);
    document.getElementById(id).classList.add('song_ActivePlay');
    loadSong(songList[song_number]);
    playSong();
}
//? next music
function nextSong() {
    song_number++;
    document.getElementById(id).classList.remove('song_ActivePlay');
    if (song_number > songList.length - 1) {
        song_number = 0;
        id = "song-" + (song_number + 1);
        document.getElementById(id).classList.add('song_ActivePlay');
    }
    id = "song-" + (song_number + 1);
    document.getElementById(id).classList.add('song_ActivePlay');
    loadSong(songList[song_number]);
    playSong();
}
//? load muisc
function loadSong(songList) {
    audio_song.src = songList.song;
    name_songPlay.textContent = songList.songName;
    cover_songPlay.src = songList.songCover;
}
//? music Ended
function songEnded() {
    if (song_number != songList.length - 1) {
        nextSong();
    } else {
        document.getElementById(id).classList.remove('song_ActivePlay');
        categoryMusic();
        cover_songPlay.style.animationPlayState = "paused";
    }
}
//? selection play list
function selectSongList(e) {
    //console.log(e.target);//!<---
    for (let x = 0; x <  play_list.childElementCount; x++) {
        if (play_list.children[x] == e.target) {
            song_number = x;
            loadSong(songList[song_number]);
            document.getElementById(id).classList.remove('song_ActivePlay');
            id = "song-" + (song_number + 1);
            document.getElementById(id).classList.add('song_ActivePlay');
            playSong();
        }
    }
}