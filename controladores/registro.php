<?php
    include_once 'configuración.php';

    $Email = $_POST['R_Email'];
    $User = $_POST['R_User'];
    $Password = $_POST['R_Password'];

    //VALIDACIONES DE DATOS
    if($User != "" && $Password != "" && $Email != ""){
        echo '<script type = "text/javascript">'
        . 'localStorage.setItem("State", "Visible");'
        . 'localStorage.setItem("Style", "alert alert-success");'
        . 'localStorage.setItem("Head", "Registro completado");'
        . 'localStorage.setItem("Body", "El usuario se ha registrado correctamente");'
        . 'window.location.href = "http://localhost:8080/Proyecto_Graficas_III/index.php";'
        . '</script>';
    }else{
        echo '<script type = "text/javascript">'
        . 'localStorage.setItem("State", "Visible");'
        . 'localStorage.setItem("Style", "alert alert-warning");'
        . 'localStorage.setItem("Head", "Error en el registro");'
        . 'localStorage.setItem("Body", "El usuario no pudo ser registrado, revise los datos proporcionados");'
        . 'window.location.href = "http://localhost:8080/Proyecto_Graficas_III/index.php";'
        . '</script>';
    }

?>