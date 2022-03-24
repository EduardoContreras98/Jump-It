$(document).ready(function(){
    var state = localStorage.getItem("State");
    var style = localStorage.getItem("Style");
    var head = localStorage.getItem("Head");
    var body = localStorage.getItem("Body");
    if(state == "Visible"){
        $(".status").append('<div class="'+ style +' alert-dismissible fade show" role="alert">'
        + '<strong>'+head+': </strong>'+ body 
        + '<button type="button" class="btn-close" id = "alert-close" data-bs-dismiss="alert" aria-label="Close"></button>'
        + '</div>');

        $('#alert-close').click(function(){
            localStorage.setItem("State", "Invisible");
        })
    }
})