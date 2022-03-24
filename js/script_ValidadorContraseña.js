
var contraseñaClick = 0;

$(document).ready(function() {


    $('#contraseña').on('change', function() {

        var Contraseña=document.getElementById('contraseña').value;

        if(Contraseña != ""){

        var texto=$('#contraseña').val();
        var reg=/^(?=.*[a-z])(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[!@#\$%\^&\*¡”#/=’?¡¿:;,.\-_+{\][}()]{1,}).{8}$/g; 
        if (texto.match(reg)) { 
     
            //alert("Me activaste");

        } else
        {
            alert("Contraseña no valida: Recuerda que la contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][}) y sin espacios en blanco.");
            document.getElementById('contraseña').value = ""
        }
    }
       
    });

    $('#confirmarcontraseña').on('change', function() {

    var Contraseña=document.getElementById('contraseña').value;
    var ConfirmContraseña=document.getElementById('confirmarcontraseña').value;


        var texto=$('#confirmarcontraseña').val();
        var reg=/^(?=.*[a-z])(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[!@#\$%\^&\*¡”#/=’?¡¿:;,.\-_+{\][}()]{1,}).{8}$/g;
        
        if(Contraseña == ""){

            alert("Favor de llenar primero el campo de contraseña.");
            document.getElementById('confirmarcontraseña').value = ""

        } else{
        if (Contraseña != ConfirmContraseña) {
            alert("Contraseñas diferentes. Favor de confirmar que ambas contraseñas sean iguales.");
            document.getElementById('confirmarcontraseña').value = ""
        } else{

        if (texto.match(reg)) { 

            //alert("Me activaste");

        } else
        {
            alert("Contraseña no valida: Recuerda que la contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][}) y sin espacios en blanco.");
            document.getElementById('confirmarcontraseña').value = ""
        }
    }
    }
       
    });


});


function ContraseñaOnclick(){

    if (contraseñaClick == 0){
    alert(" La contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][})y sin espacios en blanco");
    contraseñaClick = 1;
}
}

