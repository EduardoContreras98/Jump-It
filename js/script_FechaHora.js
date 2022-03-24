


function formatoFecha() {
    var hoy = new Date();
    var fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
    
    var minutos = hoy.getMinutes();
    if(minutos == 0 || minutos == 1 || minutos == 2 || minutos == 3 ||
        minutos == 4 || minutos == 5 || minutos == 6 || minutos == 7 ||
        minutos == 8 || minutos == 9){
       minutos = '0' + minutos;
    }

    var segundos = hoy.getSeconds();
    if(segundos == 0 || segundos == 1 || segundos == 2 || segundos == 3 ||
        segundos == 4 || segundos == 5 || segundos == 6 || segundos == 7 ||
        segundos == 8 || segundos == 9){
            segundos = '0' + segundos;
    }

    var hora = hoy.getHours() + ':' + minutos + ':' + segundos;
    var fechaYHora = fecha + ' ' + hora;
    return fechaYHora;

}

$(document).ready(function() {


    const $FechaYHora= document.querySelector("#FechaHoraP1");
    var hoy = new Date();
    var fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
   
    var minutos = hoy.getMinutes();
    if(minutos == 0 || minutos == 1 || minutos == 2 || minutos == 3 ||
        minutos == 4 || minutos == 5 || minutos == 6 || minutos == 7 ||
        minutos == 8 || minutos == 9){
       minutos = '0' + minutos;
    }

    var segundos = hoy.getSeconds();
    if(segundos == 0 || segundos == 1 || segundos == 2 || segundos == 3 ||
        segundos == 4 || segundos == 5 || segundos == 6 || segundos == 7 ||
        segundos == 8 || segundos == 9){
            segundos = '0' + segundos;
    }

    var hora = hoy.getHours() + ':' + minutos + ':' + segundos;
    var fechaYHora = fecha + ' ' + hora;

    $FechaYHora.textContent=fechaYHora;

});


function formatoFechaRegistro() {
    var hoy = new Date();
    var fecha =hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) +'-'+hoy.getDate();

    return fecha;

}

