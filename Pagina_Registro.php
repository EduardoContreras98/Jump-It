
<!DOCTYPE html>

<html lang="es">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Universe</title>
    <link rel="shortcut icon" href="recursos/imagenes/theUniverse_icon.png">
    <link rel="stylesheet" href="css/estilos_Pagina_Registro.css">
    <link rel="stylesheet" href="css/estilos_Loader.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="js/script_Loader.js"></script>
    <script src="js/script_ValidadorContraseña.js"></script>
    <script src="js/script_ValidadorCorreo.js"></script>
    <script src="js/script_ValidadorUsuario.js"></script>
    
</head>

<body >
    <div class="loader"></div>


    <body>
    <form action="Pagina_Principal.php" method="GET" id="form">
            <div class="form">
                <h1>Modificar Datos</h1>
                <br>
                <div class="grupo">
                    <input type="text" name="correo" id="correo" required><span class="barra"></span>
                    <label class="datos-form" for="">Correo Electronico</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="usuario" id="usuario" title="El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros" required><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="contraseña" id="contraseña"  title= "La contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][}) y sin espacios en blanco" onclick="ContraseñaOnclick()" required>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="text" name="confirmar" id="confirmarcontraseña" required>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Confirmar Contraseña</label>
                </div>
                <br> 
                <button type="submit">Modificar</button>
            </div>
        </form>               
    </body>    
    
    
</body>

</html>