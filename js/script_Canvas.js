// Coleccion de objetos de ThreeJS
var scene;

// Dibuja los objetos de una escena
var renderer;

var camera;

var contador = 0;
var contadorScale = 1;

$(document).ready(function() {

    

    // Sera nuestro tamano 
    // del canvas.

    
    var tamanoDelCanvas = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    // Inicializamos el renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0,0,0));
    renderer.setSize(
        tamanoDelCanvas.width,
        tamanoDelCanvas.height
    );

    // Inicializamos la camara
    camera = new THREE.PerspectiveCamera(
        75,
        tamanoDelCanvas.width / tamanoDelCanvas.height,
        0.1,
        100
    );

    // Inicializamos la escena
    scene = new THREE.Scene();



//////////////////////////////////////////////////////////////////////////////////////////

 ///////// CUBO
 var geometry = new THREE.BoxGeometry(1,1,1);
 var material = new THREE.MeshLambertMaterial({
     color: new THREE.Color(0.5,0,1),
 });

 var cubo01 = new THREE.Mesh(geometry,material);

 scene.add(cubo01);
 camera.position.z = 2;
 //camera.rotation.y=0.5;


 /////////LUZ
 var luzAmbiental = new THREE.AmbientLight(
     new THREE.Color(1,1,1),
 );

 var luzDireccional = new THREE.DirectionalLight(
     new THREE.Color(1,1,0),
 );

 luzDireccional.position.set(0,0,1);

 scene.add(luzAmbiental);
 scene.add(luzDireccional);

 var material2 = new THREE.MeshPhongMaterial({
     color: new THREE.Color(0.5,0.5,0),
     specular: new THREE.Color(1,1,1),
     shininess: 500
 });

 var cubo02 = new THREE.Mesh(geometry,material2);
 scene.add(cubo02);

 cubo01.position.x = -1
 cubo02.position.x = 1;

 cubo01.name = "Cubo01"
 cubo02.name = "Cubo02"

 //var cubo03 = cubo02.clone();
 //cubo03.position.set(0,1,0);
 //scene.add(cubo03);

//////////////////////////////////////////////////////////////////////////////////////////


    // Le indicamos a ThreeJS 
    // donde queremos el canvas
    $('#scene-section').append(renderer.domElement);

    render();
});

function render() {


//////////////////////////////////////////////////////////////////////////////////////////

var cubo01 = scene.getObjectByName("Cubo01");
var cubo02 = scene.getObjectByName("Cubo02");

//cubo01.rotation.y += THREE.Math.degToRad(2);
//cubo02.rotation.y -= THREE.Math.degToRad(2);



if(contador <= 100){
contadorScale += 0.01;
contador += 1;
} else if(contador <= 200) {
contadorScale -= 0.01;
contador += 1;
}
else {
contadorScale = 1;
contador = 0;
}

cubo01.scale.x = contadorScale;
cubo02.scale.y = contadorScale;





//////////////////////////////////////////////////////////////////////////////////////////
    // Dibujamos la escena
    renderer.render(scene, camera);

    requestAnimationFrame(render);

}