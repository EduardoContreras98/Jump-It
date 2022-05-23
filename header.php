<?php
  session_start();
  $UsuarioActivo = $_SESSION['Usuario'];
?>
<div class="loader"></div>

        <header>
            <nav class="nav-menu">
                <h2 class="TituloJump">Jump It! </h2>
                <abbr title="Configuración" id="ConfiguracionModal"><a class="categoria" id="ConfiguracionCategoria"><img data-bs-toggle="modal" data-bs-target="#configuración" src="recursos/imagenes/iconos/cog-solid-24.png"/></a></abbr>
                <b href="#" >|</b>
                <a data-bs-toggle="modal" data-bs-target="#RuletaModal" class="btn-header">ඞ </a>
                <b href="#" >|</b>
                <a href="#" id="enlace-ModificarDatos" class="btn-header"><?php echo $UsuarioActivo ?></a>
                <b href="#" >|</b>
                <abbr title="Cerrar Sesión" id="CerrarSesionModal"><a class="categoria" id="CerrarSesionCategoria"><img data-bs-toggle="modal" data-bs-target="#exampleModal" src="recursos/imagenes/iconos/x-circle-solid-24.png"/></a></abbr>
                <br><br>
            </nav>

        </header>

        <!-- <a data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="enlace-ModificarDatos" class="btn-header"> -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¿Quieres cerrar la sesión?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>
      <div class="modal-body">
        Te vamos a extrañar :c
      </div>
      <div class="modal-footer" id="modalCloseFooter">
        <button type="button" class="btn btn-primary" name = "btnCerrarSesion"id="btnCerrarSesión"><a href="sesiones/cerrar_session.php">Cerrar Sesión</a></button>
        <?php
         If(isset($_POST["bntCerrarSesion"])){
          $_SESSION['Usuario'] = NULL;
          session_destroy();
         } 

        ?>
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
      <form method="GET" id="form">
            <div class="form" id="form">
                <h1>Modificar Datos</h1>
                <br>
                <div class="grupo">
                    <input type="text" name="" id="correo" required><span class="barra"></span>
                    <label class="datos-form" for="">Correo Electronico</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="" id="usuario" title="El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros" required><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="" id="contraseña"  title= "La contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][}) y sin espacios en blanco" onclick="ContraseñaOnclick()" required>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="" id="confirmarcontraseña" required>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Confirmar Contraseña</label>
                </div>
                <br> 
                <button type="submit" data-bs-dismiss="modal" aria-label="Close">Modificar Datos</button>
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
         <center><input type="button" class="btn-block" value="Pregúntale a la ruleta" id='Girar' /></center>
         <div id="RuletaCanvas">
         <center><canvas id="canvas" width="400" height="450"></canvas></center>
       </div>
           <script src="js/script_Ruleta.js"></script>
         
     </div>    

 </div>
 </div>

 </div>
</div>


<?php  include ('./Modal_ConfiguracionHeader.php')?>

