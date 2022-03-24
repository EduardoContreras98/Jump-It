

$(document).ready(function() {



    var fechaDay=document.querySelector("#fecha-nacimiento");   
    var hoy = new Date();

    // 00/00/0000       0/0/0000
    var mes = hoy.getMonth()+1;
    if(mes == 0 || mes == 1 || mes == 2 || mes == 3 ||
        mes == 4 || mes == 5 || mes == 6 || mes == 7 ||
        mes == 8 || mes == 9){
            mes = '0' + mes;
    }

    var dia = hoy.getDate();
    if(dia == 0 || dia == 1 || dia == 2 || dia == 3 ||
        dia == 4 || dia == 5 || dia == 6 || dia == 7 ||
        dia == 8 || dia == 9){
            dia = '0' + dia;
    }

    var fecha =hoy.getFullYear() + '-' + mes +'-'+dia;
    fechaDay.setAttribute('max', fecha);


});