// Pegando as classes e guardando em variaveis
let now_playing = document.querySelector('.now-playing');
let banner = document.querySelector('.banner');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek-slider');
let volume_slider = document.querySelector('.volume-slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');


// Variaveis 
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

// Array de musicas
const music_list = 
[
    {
        img: './img/banner.png',
        name: 'Make You Mine',
        artist: 'Aire Atlantica e Ameria',
        music: './musics/track1.mp3'
    },

    {
        img: './img/banner.png',
        name: 'Problem (ft. Iggy Azalea)',
        artist: 'Ariana Grande',
        music: './musics/track2.mp3'
    },

    {
        img: './img/banner.png',
        name: 'Aint Shit',
        artist: 'Doja Cat',
        music: './musics/track3.mp3'
    }
]

// carrega a musica de acordo com o index
loadTrack(track_index);

// Função para carregar a musica
function loadTrack(track_index)
{
    clearInterval(updateTimer);
    reset();

    //pega a musica na array de acordo com o index 
    curr_track.src = music_list[track_index].music;
    curr_track.load();

    // Pega o banner [FORMA SEM TER CARROUCEL NO CSS, COMO SE FOSSE CAPA DE CD]
    banner.style.backgroundImage = "url(" + music_list[track_index].img + ")";

    // Pegando nome da musica
    track_name.textContent = music_list[track_index].name + " - " + music_list[track_index].artist;

    // Setando legenda 
    //now_playing.textContent = "Tocando : " + (track_index + 1) + " de " + music_list.length;

    // Setando intervalo
    updateTimer = setInterval(setUpdate, 1000);

    // Setando listener que pula pra proxima musica sozinho.
    curr_track.addEventListener('ended', nextTrack);
}


// Função que reseta o tempo da musica
function reset()
{
    curr_time.textContent = '00:00';
    total_duration.textContent = '00:00';
    seek_slider.value = 0;
}

// Função de randomização das musicas
function radomTrack()
{
    isRandom ? pauseRandom() : playRandom();
}

// Função para dar play em musica no random
function playRandom()
{
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

// Função para parar  de dar play no random.
function pauseRandom()
{
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

// Função para repetir musica
function repeatTrack()
{
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

// Tocando / pausando a musica
function playpauseTrack()
{
    isPlaying ? pauseTrack() : playTrack();
    curr_track.volume = volume_slider.value / 100;
}

// Inicia a musica
function playTrack()
{
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}

// pausa a musica
function pauseTrack()
{
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}

// Inicia janela tocando alguma musica randomicamente entre as 3 da array
function autoStartRandom()
{
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
    curr_track.volume = volume_slider.value / 100;
    loadTrack(track_index);
    playTrack();
}

// Pulando para a proxima musica
function nextTrack()
{
    if(track_index < music_list.length - 1 && isRandom === false)
    {
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true)
    {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

// Voltando para a musica anterior
function prevTrack()
{
    if(track_index > 0)
    {
        track_index -= 1;
    } else {
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

// Função para buscar posição da musica.
function seekTo()
{
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

// Função para setar volume da musica
function setVolume()
{
    curr_track.volume = volume_slider.value / 100;
}

// Função para atualizar posição do tempo da musica no slider.
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration))
    {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}