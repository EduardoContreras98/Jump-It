
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
        <link rel="stylesheet" href="css/bootstrap-5.1.3-dist/css/bootstrap.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script type="text/javascript" src="js/libs/three/three.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet">
        <script src="js/script_Loader.js"></script>
        <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
        <script src="css/bootstrap-5.1.3-dist/js/bootstrap.js"></script>
        <script type="text/javascript" src="js/libs/three/MTLLoader.js"></script>
	      <script type="text/javascript" src="js/libs/three/OBJLoader.js"></script>
        <script type="text/javascript" src="js/libs/three/FBXLoades.js"></script>
        <script src="js/script_Canvas.js" type="module"></script>
        <script src="js/script_PopUps.js"></script>
        
    
    </head>


    <body>

    
    <?php  include ('./header_JuegoCanvas.php')?>

<main>


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Pausa">
  Menu Pausa
</button>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#TerminoJuego">
  Menu Termino Juego
</button>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LugarPuntuacion">
  Menu Lugar Puntuación
</button>

            <section class="contenedor" id ="canvas">
                
            <div class="canvas" >
                <div id="scene-section" > 

                </div>
            </div>

            </section>




<!-- Modal -->
<div class="modal fade" id="Pausa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btnModalMenu" id="btnContinuar">Continuar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="TerminoJuego" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Y el ganador es ...</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <h3 id="UsuarioGanador"> AryMistery</h3>
        Tu puntuación es de:
        <h5 id="Puntuación"> 500</h5>
      </div>
      <div class="modal-footer" id="modalCloseFooter">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btnModalMenu" id="btnContinuar">Continuar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="LugarPuntuacion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¡Entraste al Score Mundial!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <h3 id="UsuarioGanador"> AryMistery</h3>
        Tu puntuación es de:
        <h5 id="Puntuacion"> 500</h5>
        Lugar:
        <h5 id="LugarPuntuacion"> 1</h5>
      </div>
      <div class="modal-footer" id="modalCloseFooter">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btnModalMenu" id="btnContinuar">Continuar</button>
      </div>
    </div>
  </div>
</div>



        </main>

        <br><br>
        <?php  include ('./footer.php')?>
        <br><br>

    </body>

   

</html>