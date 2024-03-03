import { listaMusica } from "./Dependencies.js";

let btnAnterior = document.getElementById("btnAnterior");
let btnReproducir = document.getElementById("btnReproducir");
let btnSiguiente = document.getElementById("btnSiguiente");
let audio = document.getElementById("audio");


listaMusica.cargarCancion();
listaMusica.cargarImagen();

audio.addEventListener('ended',function(){
    listaMusica.volverInicio();
    listaMusica.cancionSiguiente();
    
})
audio.addEventListener('timeupdate',function(){
    listaMusica.actualizarTiempo();
})
btnReproducir.addEventListener('click',function(){
    listaMusica.reproducirAudio();
})

btnAnterior.addEventListener('click',function(){
    listaMusica.cancionAnterior();
})
    
btnSiguiente.addEventListener('click',function(){
    listaMusica.cancionSiguiente();
})