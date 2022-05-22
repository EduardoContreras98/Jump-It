
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