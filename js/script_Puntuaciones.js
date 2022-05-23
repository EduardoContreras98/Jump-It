
$(document).ready(function() {

    var NombreUsuarioHeaderCanvas=document.getElementById('NombreUsuarioHeaderCanvas').value;


    $('#NombreGanadorHighscore').on('change', function() {

        var NombreGanadorHighscore=document.getElementById('NombreGanadorHighscore').value;
        const TipoDeModoJuego = document.getElementById('TipoDeModoJuego').value;

    
        if(NombreGanadorHighscore != ""){

          var texto=$('#NombreGanadorHighscore').val();
          var reg=/^(?=.*[a-zA-Z0-9]).{0,0}$/g; 

          if (texto.match(reg)) { 

            if (TipoDeModoJuego == 1){
                
                window.localStorage.setItem('NombreUsuarioKey01',NombreGanadorHighscore);
              } else if (TipoDeModoJuego == 2) {
               
                window.localStorage.setItem('NombreUsuarioKey02',NombreGanadorHighscore);
              }

          } else
        {
            alert("Nombre no valido");
            document.getElementById('NombreGanadorHighscore').value = NombreUsuarioHeaderCanvas;

            if (TipoDeModoJuego == 1){
                
                window.localStorage.setItem('NombreUsuarioKey01',NombreUsuarioHeaderCanvas);
              } else if (TipoDeModoJuego == 2) {
               
                window.localStorage.setItem('NombreUsuarioKey02',NombreUsuarioHeaderCanvas);
              }
        } 
    
    }
       
    });


});

function CambioUsuario(){
    var NombreGanadorHighscore=document.getElementById('NombreGanadorHighscore').value;
    const TipoDeModoJuego = document.getElementById('TipoDeModoJuego').value;


    if(NombreGanadorHighscore != ""){

      var texto=$('#NombreGanadorHighscore').val();
      var reg=/^(?=.*[a-zA-Z0-9]).{1,}$/g; 

      if (texto.match(reg)) { 

        if (TipoDeModoJuego == 1){
            
            window.localStorage.setItem('NombreUsuarioKey01',NombreGanadorHighscore);
          } else if (TipoDeModoJuego == 2) {
           
            window.localStorage.setItem('NombreUsuarioKey02',NombreGanadorHighscore);
          }

      } else
    {
        alert("Nombre no valido");
        document.getElementById('NombreGanadorHighscore').value = NombreUsuarioHeaderCanvas;

        if (TipoDeModoJuego == 1){
            
            window.localStorage.setItem('NombreUsuarioKey01',NombreUsuarioHeaderCanvas);
          } else if (TipoDeModoJuego == 2) {
           
            window.localStorage.setItem('NombreUsuarioKey02',NombreUsuarioHeaderCanvas);
          }
    } 

}
}


function CargarTablaDePuntuaciones(){

  const UsuarioHighscoreCooperativo = document.getElementById('UsuarioHighscoreCooperativo');
  const ScoreHighscoreCooperativo = document.getElementById('ScoreHighscoreCooperativo');
  const UsuarioHighscoreCompetitivo = document.getElementById('UsuarioHighscoreCompetitivo');
  const ScoreHighscoreCompetitivo = document.getElementById('ScoreHighscoreCompetitivo');


  var NombreUsuarioKey01 = localStorage.getItem("NombreUsuarioKey01");
  var highscore01 = localStorage.getItem("highscore01");
  var NombreUsuarioKey02 = localStorage.getItem("NombreUsuarioKey02");
  var highscore02 = localStorage.getItem("highscore02");

  if(highscore01 != null){

    UsuarioHighscoreCooperativo.textContent = NombreUsuarioKey01;
    ScoreHighscoreCooperativo.textContent = highscore01;
} else{

  UsuarioHighscoreCooperativo.textContent = "JugadorName"
    ScoreHighscoreCooperativo.textContent = "0";

}

if(highscore02 != null){

  UsuarioHighscoreCompetitivo.textContent = NombreUsuarioKey02;
  ScoreHighscoreCompetitivo.textContent = highscore02;
} else{

  UsuarioHighscoreCompetitivo.textContent = "JugadorName"
  ScoreHighscoreCompetitivo.textContent = "0";

}



}