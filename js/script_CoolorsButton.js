

function CoolorsButtonSolo(x){

    var coolorsButton = x.textContent;
    var inputColorAvatar = document.getElementById('CoolorsAvatarSolo')
    
    switch (coolorsButton) {
        case "coolors01":
            inputColorAvatar.value = "#49408C"
            inputColorAvatar.setAttribute('style', 'background-color:#49408C;color:#49408C;');
            break;
        case "coolors02":
            inputColorAvatar.value = "#0c3fb6"
            inputColorAvatar.setAttribute('style', 'background-color:#0c3fb6;color:#0c3fb6;');
            break; 
        case "coolors03":
            inputColorAvatar.value = "#222"
            inputColorAvatar.setAttribute('style', 'background-color:#222;color:#222;');
            break;
        case "coolors04":
            inputColorAvatar.value = "#219e1a"
            inputColorAvatar.setAttribute('style', 'background-color:#219e1a;color:#219e1a;');
            break; 
        case "coolors05":
            inputColorAvatar.value = "#e0dd0b"
            inputColorAvatar.setAttribute('style', 'background-color:#e0dd0b;color:#e0dd0b;');
            break; 
        case "coolors06":
            inputColorAvatar.value = "#dc8200"
            inputColorAvatar.setAttribute('style', 'background-color:#dc8200;color:#dc8200;');
            break;
        case "coolors07":
            inputColorAvatar.value = "#f97f7e"
            inputColorAvatar.setAttribute('style', 'background-color:#f97f7e;color:#f97f7e;');
            break; 
        case "coolors08":
            inputColorAvatar.value = "#be1010"
            inputColorAvatar.setAttribute('style', 'background-color:#be1010;color:#be1010;');
            break;
    
        default:
            break;
    }

    
}

function CoolorsButtonMultijugador(x){

    var coolorsButton = x.textContent;
    var inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador');
    var inputColorAvatar02 = document.getElementById('CoolorsAvatarMultijugador');
    var inputColorAvatar03 = document.getElementById('CoolorsAvatarMultijugador');
    var inputColorAvatar04 = document.getElementById('CoolorsAvatarMultijugador');
   

    var buttonColorAvatar = document.getElementById('CoolorsButtonAvatar').textContent;

    switch (buttonColorAvatar) {
        case "Jugador 1":
            inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador');

            inputColorAvatar02 = document.getElementById('CoolorsAvatarMultijugador02');
            inputColorAvatar03 = document.getElementById('CoolorsAvatarMultijugador03');
            inputColorAvatar04 = document.getElementById('CoolorsAvatarMultijugador04');
            break;
        case "Jugador 2":
            inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador02');

            inputColorAvatar02 = document.getElementById('CoolorsAvatarMultijugador03');
            inputColorAvatar03 = document.getElementById('CoolorsAvatarMultijugador04');
            inputColorAvatar04 = document.getElementById('CoolorsAvatarMultijugador');
            break; 
        case "Jugador 3":
            inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador03');

            inputColorAvatar02 = document.getElementById('CoolorsAvatarMultijugador04');
            inputColorAvatar03 = document.getElementById('CoolorsAvatarMultijugador');
            inputColorAvatar04 = document.getElementById('CoolorsAvatarMultijugador02');
            break;
        case "Jugador 4":
            inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador04');

            inputColorAvatar02 = document.getElementById('CoolorsAvatarMultijugador');
            inputColorAvatar03 = document.getElementById('CoolorsAvatarMultijugador02');
            inputColorAvatar04 = document.getElementById('CoolorsAvatarMultijugador03');
            break; 
    
        default:
            break;
    }

    if (x.value == inputColorAvatar02.value || 
        x.value == inputColorAvatar03.value ||
        x.value == inputColorAvatar04.value){
            alert("No puedes elegir un color que ya tiene otro jugador :c");
        } else{
    

    switch (coolorsButton) {
        case "coolors01":
            inputColorAvatar.value = "#49408C"
            inputColorAvatar.setAttribute('style', 'background-color:#49408C;color:#49408C; border:6px solid #141414;');
            break;
        case "coolors02":
            inputColorAvatar.value = "#0c3fb6"
            inputColorAvatar.setAttribute('style', 'background-color:#0c3fb6;color:#0c3fb6;border:6px solid #141414;');
            break; 
        case "coolors03":
            inputColorAvatar.value = "#222"
            inputColorAvatar.setAttribute('style', 'background-color:#222;color:#222;border:6px solid #141414;');
            break;
        case "coolors04":
            inputColorAvatar.value = "#219e1a"
            inputColorAvatar.setAttribute('style', 'background-color:#219e1a;color:#219e1a;border:6px solid #141414;');
            break; 
        case "coolors05":
            inputColorAvatar.value = "#e0dd0b"
            inputColorAvatar.setAttribute('style', 'background-color:#e0dd0b;color:#e0dd0b;border:6px solid #141414;');
            break; 
        case "coolors06":
            inputColorAvatar.value = "#dc8200"
            inputColorAvatar.setAttribute('style', 'background-color:#dc8200;color:#dc8200;border:6px solid #141414;');
            break;
        case "coolors07":
            inputColorAvatar.value = "#f97f7e"
            inputColorAvatar.setAttribute('style', 'background-color:#f97f7e;color:#f97f7e;border:6px solid #141414;');
            break; 
        case "coolors08":
            inputColorAvatar.value = "#be1010"
            inputColorAvatar.setAttribute('style', 'background-color:#be1010;color:#be1010;border:6px solid #141414;');
            break;
    
        default:
            break;

     }
    }

    
}

function BotonJugadorMultiCoolors(x){

    var buttonColorAvatar = document.getElementById('CoolorsButtonAvatar');
    buttonColorText = buttonColorAvatar.textContent;

    var inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador');
    var inputColorAvatar02 = document.getElementById('CoolorsAvatarMultijugador02');
    var inputColorAvatar03 = document.getElementById('CoolorsAvatarMultijugador03');
    var inputColorAvatar04 = document.getElementById('CoolorsAvatarMultijugador04');

    switch (buttonColorText) {
        case "Jugador 1":
            buttonColorAvatar.textContent = "Jugador 2";
            inputColorAvatar02.style.border = '6px solid #141414';

            inputColorAvatar03.style.border = '4px solid #6f65b844';
            inputColorAvatar04.style.border = '4px solid #6f65b844';
            inputColorAvatar.style.border = '4px solid #6f65b844';
            break;
        case "Jugador 2":
            buttonColorAvatar.textContent = "Jugador 3";
            inputColorAvatar03.style.border = '6px solid #141414';

            inputColorAvatar04.style.border = '4px solid #6f65b844';
            inputColorAvatar.style.border = '4px solid #6f65b844';
            inputColorAvatar02.style.border = '4px solid #6f65b844';
            break; 
        case "Jugador 3":
            buttonColorAvatar.textContent = "Jugador 4";
            inputColorAvatar04.style.border = '6px solid #141414';

            inputColorAvatar.style.border = '4px solid #6f65b844';
            inputColorAvatar02.style.border = '4px solid #6f65b844';
            inputColorAvatar03.style.border = '4px solid #6f65b844';
            break;
        case "Jugador 4":
            buttonColorAvatar.textContent = "Jugador 1";
            inputColorAvatar.style.border = '6px solid #141414';

            inputColorAvatar02.style.border = '4px solid #6f65b844';
            inputColorAvatar03.style.border = '4px solid #6f65b844';
            inputColorAvatar04.style.border = '4px solid #6f65b844';
            break; 
    
        default:
            break;
    }

}

function CoolorsButtonSala(x){

    var coolorsButton = x.textContent;
    var inputColorAvatar = document.getElementById('CoolorsAvatarSala')
    
    switch (coolorsButton) {
        case "coolors01":
            inputColorAvatar.value = "#49408C"
            inputColorAvatar.setAttribute('style', 'background-color:#49408C;color:#49408C;');
            break;
        case "coolors02":
            inputColorAvatar.value = "#0c3fb6"
            inputColorAvatar.setAttribute('style', 'background-color:#0c3fb6;color:#0c3fb6;');
            break; 
        case "coolors03":
            inputColorAvatar.value = "#222"
            inputColorAvatar.setAttribute('style', 'background-color:#222;color:#222;');
            break;
        case "coolors04":
            inputColorAvatar.value = "#219e1a"
            inputColorAvatar.setAttribute('style', 'background-color:#219e1a;color:#219e1a;');
            break; 
        case "coolors05":
            inputColorAvatar.value = "#e0dd0b"
            inputColorAvatar.setAttribute('style', 'background-color:#e0dd0b;color:#e0dd0b;');
            break; 
        case "coolors06":
            inputColorAvatar.value = "#dc8200"
            inputColorAvatar.setAttribute('style', 'background-color:#dc8200;color:#dc8200;');
            break;
        case "coolors07":
            inputColorAvatar.value = "#f97f7e"
            inputColorAvatar.setAttribute('style', 'background-color:#f97f7e;color:#f97f7e;');
            break; 
        case "coolors08":
            inputColorAvatar.value = "#be1010"
            inputColorAvatar.setAttribute('style', 'background-color:#be1010;color:#be1010;');
            break;
    
        default:
            break;
    }

    
}

$(document).ready(function() {


    document.getElementById('CoolorsAvatarSolo').value= "#49408C";
    document.getElementById('CoolorsAvatarMultijugador').value= "#49408C";
    document.getElementById('CoolorsAvatarSala').value= "#49408C";


});