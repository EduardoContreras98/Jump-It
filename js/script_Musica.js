
var MusicEnum = [
    "prueba",
    "a",
    "b",
    "c"
]


function UrlMusic(x) {
    
    //var urlmusic = MusicEnum.x;
    
    switch(x) {
        case "prueba":
            return "recursos/musica/Shes_All_I_Wanna_Be-Tate_McRae.mp3";
        case "a":
            return "recursos/musica/Brush_Strokes.mp3";
        case "b":
            return "recursos/musica/Le_Blues_de_Noel.mp3";
        case "c":
            return "recursos/musica/MalreDeszik's_Holiday_Funk_&_Blues.mp3";
    }

}

function cargaSonido(x) {


    var testDataMusic = !!document.getElementById("MusicGame");

    if (testDataMusic == false){

    var vol = LeerKeysElemento();

    const music = document.createElement("audio");
    music.src = UrlMusic(x);
    music.setAttribute("id", "MusicGame");
    music.setAttribute("preload", "auto");
    music.setAttribute("controls", "none");
    music.style.display = "none"; // <-- oculto
    music.loop =true;
    music.volume =vol;
    music.play();    
    document.body.appendChild(music);
    return music;
    } else {
        alert("Error");
    }
};

function eliminaSonido(x) {


    var testDataMusic = !!document.getElementById("MusicGame");

    if (testDataMusic == true){

        const music = document.getElementById("MusicGame");
        music.remove();

    } else {
        alert("Error");
    }
};

function MusicaPlay(x){


    const music = document.getElementById('MusicGame');
    music.play(); 
   
}

function MusicaPause(x){

    const music = document.getElementById('MusicGame');
    music.loop =true;
    music.pause();
    
   
}

function MusicaReinicio(x){

    const music = document.getElementById('MusicGame');
    music.currentTime = 0;  
   
}

function MusicaStop(x){

    const music = document.getElementById('MusicGame');
    music.pause();
    music.currentTime = 0;
    
   
}

function MusicaCambio(x){

    const music = document.getElementById('MusicGame');
    music.src = UrlMusic(x);
    music.play();
   
}


function Volumen(x){

    var music = document.getElementById('MusicGame');
    const volumen = document.getElementById('VolumenMusic');
    var vol = 0;

    var testDataMusic = !!document.getElementById("MusicGame");

    volumen.oninput= (e) =>{
        vol = volumen.value;
        if (testDataMusic == true){
            music.volume =vol;
            }
    }

     GuardarKeysElemento("VolumenKey", volumen.value);
}



////////////// GUARDADO LOCAL

function GuardarKeysElemento(NombreKey, ContenidoKey){

    //localStorage.setItem("VolumenKey",VolumenKeys);
    localStorage.setItem(NombreKey,ContenidoKey);

}

function LeerKeysElemento(){

    const volumenMusic = document.getElementById('VolumenMusic');
    var volumen = localStorage.getItem("VolumenKey");
    var vol = 0;

        if(volumen != null){

            volumenMusic.value = volumen;
            vol = volumen;
        } else{

            volumenMusic.value = 1;
            vol = 1;
        }

        return vol;

}


function EliminarKeysElemento(NombreKey){

    localStorage.removeItem(NombreKey);

}

