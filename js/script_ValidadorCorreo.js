

$(document).ready(function() {


    $('#correo').on('change', function() {

        var Correo=document.getElementById('correo').value;

    
        if(Correo != ""){

        var texto=$('#correo').val();
        var reg=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9_.+-]+$/g; 

        if (texto.match(reg)) { 
     
           // alert("Me activaste");

        } else
        {
            alert("Correo no valido");
            document.getElementById('correo').value =""
        }
    
    }
       
    });


});