function abrirInvitacion() {
    const contenido = document.getElementById("contenido");
    const cover = document.getElementById("cover");
    const musica = document.getElementById("musica");

    // Mostramos el contenido
    contenido.style.display = "block";
    
    // Desvanecemos la portada
    cover.style.opacity = "0";
    setTimeout(() => {
        cover.style.visibility = "hidden";
        iniciarScroll(); // Activamos el efecto scroll
    }, 1200);

    // Intentamos reproducir la música
    if (musica) {
        // Añadimos un pequeño delay para que la transición sea suave
        setTimeout(() => {
            musica.play().catch(e => console.log("Audio en espera de interacción."));
        }, 500);
    }
}

/* CONFIGURACIÓN DE LA FECHA (Corregida a 2026) */
const fechaEventoString = "June 16, 2026 12:00:00"; // Corregido según tu plan original
const fechaEvento = new Date(fechaEventoString).getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaLegible = new Date(fechaEventoString).toLocaleDateString('es-ES', opciones);
    
    // Verificamos que el elemento exista antes de escribir para evitar errores en consola
    const txtFecha = document.getElementById("fecha-texto");
    if(txtFecha) txtFecha.innerHTML = fechaLegible;

    const cuentaElement = document.getElementById("cuenta");
    if (!cuentaElement) return;

    if (diferencia <= 0) {
        cuentaElement.innerHTML = "¡Es hoy!";
        return;
    }

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diferencia % (1000 * 60)) / 1000);

    cuentaElement.innerHTML = `
        ${d}d | ${h.toString().padStart(2, '0')}h | 
        ${m.toString().padStart(2, '0')}m | 
        ${s.toString().padStart(2, '0')}s
    `;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* ANIMACIONES SCROLL */
function iniciarScroll() {
    const elementos = document.querySelectorAll(".animar");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => observer.observe(el));
}
