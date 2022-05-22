window.fbAsyncInit = function() {
  FB.init({
    appId      : '371139231658980',
    xfbml      : true,
    version    : 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));



 function CompartirScore(){

  var Puntuación=document.getElementById('Puntuación').textContent;

    FB.ui({
      method: 'share',
      href: 'http://google.com',
      hashtag:"#JumpItGame",
      quote: "Esta es mi puntuación en Jump It! c:" + Puntuación  + "puntos"
    }, function(response){});
 
}

function CompartirScoreHighscore(){

  var PuntuacionLugar=document.getElementById('PuntuacionLugar').textContent;
    
    

    FB.ui({
      method: 'share',
      href: 'http://google.com',
      hashtag:"#JumpItGame",
      quote: "¡Rompi el récord! Esta es mi puntuación en Jump It! c:" + PuntuacionLugar + "puntos"
    }, function(response){});
 
}