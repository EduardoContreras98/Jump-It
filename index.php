
<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Jump It!</title>
        <link rel="shortcut icon" href="recursos/imagenes/theUniverse_icon.png">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/estilos_Loader.css">
        <link rel="stylesheet" href="css/estilos_Ruleta.css">
        <link rel="stylesheet" href="css/bootstrap-5.1.3-dist/css/bootstrap.css">
        <link rel="stylesheet" href="css/estilos_Modal_Registro.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="js/script_Loader.js"></script>
        <script src="css/bootstrap-5.1.3-dist/js/bootstrap.js"></script>
        <script src="js/script_ValidadorContraseña.js"></script>
        <script src="js/script_ValidadorCorreo.js"></script>
        <script src="js/script_ValidadorUsuario.js"></script>
        <script src="js/script_hiddenModal.js"></script>
        <script src="js/script_Alerts.js"></script>
        <!--<script src="js/script_CursorDestellos.js"></script>-->
    </head>


    <body>
    <div class="status">
    </div>

    <div class="loader"></div>

    <div class="box"><b></b></div>

        <header>
            <nav>
            <a data-bs-toggle="modal" data-bs-target="#RuletaModal" class="btn-header">ඞ </a>
                <br><br>
            </nav>

        </header>


<main>

           <section class="barraContenedor">
                <br>
            </section>

            <section class="textos-header">
                <h2 class="TituloJump">Jump It!</h2>
                <h3>El Universo En Tus Manos</h3>
                <div class="botonesInicio">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Iniciar Sesión</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Registrarte</button>
                    <button> Créditos</button>
                </div>
            </section>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body">

        <form action="controladores/inicio_sesión.php" method="POST" id="formIniciarSesion">
            <div class="form" id="form">
                <h1>Iniciar Sesión</h1>
                <br>
                <div class="grupo">
                    <input type="text" name="L_User" id="usuarioIniciarSesion" required><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="password" name="L_Password" id="contraseñaIniciarSesion" required><span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>    
                <br>
                <button type="submit" class="boton-iniciarsesion">Ingresar</button>
               
                <br>
            <a id = "boton-crearcuentaIniciarSesion" href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Haz clic aqui para crear una cuenta</a>
            <br>

            </div>

            
        </form>  

      </div>
      
     </div>
    </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
       <div class="modal-header">
        <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body2">
      <form action="controladores/registro.php" method="POST">
            <div class="form" id="form">
                <h1>Registro</h1>
                <br>
                <div class="grupo">
                    <input type="text" name="R_Email" id="correo" required><span class="barra"></span>
                    <label class="datos-form" for="">Correo Electronico</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="R_User" id="usuario" title="El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros" required><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="R_Password" id="contraseña"  title= "La contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][}) y sin espacios en blanco" onclick="ContraseñaOnclick()" required>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="R_Password2" id="confirmarcontraseña" required>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Confirmar Contraseña</label>
                </div>
                <br> 
                <button type="submit" >Registrarme</button>
            </div>
        </form>      

      </div>
      </div>
      
     </div>
    </div>


<!-- Modal -->
<div class="modal fade" id="RuletaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

  <div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
 <div class="modal-header">
 <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
 </div>
 <div class="modal-body" id="modal-body2">
    <div id="RuletaModal_Canvas">
        <br>
        <center><input type="button" class="btn-block" value="Girar Ruleta" id='Girar' /></center>
        <div id="RuletaCanvas">
        <center><canvas id="canvas" width="400" height="450"></canvas></center>
      </div>
          <script src="js/script_Ruleta.js"></script>
        
    </div>    

 </div>
 </div>

 </div>
</div>


        </main>

        <?php  include ('./footer.php')?>

    </body>

   

</html>