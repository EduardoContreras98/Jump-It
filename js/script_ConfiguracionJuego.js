

function CargarDatosModoCooperativo(){


    var EscenarioModoCooperativo=document.getElementById('EscenarioModoCooperativo').value;

    var menuDificultadCooperativo = document.getElementById("menuDificultadCooperativo");
    var selectedDificultad = menuDificultadCooperativo.options[menuDificultadCooperativo.selectedIndex].text;

    GuardarKeysElementoDatosMenu("EscenarioModoCooperativoKey",EscenarioModoCooperativo);
    GuardarKeysElementoDatosMenu("menuDificultadCooperativoKey",selectedDificultad);
    GuardarKeysElementoDatosMenu("TipoDeJuegoKey","1");

    window.location.href = "Pagina_JuegoCanvas.php";
}

function CargarDatosModoCompetitivo(){

    var EscenarioModoCompetitivo=document.getElementById('EscenarioModoCompetitivo').value;

    var menuDificultadCompetitivo = document.getElementById("menuDificultadCompetitivo");
    var selectedDificultad = menuDificultadCompetitivo.options[menuDificultadCompetitivo.selectedIndex].text;

    GuardarKeysElementoDatosMenu("EscenarioModoCompetitivoKey",EscenarioModoCompetitivo);
    GuardarKeysElementoDatosMenu("menuDificultadCompetitivoKey",selectedDificultad);
    GuardarKeysElementoDatosMenu("TipoDeJuegoKey","2");

    window.location.href = "Pagina_JuegoCanvas.php";

    
}


function ContadorEscenarioMenuCooperativo(){


    var ContadorEscenarioCooperativoInput=document.getElementById('EscenarioModoCooperativo');

    ContadorEscenarioCooperativo = ContadorEscenarioCooperativoInput.value;

    if(ContadorEscenarioCooperativo == 1){
        ContadorEscenarioCooperativo = 2;
        ContadorEscenarioCooperativoInput.value = 2;
    } else{
        ContadorEscenarioCooperativo = 1;
        ContadorEscenarioCooperativoInput.value = 1;
    }


}

function ContadorEscenarioMenuCompetitivo(){


    var ContadorEscenarioCompetitivoInput=document.getElementById('EscenarioModoCompetitivo');

    ContadorEscenarioCompetitivo = ContadorEscenarioCompetitivoInput.value;

    if(ContadorEscenarioCompetitivo == 1){
        ContadorEscenarioCompetitivo = 2;
        ContadorEscenarioCompetitivoInput.value = 2;
    } else{
        ContadorEscenarioCompetitivo = 1;
        ContadorEscenarioCompetitivoInput.value = 1;
    }


}


function GuardarKeysElementoDatosMenu(NombreKey, ContenidoKey){

    localStorage.setItem(NombreKey,ContenidoKey);

}



function LeerKeysTipoDeJuego(){


    const TipoDeModoJuego = document.getElementById('TipoDeModoJuego');
    const EscenarioTipo = document.getElementById('EscenarioTipo');
    const DificultadTipo = document.getElementById('DificultadTipo');

    var TipoDeJuegoKey = localStorage.getItem("TipoDeJuegoKey");
    let EscenarioModoKey;
    let menuDificultadKey;

    if(TipoDeJuegoKey != null){
      if (TipoDeJuegoKey == 1){

        EscenarioModoKey = localStorage.getItem("EscenarioModoCooperativoKey");
        menuDificultadKey = localStorage.getItem("menuDificultadCooperativoKey");

        TipoDeModoJuego.value = 1;
      } else if (TipoDeJuegoKey == 2){

        EscenarioModoKey = localStorage.getItem("EscenarioModoCompetitivoKey");
        menuDificultadKey = localStorage.getItem("menuDificultadCompetitivoKey");

        TipoDeModoJuego.value = 2;
      }
   } else{

       TipoDeModoJuego.value = 2;
       EscenarioTipo.value = 1;
       DificultadTipo.value = 1;

   }


}
