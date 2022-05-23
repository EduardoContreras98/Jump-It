<?php
    include_once 'configuración.php';
    include_once '../modelos/usuario.php';
    include_once '../dtos/usuario.php';

    $Email = $_POST['R_Email'];
    $User = $_POST['R_User'];
    $Password = $_POST['R_Password'];
    $Registro = new DtoUsuario();
    $usuario = new Usuario('', $User, $Email, $Password);
    
    if($Registro->RegistrarUsuario($usuario)){
        echo '<script type = "text/javascript">'
        . 'localStorage.setItem("State", "Visible");'
        . 'localStorage.setItem("Style", "alert alert-success");'
        . 'localStorage.setItem("Head", "Registro completado");'
        . 'localStorage.setItem("Body", "El usuario se ha registrado correctamente");'
        . 'window.location.href = "http://localhost//graficasRepo//Jump-it/index.php";'
        . '</script>';
    }
    else{
        echo '<script type = "text/javascript">'
        . 'localStorage.setItem("State", "Visible");'
        . 'localStorage.setItem("Style", "alert alert-warning");'
        . 'localStorage.setItem("Head", "Error en el registro");'
        . 'localStorage.setItem("Body", "El usuario no pudo ser registrado, revise los datos proporcionados");'
        . 'window.location.href = "http://localhost//graficasRepo//Jump-it/index.php";'
        . '</script>';
    }

?>