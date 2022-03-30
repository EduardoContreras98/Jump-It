// Coleccion de objetos de ThreeJS
var scene;

// Dibuja los objetos de una escena
var controls;
var objects = [];
var clock;
var deltaTime;
var renderer;
var keys = {};
var camera;

$(document).ready(function() {
    setupScene();

    loadOBJWithMTL("assets/player/", "pink chara.obj", "pink chara.mtl", (objetoCargado) =>{
        objetoCargado.position.z = -20;
        objetoCargado.position.y = -8;
        objetoCargado.scale.set(0.1,0.1,0.1);
        objetoCargado.rotation.y = THREE.Math.degToRad(0);
        scene.add(objetoCargado);
    });

    //Modelo de un castillo cargado en obj, tiene detalles que deben arreglarse
    /*loadOBJWithMTL("assets/castle/", "Castle_X6.obj", "Castle_X6.mtl", (Castillo) =>{
        Castillo.position.z = -20;
        Castillo.position.y = -12;
        Castillo.scale.set(10,10,10);
        //Castillo.rotation.y = THREE.Math.degToRad(0);
        scene.add(Castillo);
    });*/
    
    //Modelo del fbx
    /*var fbxLoader = new THREE.FBXLoader();
    fbxLoader.load('assets/castle/ybot.fbx', function(objeto){
        scene.add(objeto);
    });*/

    render();
    document.addEventListener('keydown', onKeyDown);
	document.addEventListener('keyup', onKeyUp);
});


function loadOBJWithMTL(path, objFile, mtlFile, onLoadCallback) {
		
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath(path);

    mtlLoader.load(mtlFile, (materialCargado) =>{
        
        //Este bloque se ejecuta solo cuando termina de cargagr el MTL
        var objLoader = new THREE.OBJLoader();
        objLoader.setPath(path);
        objLoader.setMaterials(materialCargado);
        objLoader.load(objFile, (objCargado) => {
            
            //Este bloque se ejecuta solo cuando termina de cargagr el OBJ
            onLoadCallback(objCargado);
        });
    });
}

function onKeyDown(event) {
    keys[String.fromCharCode(event.keyCode)] = true;
}
function onKeyUp(event) {
    keys[String.fromCharCode(event.keyCode)] = false;
}

function render() {

//////////////////////////////////////////////////////////////////////////////////////////
    // Dibujamos la escena
    requestAnimationFrame(render);
    deltaTime = clock.getDelta();
    var yaw = 0;
    var foward = 0;
    if (keys["W"]) {
        foward = -5;
    }else if (keys["S"]) {
        foward = 5;
    }
    if (keys["A"]) {
        yaw = 5;
    }else if (keys["D"]) {
        yaw = -5;
    }

    camera.rotation.y += yaw * deltaTime;
    camera.translateZ(foward * deltaTime);
    renderer.render(scene, camera);
    
}

function setupScene(){

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
    camera = new THREE.PerspectiveCamera(75, tamanoDelCanvas.width / tamanoDelCanvas.height, 0.1, 100);
    camera.position.z = 2;
    camera.position.y = 3;

    // Inicializamos la escena
    scene = new THREE.Scene();
    //scene.background = new THREE.Color(0x123456);
    
    /*var loader = new THREE.TextureLoader();
    loader.load('img/background.jpg', function(texture){
        scene.background = texture;
    });*/
    // Inicializamos el reloj
    clock = new THREE.Clock();	
    
    /////////LUZ
    var luzAmbiental = new THREE.AmbientLight(
        new THREE.Color(1,1,1),
    );

    var luzDireccional = new THREE.DirectionalLight(
        new THREE.Color(1,1,0),
    );

    luzDireccional.position.set(0,10,1);
    scene.add(luzAmbiental);
    scene.add(luzDireccional);

    var grid = new THREE.GridHelper(50, 10, 0xffffff, 0xffffff);
    grid.position.y = -10;
    scene.add(grid);

    // Le indicamos a ThreeJS 
    // donde queremos el canvas
    $('#scene-section').append(renderer.domElement);
}