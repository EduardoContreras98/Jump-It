

$(document).ready(function() {


    $('#usuario').on('change', function() {

        var usuario=document.getElementById('usuario').value;
        var form=document.getElementById('form');

        if(usuario.length == 8){


            //form.setAttribute('action', 'Pagina_PrincipalAdmin.html');
            

           // alert("Me activaste");
        } else if(usuario.length >= 9){

            //form.setAttribute('action', 'Pagina_PrincipalUsuario.html');
            //alert("Me activaste tambien");
        } else{
            //form.setAttribute('action', 'Pagina_PrincipalUsuario.html');
        }
       
    });


});