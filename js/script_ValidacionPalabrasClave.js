
function AgregarEtiquetaFuncion() {
    
    var AgregarEtiqueta=document.getElementById('Etiqueta').value;

    if (AgregarEtiqueta == "" ){
        alert("No haz agregado alguna etiqueta");
    }else{
        
        var noValido = /\s/;

        if(noValido.test(AgregarEtiqueta)){
            alert ("La etiqueta no puede contener espacios en blanco"); 
        }
        else{

            let cadena = AgregarEtiqueta;
            console.log("Antes: ", cadena);
            cadena = "#" + cadena;
            console.log("Después: ", cadena);
            AgregarEtiqueta = cadena;

        var ComboEtiqueta=document.getElementById('menuEtiquetas');

        var el_ComboEtiqueta=document.createElement('option');
		el_ComboEtiqueta.setAttribute('attribute', 'selected');

        var txt_ComboEtiqueta=document.createTextNode(AgregarEtiqueta);

        el_ComboEtiqueta.appendChild(txt_ComboEtiqueta);

        ComboEtiqueta.appendChild(el_ComboEtiqueta);

        document.getElementById('Etiqueta').value="";
        document.getElementById('Etiqueta').focus();
        }  

    }

}

function EliminarEtiquetaFuncion() {
   
    var ComboEtiqueta=document.getElementById('menuEtiquetas');
    var EliminarEtiqueta=document.getElementById('menuEtiquetas').value;

    if (ComboEtiqueta.length==0 ){
        alert("No haz agregado alguna etiqueta");
    }else{
        
        if(EliminarEtiqueta == "#Random"){
            alert("No se puede eliminar este elemento");
        } else{

            var opcion = confirm("¿Desea ELIMINAR esta etiqueta?");
            if (opcion == true) {
                value = ComboEtiqueta.selectedIndex;
                ComboEtiqueta.removeChild(ComboEtiqueta[value]);
                alert("Se ha eliminado correctamente la etiqueta");
            }
            
        }

    }
}


function EliminarEtiquetaBusquedaFuncion() {
   
    var ComboEtiqueta=document.getElementById('menuEtiquetas');
    var EliminarEtiqueta=document.getElementById('menuEtiquetas').value;

    if (ComboEtiqueta.length==0 ){
        alert("No haz agregado alguna etiqueta");
    }else{
        
        if(EliminarEtiqueta == "..."){
            alert("No se puede eliminar este elemento");
        } else{

            var opcion = confirm("¿Desea ELIMINAR esta etiqueta?");
            if (opcion == true) {
                value = ComboEtiqueta.selectedIndex;
                ComboEtiqueta.removeChild(ComboEtiqueta[value]);
                alert("Se ha eliminado correctamente la etiqueta");
            }
            
        }

    }

}