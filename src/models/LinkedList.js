export class LinkedList{
    #canciones = ['Netflix & Chill', 'Adventure', 'New Beginning','Beat It','Billie Jean','Im bad','Smooth Criminal','Thriller'];
    #posicion=0;
    #Reproduciendo = false;
    #titulo = document.getElementById("titulo");
    #image = document.getElementById("image");
    #audio = document.getElementById("audio")
    #progreso = document.getElementById("progreso");

reproducirAudio(){
    if(this.#Reproduciendo){
        this.pausarCancion();
        btnReproducir.textContent = "Play";
    }else{
        this.reproducirCancion(audio);
        btnReproducir.textContent = "Pause"
    }
    this.#Reproduciendo = !this.#Reproduciendo;
    console.log(this.#posicion)
}

volverInicio(){
    if(this.#canciones.length==this.#posicion+1){
        this.#posicion=-1;
    }
}

volverFinal(){
    if(this.#posicion==0){
        this.#posicion=3;
    }
}

actualizarTiempo(){
    let valor = this.#audio.currentTime / audio.duration;
    this.#progreso.value = valor;
}

cargarCancion(){
    this.#titulo.innerText = this.#canciones[this.#posicion];
    this.#audio.src = `./src/music/${this.#canciones[this.#posicion]}.mp3`
}

cargarImagen(){
    this.#image.src =`./src/images/${this.#canciones[this.#posicion]}.jpg`
}


reproducirCancion(){
    this.#audio.play();
}

pausarCancion(){
    this.#audio.pause();
}

cancionAnterior(){
    this.volverFinal();
    this.#posicion--;
    btnReproducir.textContent = "Pause";
    this.#Reproduciendo=true;
    this.cargarCancion(this.#canciones[this.#posicion])
    this.cargarImagen();
    this.reproducirCancion(this.#audio);
}

cancionSiguiente(){
    this.volverInicio();
    this.#posicion++;
    btnReproducir.textContent = "Pause";
    this.#Reproduciendo=true;
    this.cargarCancion(this.#canciones[this.#posicion]);
    this.cargarImagen();
    this.reproducirCancion(this.#audio);
    }
}
