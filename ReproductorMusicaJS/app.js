//Seleccionar los elementos con los cuales vamos a trabajar
const titulo = document.querySelector('.reproductor-musica h1');
const nombres = document.querySelector('.reproductor-musica p');
const cancion = document.getElementById('cancion');
const progreso = document.getElementById('progreso');
const btnAtras = document.querySelector('.controles button.btn-atras');
const btnAdelante = document.querySelector('.controles button.btn-siguiente');
const btnReproducir = document.getElementById('iconControl');
const iconoIniciarPausar = document.querySelector('.controles button.btn-iniciar-pausar');
// Creo un array de objetos
const canciones = [
    {
        titulo: 'Perro Negro',
        nombre: 'Bad Bunny ft. Feid',
        fuente: 'music/Bad Bunny ft. Feid - Perro Negro.mp3'
    },
    {
        titulo: 'Sexto Sentido',
        nombre: 'Bad Bunny x Gigolo & La Exce',
        fuente: 'music/Bad Bunny x Gigolo & La Exce - Sexto Sentido.mp3',
        
    },
    {
        titulo: 'Acho PR',
        nombre: 'Bad Bunny, Arcangel, De La Ghetto & Ñengo Flow',
        fuente: 'music/Bad Bunny, Arcangel, De La Ghetto & Ñengo Flow - Acho PR.mp3',
        
    }
];
// Creo un indice y una funcion para leer los objetos e ir cambiando los datos.
let indice = 0;

function actualizarMusica () {
    titulo.textContent = canciones[indice].titulo;
    nombres.textContent = canciones[indice].nombre;
    cancion.src = canciones[indice].fuente;
    cancion.addEventListener('loadeddata', function(){
        // De esta forma hago que se actualice automaticamente los datos al cargarse
    });
};

iconoIniciarPausar.addEventListener('click', reproducirPausar);
// adelante.addEventListener('click', cambiarCancionAdelante);
function reproducirPausar(){
    if (cancion.paused){
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

function reproducirCancion () {
    cancion.play();
    btnReproducir.classList.add('bi-pause-btn-fill');
    btnReproducir.classList.toggle('bi-play-btn-fill');
};

function pausarCancion () {
    cancion.pause();
    btnReproducir.classList.add('bi-play-btn-fill');
    btnReproducir.classList.togle('bi-pause-btn-fill');
};

cancion.addEventListener('timeupdate', function(){
    if (cancion.play)
        {
            progreso.value = cancion.currentTime;
        }
});

progreso.addEventListener('input', function () {
    cancion.currentTime = progreso.value;   
});
//Con el change le digo donde mueva el valor del range inicie
progreso.addEventListener('change', function(){
    reproducirCancion();
});

btnAdelante.addEventListener('click', function() {
        indice = (indice + 1) % canciones.length;
        actualizarMusica();
        reproducirCancion();
});

btnAtras.addEventListener('click', function() {
        indice = (indice - 1) % canciones.length;
        actualizarMusica();
        reproducirCancion();
});

actualizarMusica();
