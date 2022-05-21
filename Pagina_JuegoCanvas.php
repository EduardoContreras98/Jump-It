
<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Jump It!</title>
        <link rel="shortcut icon" href="recursos/imagenes/theUniverse_icon.png">
        <link rel="stylesheet" href="css/estilos_JuegoCanvas.css">
        <link rel="stylesheet" href="css/footer.css">
        <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/estilos_Loader.css">
        <link rel="stylesheet" href="css/estilos_Ruleta.css">
        <link rel="stylesheet" href="css/estilos_Modal_Registro.css">
        <link rel="stylesheet" href="css/bootstrap-5.1.3-dist/css/bootstrap.css">
        <script type="text/javascript" src="js/libs/jquery/jquery-2.1.4.min.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet">
        <script src="js/script_Loader.js"></script>
        <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
        <script src="css/bootstrap-5.1.3-dist/js/bootstrap.js"></script>

        <!-- 
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script type="text/javascript" src="js/libs/three/MTLLoader.js"></script>
	      <script type="text/javascript" src="js/libs/three/OBJLoader.js"></script>
        <script type="text/javascript" src="js/libs/three/FBXLoades.js"></script>

        <script src="js/script_Canvas_Profe.js" type="module"></script>

         -->


	      <script type="text/javascript" src="js/libs/three/three.js"></script>
	      <script type="text/javascript" src="js/libs/three/MTLLoader.js"></script>
	      <script type="text/javascript" src="js/libs/three/OBJLoader.js"></script>
        <script type="text/javascript" src="js/libs/three/FBXLoades.js"></script>
        <script src="js/script_Canvas_SpacePrueba.js" type="module"></script>
        <script src="js/script_PopUps.js"></script>
        <script src="js/script_Musica.js"></script>
        <script src="js/script_ConfiguracionJuego.js"></script>
        
    
    </head>


    

    
    <?php  include ('./header_JuegoCanvas.php')?>
    <body onload="LeerKeysElemento();LeerKeysTipoDeJuego();">
      
<main>


<!-- 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Pausa">
  Menu Pausa
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#TerminoJuego">
  Menu Termino Juego
</button>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LugarPuntuacion">
  Menu Lugar Puntuación
</button>

-->

<input type="hidden" name="TipoDeModoJuego" id="TipoDeModoJuego" value="2" required>
<input type="hidden" name="EscenarioTipo" id="EscenarioTipo" value="1" required>
<input type="hidden" name="DificultadTipo" id="DificultadTipo" value="1" required>

            <section class="contenedor" id ="canvas">
                
            <div id="scoreDiv"> 
              
            SCORE:
            <h4 id="Score"> 000</h4>

            HIGHSCORE:
            <h4 id="Highscore"> 000</h4>

            </div>

           <div id="scene-section" > 

            </div>

            </section>




<!-- Modal -->
<div id="Pausa" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pausa :c</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        El juego esta en pausa, por lo pronto puedes descansar c:
      </div>
      <div class="modal-footer" id="modalCloseFooter">
        <button type="button" class="btnModalMenu"> Pulsa ENTER para continuar</button>
        <!--
        <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btnModalMenu" id="btnContinuar">Continuar</button>
        -->
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="TerminoJuego" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Fin del juego ...</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      El ganador es:
          <h3 id="UsuarioGanador"> AryMistery</h3>
        Tu puntuación es de:
        <h5 id="Puntuación"> 500</h5>
      </div>
      <div class="modal-footer" id="modalCloseFooter">
      <button type="button" class="btnModalMenu"> Para volver a jugar presiona la tecla ENTER</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="LugarPuntuacion" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1"  role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¡Se Obtuvo Un Nuevo Récord!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        El ganador es:
          <h3 id="UsuarioGanadorLP"> AryMistery</h3>
        Tu puntuación es de:
        <h5 id="PuntuacionLugar"> 500</h5>
      </div>
      <div class="modal-footer" id="modalCloseFooter">
      <button type="button" class="btnModalMenu"> Para volver a jugar presiona la tecla ENTER</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div id="PlayGame" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Empezar el juego</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Quieres empezar a jugar?
      </div>
      <div class="modal-footer" id="modalCloseFooter">
        <button type="button" id="PlayGameButton" class="btnModalMenu"> Para empezar presiona la tecla ENTER</button>
        <!--
        <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btnModalMenu" id="btnContinuar">Continuar</button>
        -->
      </div>
    </div>
  </div>
</div>


<audio src="recursos/musica/Shes_All_I_Wanna_Be-Tate_McRae.mp3" id="MusicGame" preload="auto" controls="none" loop="" style="display: none;"></audio>
<audio src="recursos/musica/BanjoGUHHUHSoundEffect.mp3" id="effectMusicJ1" preload="auto" controls="none" style="display: none;"></audio>
<audio src="recursos/musica/BanjoGUHHUHSoundEffect.mp3" id="effectMusicJ2" preload="auto" controls="none" style="display: none;"></audio>


        </main>

        <br><br>
        <?php  include ('./footer.php')?>
        <br><br>
    </body>

   

</html>