function openEnvelope() {
    document.getElementById('intro-sobre').style.display = 'none';
    document.getElementById('main-content').classList.remove('hide');
    document.getElementById('main-content').classList.add('show');
    
    let audio = document.getElementById('musica');
    audio.play();
}

function toggleMusica() {
    let audio = document.getElementById('musica');
    let icono = document.getElementById('icono-musica');
    if (audio.paused) {
        audio.play();
        icono.classList.replace('fa-play', 'fa-pause');
    } else {
        audio.pause();
        icono.classList.replace('fa-pause', 'fa-play');
    }
}

// Lógica del Contador
const fechaNoah = new Date("June 16, 2026 13:00:00").getTime();

setInterval(function() {
    const ahora = new Date().getTime();
    const d = fechaNoah - ahora;

    const dias = Math.floor(d / (1000 * 60 * 60 * 24));
    const horas = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    const segs = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
        <div class="timer-box"><div class="num">${dias}</div><div class="lab">DÍAS</div></div>
        <div class="timer-box"><div class="num">${horas}</div><div class="lab">HORAS</div></div>
        <div class="timer-box"><div class="num">${mins}</div><div class="lab">MINS</div></div>
        <div class="timer-box"><div class="num">${segs}</div><div class="lab">SEGS</div></div>
    `;
}, 1000);
