<?php
    include_once 'configuración.php';
    include_once '../modelos/usuario.php';
    include_once '../dtos/usuario.php';

    session_start();
    $User = $_POST['L_User'];
    $Password = $_POST['L_Password'];
    
    $Sesion = new DtoUsuario();
    $usuario = new Usuario('', $User, '', $Password);
    $Sesion->IniciarSesion($usuario);
    
    if(!empty($usuario->getEmail())){
        $_SESSION['Usuario'] = $usuario->getUsuario();
        echo '<script type = "text/javascript">'
        . 'localStorage.setItem("State", "Invisible");'
        . 'localStorage.setItem("Style", "alert alert-success");'
        . 'localStorage.setItem("Head", "Inicio de sesión correcto");'
        . 'localStorage.setItem("Body", "El usuario de sesión fue encontrado");'
        . 'window.location.href = "http://localhost:8080/Proyecto_Graficas_III/Pagina_Principal.php";'
        . '</script>';
    }
    else{
        echo '<script type = "text/javascript">'
        . 'localStorage.setItem("State", "Visible");'
        . 'localStorage.setItem("Style", "alert alert-warning");'
        . 'localStorage.setItem("Head", "Error en el inicio de sesión");'
        . 'localStorage.setItem("Body", "El usuario no fue encontrado, revise los datos proporcionados");'
        . 'window.location.href = "http://localhost:8080/Proyecto_Graficas_III/index.php";'
        . '</script>';
    }

?>