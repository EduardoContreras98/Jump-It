

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
    var inputColorAvatar = document.getElementById('CoolorsAvatarMultijugador')
    
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