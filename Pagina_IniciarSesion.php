
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
    <script src="js/script_IniciarSesionUsuarioEditor.js"></script>

</head>

<body>
    <div class="loader"></div>

    <body>
        <form action="Pagina_PrincipalUsuario.php" method="GET" id="form">
            <div class="form">
                <h1>Iniciar Sesión</h1>
                <br>
                <div class="grupo">
                    <input type="text" name="" id="usuario" required><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br>
                <div class="grupo">
                    <input type="password" name="" id="contraseña" required><span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>    
                <br>
                <button type="submit" class="boton-iniciarsesion">Ingresar</button>
               

            </div>

            <br>
            <a class = "boton-crearcuentaIniciarSesion" href="Pagina_Registro.php">Haz clic aqui para crear una cuenta</a>
            <br>
        </form>               

        
        
    </body>    
    
    
</body>
