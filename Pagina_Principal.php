
<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Jump It!</title>
        <link rel="shortcut icon" href="recursos/imagenes/theUniverse_icon.png">
        <link rel="stylesheet" href="css/estilos_Pagina_Principal.css">
        <link rel="stylesheet" href="css/footer.css">
        <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/estilos_Loader.css">
        <link rel="stylesheet" href="css/estilos_Ruleta.css">
        <link rel="stylesheet" href="css/bootstrap-5.1.3-dist/css/bootstrap.css">
        <link rel="stylesheet" href="css/estilos_Modal_Registro.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet">   
        <script src="js/script_Loader.js"></script>
        <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
        <script src="css/bootstrap-5.1.3-dist/js/bootstrap.js"></script>
        <script src="js/script_ValidadorContraseña.js"></script>
        <script src="js/script_ValidadorCorreo.js"></script>
        <script src="js/script_ValidadorUsuario.js"></script>
        <script src="js/script_CoolorsButton.js"></script>
        <script src="js/script_PopUps.js"></script>
        <script src="js/script_Musica.js"></script>
        <script src="js/script_ConfiguracionJuego.js"></script>
       
        
    
    </head>


    <body onload="LeerKeysElemento();">

    
    <?php  include ('./header.php')?>

<main>

            <section class="contenedor">
                
           

            <div class="noticiasCard">
                <button type="button" class="NotiCard" id="modo01" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                  <div>
                    <h3 id="modo01-Titulo" > <img class="iconCard" src="recursos/imagenes/iconos/movie-play-solid-24.png" /> Cooperativo</h3>
                    <img src="recursos/imagenes/tipoJuego/01.jpg" class="d-block user-select-none" width="100%" height="200"/>
                    </div>
                </button>


                <button type="button" class="NotiCard" id="modo02" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                  <div>
                    <h3 id="modo02-Titulo" > <img class="iconCard" src="recursos/imagenes/iconos/movie-play-solid-24.png" /> Competitivo</h3>
                    <img src="recursos/imagenes/tipoJuego/02.jpg" class="d-block user-select-none" width="100%" height="200"/>
                    </div>
                </button>

                <!-- Modal 
                <button type="button" class="NotiCard" id="modo03" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
                  <div>
                    <h3 id="modo03-Titulo" > <img class="iconCard" src="recursos/imagenes/iconos/movie-play-solid-24.png" /> Unirte A Sala</h3>
                    <img src="recursos/imagenes/tipoJuego/03.jpg" class="d-block user-select-none" width="100%" height="200"/>
                    </div>
                </button>
-->

            </div>



            <!-- Modal -->
    <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">
      <form action="Pagina_Principal.php" method="GET">
            <div class="form" id="form">
                <h1>Modo Cooperativo</h1>
                <br>
                <!--
                <div class="grupo">
                <h4>Color de tu personaje</h4>
                  <input type="text" name="" class="CoolorsAvatar" id="CoolorsAvatarSolo" required >
                </div>
                <div class="grupo">
                    <div id="groupColors">
                      <button type="button" class="coolorsJugador" id="coolors01" onclick="CoolorsButtonSolo(this);" style="background-color:#49408C;">coolors01</button>
                      <button type="button" class="coolorsJugador" id="coolors02" onclick="CoolorsButtonSolo(this);" style="background-color:#0c3fb6;">coolors02</button>
                      <button type="button" class="coolorsJugador" id="coolors03" onclick="CoolorsButtonSolo(this);" style="background-color:#222;">coolors03</button>
                      <button type="button" class="coolorsJugador" id="coolors04" onclick="CoolorsButtonSolo(this);" style="background-color:#219e1a;">coolors04</button>
                      <button type="button" class="coolorsJugador" id="coolors05" onclick="CoolorsButtonSolo(this);" style="background-color:#e0dd0b;">coolors05</button>
                      <button type="button" class="coolorsJugador" id="coolors06" onclick="CoolorsButtonSolo(this);" style="background-color:#dc8200;">coolors06</button>
                      <button type="button" class="coolorsJugador" id="coolors07" onclick="CoolorsButtonSolo(this);" style="background-color:#f97f7e;">coolors07</button>
                      <button type="button" class="coolorsJugador" id="coolors08" onclick="CoolorsButtonSolo(this);" style="background-color:#be1010;">coolors08</button>
                    </div>
                    <br>
                </div>
                -->
                <div class="grupo">
                 <br>
                 <h4>Escenario</h4>
                 <input type="hidden" name="EscenarioModoCooperativo" id="EscenarioModoCooperativo" value="1" required>
                 <div class="VideoFoto-Grupo">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                    <h5 class="tituloEscenarioCarrusel" id="tituloEscenarioCarrusel01">Mundo Espacioso</h5>
                        <img src="recursos/imagenes/escenario/MundoEspacioso.png" class="d-block w-100" alt="...">
                      </div>
                    <div class="carousel-item">
                    <h5  class="tituloEscenarioCarrusel" id="tituloEscenarioCarrusel02">Mundo Medieval</h5>
                        <img src="recursos/imagenes/escenario/MundoMedieval.png" class="d-block w-100" alt="...">
                    </div>
                    <!--
                    <div class="carousel-item">
                    <h5  class="tituloEscenarioCarrusel" id="tituloEscenarioCarrusel03">Mundo Argg Pirata</h5>
                        <img src="recursos/imagenes/escenario/03.jpg" class="d-block w-100" alt="...">
                    </div>
                    -->
                  </div>
                  <button class="carousel-control-prev" type="button" onclick="ContadorEscenarioMenuCooperativo();" id="CarruselImgNext"data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                   </button>
                  <button class="carousel-control-next" type="button" onclick="ContadorEscenarioMenuCooperativo();" id="CarruselImgNext"data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                 <br>
               </div>

              </div>
                </div>

              <div class="grupo">
                
                <h4>Dificultad de obstaculos</h4>
                <select class="categorias-select" name="menuDificultadCooperativo" id="menuDificultadCooperativo"> 
                        <option selected>Fácil</option>
                        <option >DifÍcil</option>
                </select>

              </div>

                

                <br> 
                <button type="submit" >Jugar</button>
            </div>
        </form>      

      </div>
      </div>
      
     </div>
    </div>



    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">
      <form action="Pagina_Sala.php" method="GET">
            <div class="form" id="form">
                <h1>Modo Competitivo</h1>
                <br>
                <!--
                <div class="grupo">
                
                <h4>Cantidad de Jugadores</h4>
                <select class="categorias-select" name="menuJugadores" id="menuJugadores"> 
                        <option >2 jugadores vs 2 CPU</option>
                        <option >3 jugadores vs 1 CPU</option>
                        <option >4 jugadores</option>
                </select>
                <br><br>

              </div>
                <div class="grupo">
                  <h4>Color de tu personaje</h4>
                  <br>
                  <button type="button" class="CoolorsButtonAvatar" id="CoolorsButtonAvatar" onclick="BotonJugadorMultiCoolors(this);">Jugador 1</button>
                 <div id="groupColorsAvatarMultijugador">
                    <input type="text" name="" class="CoolorsAvatar" value="#49408C" id="CoolorsAvatarMultijugador" required >
                    <input type="text" name="" class="CoolorsAvatar" value="#0c3fb6" id="CoolorsAvatarMultijugador02" required >
                    <input type="text" name="" class="CoolorsAvatar" value="#222" id="CoolorsAvatarMultijugador03" required >
                    <input type="text" name="" class="CoolorsAvatar" value="#219e1a" id="CoolorsAvatarMultijugador04" required >
                  </div>
                </div>
                
                <div class="grupo">
                    <div id="groupColors">
                    <button type="button" class="coolorsJugador" id="coolors01" onclick="CoolorsButtonMultijugador(this);" value="#49408C" style="background-color:#49408C;">coolors01</button>
                      <button type="button" class="coolorsJugador" id="coolors02" onclick="CoolorsButtonMultijugador(this);" value="#0c3fb6" style="background-color:#0c3fb6;">coolors02</button>
                      <button type="button" class="coolorsJugador" id="coolors03" onclick="CoolorsButtonMultijugador(this);" value="#222" style="background-color:#222;">coolors03</button>
                      <button type="button" class="coolorsJugador" id="coolors04" onclick="CoolorsButtonMultijugador(this);" value="#219e1a" style="background-color:#219e1a;">coolors04</button>
                      <button type="button" class="coolorsJugador" id="coolors05" onclick="CoolorsButtonMultijugador(this);" value="#e0dd0b" style="background-color:#e0dd0b;">coolors05</button>
                      <button type="button" class="coolorsJugador" id="coolors06" onclick="CoolorsButtonMultijugador(this);" value="#dc8200" style="background-color:#dc8200;">coolors06</button>
                      <button type="button" class="coolorsJugador" id="coolors07" onclick="CoolorsButtonMultijugador(this);" value="#f97f7e" style="background-color:#f97f7e;">coolors07</button>
                      <button type="button" class="coolorsJugador" id="coolors08" onclick="CoolorsButtonMultijugador(this);" value="#be1010" style="background-color:#be1010;">coolors08</button>
                    </div>
                    <br>
                </div>

                -->
                <div class="grupo">
                 <br>
                 <h4>Escenario</h4>
                 <input type="hidden" name="EscenarioModoCompetitivo" id="EscenarioModoCompetitivo" value="1" required>
                 <div class="VideoFoto-Grupo">
                        <div id="carouselExampleFade" class="carousel slide" data-bs-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                    <h5 class="tituloEscenarioCarrusel" id="tituloEscenarioCarrusel01">Mundo Espacioso</h5>
                        <img src="recursos/imagenes/escenario/MundoEspacioso.png" class="d-block w-100" alt="...">
                      </div>
                    <div class="carousel-item">
                    <h5  class="tituloEscenarioCarrusel" id="tituloEscenarioCarrusel02">Mundo Medieval</h5>
                        <img src="recursos/imagenes/escenario/MundoMedieval.png" class="d-block w-100" alt="...">
                    </div>
                    <!--
                    <div class="carousel-item">
                    <h5  class="tituloEscenarioCarrusel" id="tituloEscenarioCarrusel03">Mundo Argg Pirata</h5>
                        <img src="recursos/imagenes/escenario/03.jpg" class="d-block w-100" alt="...">
                    </div>
                    -->
                  </div>
                  <button class="carousel-control-prev" type="button" onclick="ContadorEscenarioMenuCompetitivo();" id="CarruselVideoPrev" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon"   aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" onclick="ContadorEscenarioMenuCompetitivo();" id="CarruselVideoNext" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                          <span class="carousel-control-next-icon"  aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                 <br>
               </div>

              <div class="grupo">
                
                <h4>Dificultad de obstaculos</h4>
                <select class="categorias-select" name="menuDificultadCompetitivo" id="menuDificultadCompetitivo"> 
                        <option selected>Fácil</option>
                        <option >DifÍcil</option>
                </select>

              </div>

              </div>
                </div>

                

                <br> 
                <button type="submit" >Jugar</button>
            </div>
        </form>      

      </div>
      </div>
      
     </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">
      <form action="Pagina_Sala.php" method="GET">
            <div class="form" id="form">
                <h1>Unirte a sala</h1>
                <br>
                <div class="grupo">
                
                <input type="text" name="" id="CodigoSala" required><span class="barra"></span>
                    <label class="datos-form" for="">Código Sala</label>
                <br><br>

              </div>
                <div class="grupo">
                <h4>Color de tu personaje</h4>
                  <input type="text" name="" class="CoolorsAvatar" id="CoolorsAvatarSala" required >
                </div>
                <div class="grupo">
                    <div id="groupColors">
                    <button type="button" class="coolorsJugador" id="coolors01" onclick="CoolorsButtonSala(this);" style="background-color:#49408C;">coolors01</button>
                      <button type="button" class="coolorsJugador" id="coolors02" onclick="CoolorsButtonSala(this);" style="background-color:#0c3fb6;">coolors02</button>
                      <button type="button" class="coolorsJugador" id="coolors03" onclick="CoolorsButtonSala(this);" style="background-color:#222;">coolors03</button>
                      <button type="button" class="coolorsJugador" id="coolors04" onclick="CoolorsButtonSala(this);" style="background-color:#219e1a;">coolors04</button>
                      <button type="button" class="coolorsJugador" id="coolors05" onclick="CoolorsButtonSala(this);" style="background-color:#e0dd0b;">coolors05</button>
                      <button type="button" class="coolorsJugador" id="coolors06" onclick="CoolorsButtonSala(this);" style="background-color:#dc8200;">coolors06</button>
                      <button type="button" class="coolorsJugador" id="coolors07" onclick="CoolorsButtonSala(this);" style="background-color:#f97f7e;">coolors07</button>
                      <button type="button" class="coolorsJugador" id="coolors08" onclick="CoolorsButtonSala(this);" style="background-color:#be1010;">coolors08</button>
                    </div>
                    <br>
                </div>
                

                <br> 
                <button type="submit" >Jugar</button>
            </div>
        </form>      

      </div>
      </div>
      
     </div>
    </div>
    

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">

            <div class="form" id="Score">
            <table class="table">
              <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">Usuario</th>
                 <th scope="col">Fecha</th>
                 <th scope="col">Puntuación</th>
                </tr>
             </thead>
             <tbody>
                 <tr>
                   <th scope="row">1</th>
                   <td>Mark</td>
                   <td>Otto</td>
                   <td>@mdo</td>
                </tr>
                <tr>
                   <th scope="row">2</th>
                   <td>Jacob</td>
                   <td>Thornton</td>
                   <td>@fat</td>
                </tr>
               <tr>
                   <th scope="row">3</th>
                   <td>Larry</td>
                   <td>the Bird</td>
                   <td>@twitter</td>
               </tr>
              </tbody>
             </table>

                <br> 
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" >OK</button>
            </div>  

      </div>
      </div>
      
     </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop7" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">

            <div class="form" id="Instrucciones">
            

                 <br>
                 <h4>Escenario</h4>

                 <div class="VideoFoto-Grupo">
                 
                 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                       <div class="carousel-item active">
                          <img src="recursos/imagenes/instrucciones/gatitu01.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="recursos/imagenes/instrucciones/gatitu02.jpg" class="d-block w-100" alt="...">
                       </div>
                       <div class="carousel-item">
                         <img src="recursos/imagenes/instrucciones/gatitu03.jpg" class="d-block w-100" alt="...">
                      </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                     </button>
                      </div>

                 </div>
                 
                 <br>


                <br> 
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" >OK</button>
            </div>  

      </div>
      </div>
      
     </div>
    </div>

    <div class="botonesInicio">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop6"> Score</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop7"> Instrucciones</button>
                </div>

            </section>

            <audio src="recursos/musica/Shes_All_I_Wanna_Be-Tate_McRae.mp3" id="MusicGame" preload="auto" controls="none" loop="" style="display: none;"></audio>
            <audio src="recursos/musica/BanjoGUHHUHSoundEffect.mp3" id="effectMusicJ1" preload="auto" controls="none" style="display: none;"></audio>
            <audio src="recursos/musica/BanjoGUHHUHSoundEffect.mp3" id="effectMusicJ2" preload="auto" controls="none" style="display: none;"></audio>

        </main>

        <?php  include ('./footer.php')?>

    </body>

   

</html>