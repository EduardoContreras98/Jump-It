
<!DOCTYPE html>

<html lang="es">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jump It!</title>
    <link rel="shortcut icon" href="recursos/imagenes/theUniverse_icon.png">
    <link rel="stylesheet" href="css/estilos_Pagina_Registro.css">
    <link rel="stylesheet" href="css/estilos_Loader.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="js/script_Loader.js"></script>
    

    
</head>

<body >
    <div class="loader"></div>


    <body id="bodySala">
        <div class="noticiasCard">
        
          <div class="NotiCard">
            <form action="Pagina_JuegoCanvas.php" method="GET" id="form">
             <div class="form">
                <h1>Sala</h1>
                <h1>A52598BSK</h1>
                <br>
                <div class="grupo">
                    <div class="jugadorList">
                     <button type="button" class="JugadorListColor" id="Jugador_01" style="background-color:#0c3fb6;"></button>
                     <h3>AryMistery <h3>
                   </div>
                   <div class="jugadorList">
                     <button type="button" class="JugadorListColor" id="Jugador_02" style="background-color:#49408C;"></button>
                     <h3>MilesWolf <h3>
                   </div>
                   <div class="jugadorList">
                     <button type="button" class="JugadorListColor" id="Jugador_03" style="background-color:#219e1a;"></button>
                     <h3>Eduardo:V <h3>
                   </div>
                   <div class="jugadorList">
                     <button type="button" class="JugadorListColor" id="Jugador_04" style="background-color:#a9a1e0;"></button>
                     <h3>CPU <h3>
                   </div>
                </div>
                <br>
                
                <br> 
                <button type="submit">Jugar</button>
              </div>
            </form>
          </div>

          <div class="NotiCard" id="Ruleta">
            <center><input type="button" class="btn-block" value="Pregúntale a la ruleta" id='Girar' /></center>
            <center><canvas id="canvas" width="500" height="450"></canvas></center>
            <script src="js/script_Ruleta.js"></script>
          </div>


        
        </div>
    </body>    
    
    
</body>

</html>