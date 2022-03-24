

$(document).ready(function() {


    $('#usuario').on('change', function() {

        var usuario=document.getElementById('usuario').value;

        if(usuario != ""){

        var texto=$('#usuario').val();
        var reg=/^(?=.*[a-zA-Z0-9]).{9,15}$/g; 
        if (texto.match(reg)) { 
     
           // alert("Me activaste");

        } else
        {
            alert("Usuario no valido: El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros");
            document.getElementById('usuario').value =""
        }
    }
       
    });


});