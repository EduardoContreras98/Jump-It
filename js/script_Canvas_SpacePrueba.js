import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js';
import {OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


//hit to body on
// Variables

var obstaculoTipoNumber = 0;
var cambioObstaculo = true;
var powerUpTipoNumber = 0;
var cambioPowerUp = true;

var contador01 = 0;
var SaltosJump01 = 0;
var SaltojumpBox01 = 8;
var contadorjumpBox01 = 0;

var contador02 = 0;
var SaltosJump02 = 0;
var SaltojumpBox02 = 8;
var contadorjumpBox02 = 0;

var salto01 = false;
var salto02 = false;
var agacharse01 = false;
var agacharse02 = false;

var obstaculoTipoNumber = 0;
var invencibilidad01 = false;
var Help01 = false;
var NoElegirPowerUp01 = false;
var contadorInvencibilidad01 = 0;
var contadorHelp01 = 0;
var contadorNoElegirPowerUp01 = 0;

var invencibilidad02 = false;
var Help02 = false;
var NoElegirPowerUp02 = false;
var contadorInvencibilidad02 = 0;
var contadorHelp02 = 0;
var contadorNoElegirPowerUp02 = 0;

var InicioJuego = true;

var inicialGameSpeed = 0.1;
var contadorGameSpeed = 0;
var LevelGameSpeed = 1;

let score;
let highscore;
var contadorScore = 0;
var ScoreID = document.getElementById('Score');
var HighscoreID = document.getElementById('Highscore');
var juegoPausa = true;
var alertPausa = false;
var superoHighscore = false;

var contadorVidas=3;

var GameEndJ1 = false;
var GameEndJ2 = false;
var GameEndCooperativo = false;
var playGameModal = true;
var MusicPlay = false;
const effectMusicJ1 = document.getElementById('effectMusicJ1');
const effectMusicJ2 = document.getElementById('effectMusicJ2');
const volumenEffect = document.getElementById('VolumenEfect');
const volumenMusic = document.getElementById('VolumenMusic');

var TipoDeEscenario = 1;
var ModoDeDificultad = 1;
var TipoDeModo = 2;


function RandomIntInRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

///////////////////////////////////// TIPO DE ESCENARIO

function ConfigurarTipoDeModoEscenario(){

  const TipoDeModoJuego = document.getElementById('TipoDeModoJuego');
  const EscenarioTipo = document.getElementById('EscenarioTipo');
  const DificultadTipo = document.getElementById('DificultadTipo');

  TipoDeModo = TipoDeModoJuego.value;
  TipoDeEscenario = EscenarioTipo.value;
  ModoDeDificultad = DificultadTipo.value;


}


///////////////////////////////////// JUMP AND BEND

function jump01(){


  if(contador01 <= 40){
    SaltosJump01 += 0.4;
    contador01 += 1;
  }
  else if(contador01 <= 120) {
    SaltosJump01 -= 0.2;
    contador01 += 1;
  }
  else {
    SaltosJump01 = 0;
    contador01 = 0;
    salto01 = false;
  }

}

function jumpBox01(){


  if(contadorjumpBox01 <= 40){
    SaltojumpBox01 += 0.4;
    contadorjumpBox01 += 1;
  }
  else if(contadorjumpBox01 <= 120) {
    SaltojumpBox01 -= 0.2;
    contadorjumpBox01 += 1;
  }
  else {
    SaltojumpBox01 = 8;
    contadorjumpBox01 = 0;
    //salto01 = false;
  }

}

function bend01(){

  

  if(contador01 <= 40){
    SaltosJump01 = 0;
    contador01 += 1;
  }
  else if(contador01 <= 90) {
    SaltosJump01 = 0;
    contador01 += 1;
  }
  else {
    SaltosJump01 = 0;
    contador01 = 0;
    agacharse01 = false;
  }

}

function bendBox01(){


  if(contadorjumpBox01 <= 40){
    SaltojumpBox01 -= 0.2;
    contadorjumpBox01 += 1;
  }
  else if(contadorjumpBox01 <= 90) {
    SaltojumpBox01 += 0.1;
    contadorjumpBox01 += 1;
  }
  else {
    SaltojumpBox01 = 8;
    contadorjumpBox01 = 0;
    //salto01 = false;
  }

}


function jump02(){


  if(contador02 <= 40){
    SaltosJump02 += 0.4;
    contador02 += 1;
  }
  else if(contador02 <= 120) {
    SaltosJump02 -= 0.2;
    contador02 += 1;
  }
  else {
    SaltosJump02 = 0;
    contador02 = 0;
    salto02 = false;
  }

}

function jumpBox02(){


  if(contadorjumpBox02 <= 40){
    SaltojumpBox02 += 0.4;
    contadorjumpBox02 += 1;
  }
  else if(contadorjumpBox02 <= 120) {
    SaltojumpBox02 -= 0.2;
    contadorjumpBox02 += 1;
  }
  else {
    SaltojumpBox02 = 8;
    contadorjumpBox02 = 0;
    //salto01 = false;
  }

}

function bend02(){

  

  if(contador02 <= 40){
    SaltosJump02 = 0;
    contador02 += 1;
  }
  else if(contador02 <= 90) {
    SaltosJump02 = 0;
    contador02 += 1;
  }
  else {
    SaltosJump02 = 0;
    contador02 = 0;
    agacharse02 = false;
  }

}

function bendBox02(){


  if(contadorjumpBox02 <= 40){
    SaltojumpBox02 -= 0.2;
    contadorjumpBox02 += 1;
  }
  else if(contadorjumpBox02 <= 90) {
    SaltojumpBox02 += 0.1;
    contadorjumpBox02 += 1;
  }
  else {
    SaltojumpBox02 = 8;
    contadorjumpBox02 = 0;
    //salto01 = false;
  }

}

///////////////////////////////////// GAME

function PowerUpActivo(TipoPowerUp){


  switch (TipoPowerUp) {
    case 1:
      invencibilidad01 = true;
        break;  

    case 2:
      Help01 = true;
        break;

    case 3:
      NoElegirPowerUp01 = true;    
        break;
    case 4:
      invencibilidad02 = true;
        break;  
    
    case 5:
      Help02 = true;
        break;
    
    case 6:
      NoElegirPowerUp02 = true;    
        break;
    case 7:
      invencibilidad01 = false;
      Help01 = false;
      NoElegirPowerUp01 = false;
      invencibilidad02 = false;
      Help02 = false;
      NoElegirPowerUp02 = false;    
            break;
    default:
        break;
}

}

///////////////////////////////////// GAME SPEED LEVEL

function GameSpeedLevel(){


  if (ModoDeDificultad == 1){
  if(contadorGameSpeed <= 2000){
    LevelGameSpeed = 1;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 4000) {
    LevelGameSpeed = 2;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 6000) {
    LevelGameSpeed = 3;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 8000) {
    LevelGameSpeed = 4;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 10000) {
    LevelGameSpeed = 5;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 12000) {
    LevelGameSpeed = 6;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 14000) {
    LevelGameSpeed = 7;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 16000) {
    LevelGameSpeed = 8;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 18000) {
    LevelGameSpeed = 9;
    contadorGameSpeed += 1;
  }
} 

if (ModoDeDificultad == 2){

  if(contadorGameSpeed <= 1000){
    LevelGameSpeed = 1;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 1500) {
    LevelGameSpeed = 2;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 2000) {
    LevelGameSpeed = 3;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 2500) {
    LevelGameSpeed = 4;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 3000) {
    LevelGameSpeed = 5;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 3500) {
    LevelGameSpeed = 6;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 4000) {
    LevelGameSpeed = 7;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 4500) {
    LevelGameSpeed = 8;
    contadorGameSpeed += 1;
  }
  else if(contadorGameSpeed <= 5000) {
    LevelGameSpeed = 9;
    contadorGameSpeed += 1;
  }



}

  switch (LevelGameSpeed) {
    case 1:
      inicialGameSpeed = 0.1;
        break;
    case 2:
      inicialGameSpeed = 0.2;
        break;
    case 3:
      inicialGameSpeed = 0.3;   
        break;
    case 4:
      inicialGameSpeed = 0.4;
        break;    
    case 5:
      inicialGameSpeed = 0.5;
        break;    
    case 6:
      inicialGameSpeed = 0.8;    
        break;
    case 7:
      inicialGameSpeed = 1;    
        break;
    case 8:
      inicialGameSpeed = 1.5;    
        break;
    case 9:
      inicialGameSpeed = 2;    
        break;
    default:
        break;
}

}

////////////////////////////////////////////////////// MODELS


class BasicCharacterControllerProxy {
  constructor(animations) {
    this._animations = animations;
  }

  get animations() {
    return this._animations;
  }
};


class BasicModel{
  constructor(path, obj, mtl){
    this._path = path;
    this._mtl  = mtl;
    this._obj  = obj;
  }

  _loadObjWithMtl(onLoadCallback){
    var mtlLoader = new MTLLoader();
    mtlLoader.setPath(this._path);
    mtlLoader.load(this._mtl, (material) =>{
        var objLoader = new OBJLoader();
        objLoader.setPath(this._path);
        objLoader.setMaterials(material);
        objLoader.load(this._obj, (ObjCargado) =>{
          onLoadCallback(ObjCargado);
        });
    });
  }
};

class BasicCharacterController {
  constructor(params) {
    this._Init(params);

    this.position_ = new THREE.Vector3(-10, 0, -15);
    this.velocity_ = 0.0;

  }

  _Init(params) {
    this._params = params;
    this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
    this._acceleration = new THREE.Vector3(1, 0.25, 50.0);
    this._velocity = new THREE.Vector3(0, 0, 0);

    this._animations = {};
    this._input = new BasicCharacterControllerInput();
    this._stateMachine = new CharacterFSM(
        new BasicCharacterControllerProxy(this._animations));


    this._CargaModels(//W
            './assets/guardia/', 'ModeloPrueba.fbx','Parado01', 'Happy Idle.fbx',
            'Salto01','Modelo_Jump.fbx', 'Agacharse01','Modelo_Standing.fbx',new THREE.Vector3(-10, 0, -15));    
    
  }

  _CargaModels(path, modelFile, nameanimFile01,animFile01, nameanimFile02,animFile02, nameanimFile03,animFile03, offset) {
    const loader = new FBXLoader();
    loader.setPath(path);
    loader.load(modelFile, (fbx) => {
      fbx.scale.setScalar(0.1);
      fbx.traverse(c => {
        c.castShadow = true;
      });
      fbx.position.copy(offset);

      this._target = fbx;
      this._params.scene.add(this._target);
      

      this._mixer = new THREE.AnimationMixer(this._target);

      this._manager = new THREE.LoadingManager();
      this._manager.onLoad = () => {
        this._stateMachine.SetState(nameanimFile01);
      };

      const _OnLoad = (animName, anim) => {
        const clip = anim.animations[0];
        const action = this._mixer.clipAction(clip);
  
        this._animations[animName] = {
          clip: clip,
          action: action,
        };
      };

      const loader = new FBXLoader(this._manager);
      loader.setPath(path);
      loader.load(animFile01, (a) => { _OnLoad(nameanimFile01, a); });
      loader.load(animFile02, (a) => { _OnLoad(nameanimFile02, a); });
      loader.load(animFile03, (a) => { _OnLoad(nameanimFile03, a); });
    });
  }


  Update(timeInSeconds) {
    this._stateMachine.Update(timeInSeconds, this._input);

    const velocity = this._velocity;
    const frameDecceleration = new THREE.Vector3(
        velocity.x * this._decceleration.x,
        velocity.y * this._decceleration.y,
        velocity.z * this._decceleration.z
    );
    frameDecceleration.multiplyScalar(timeInSeconds);
    frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
        Math.abs(frameDecceleration.z), Math.abs(velocity.z));

    velocity.add(frameDecceleration);

    const controlObject = this._target;
    const _Q = new THREE.Quaternion();
    const _A = new THREE.Vector3();
    const _R = controlObject.quaternion.clone();

    const acc = this._acceleration.clone();
    if (this._input._keys.shift) {
      acc.multiplyScalar(2.0);
    }

    if (salto01 == true){
      jump01();
      jumpBox01();
    }

    if (agacharse01 == true){
      bend01();
      bendBox01();
    }
   

    controlObject.quaternion.copy(_R);

    const oldPosition = new THREE.Vector3();
    oldPosition.copy(controlObject.position);

    const forward = new THREE.Vector3(0, 0, 1);
    forward.applyQuaternion(controlObject.quaternion);
    forward.normalize();

    const sideways = new THREE.Vector3(1, 0, 0);
    sideways.applyQuaternion(controlObject.quaternion);
    sideways.normalize();

    sideways.multiplyScalar(velocity.x * timeInSeconds);
    forward.multiplyScalar(velocity.z * timeInSeconds);

    controlObject.position.add(forward);
    controlObject.position.add(sideways);

    oldPosition.copy(controlObject.position);

    //controlObject.name = "jugador1";
    
    if (this._mixer) {
      this._mixer.update(timeInSeconds);
      this.position_.y = SaltosJump01;
      controlObject.position.copy(this.position_);
      
    }

  }

};

class BasicCharacterController02 {
  constructor(params) {
    this._Init(params);

    this.position_ = new THREE.Vector3(10, 0, -15);
  }

  _Init(params) {
    this._params = params;
    this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
    this._acceleration = new THREE.Vector3(1, 0.25, 50.0);
    this._velocity = new THREE.Vector3(0, 0, 0);

    this._animations = {};
    this._input = new BasicCharacterControllerInput();
    this._stateMachine = new CharacterFSM(
        new BasicCharacterControllerProxy(this._animations));


        this._CargaModels(//W
            './assets/guardia/', 'ModeloPrueba.fbx','Parado02', 'Happy Idle.fbx',
            'Salto02','Modelo_Jump.fbx', 'Agacharse02','Modelo_Standing.fbx', new THREE.Vector3(10, 0, -15));
    
    
            //this._LoadModels();
  }

  _CargaModels(path, modelFile, nameanimFile01,animFile01, nameanimFile02,animFile02, nameanimFile03,animFile03, offset) {
    const loader = new FBXLoader();
    loader.setPath(path);
    loader.load(modelFile, (fbx) => {
      fbx.scale.setScalar(0.1);
      fbx.traverse(c => {
        c.castShadow = true;
      });
      fbx.position.copy(offset);

      this._target = fbx;
      this._params.scene.add(this._target);

      this._mixer = new THREE.AnimationMixer(this._target);

      this._manager = new THREE.LoadingManager();
      this._manager.onLoad = () => {
        this._stateMachine.SetState(nameanimFile01);
      };

      const _OnLoad = (animName, anim) => {
        const clip = anim.animations[0];
        const action = this._mixer.clipAction(clip);
  
        this._animations[animName] = {
          clip: clip,
          action: action,
        };
      };

      const loader = new FBXLoader(this._manager);
      loader.setPath(path);
      loader.load(animFile01, (a) => { _OnLoad(nameanimFile01, a); });
      loader.load(animFile02, (a) => { _OnLoad(nameanimFile02, a); });
      loader.load(animFile03, (a) => { _OnLoad(nameanimFile03, a); });
    });
  }


  Update(timeInSeconds) {
    if (!this._target) {
      return;
    }

    this._stateMachine.Update(timeInSeconds, this._input);

    const velocity = this._velocity;
    const frameDecceleration = new THREE.Vector3(
        velocity.x * this._decceleration.x,
        velocity.y * this._decceleration.y,
        velocity.z * this._decceleration.z
    );
    frameDecceleration.multiplyScalar(timeInSeconds);
    frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
        Math.abs(frameDecceleration.z), Math.abs(velocity.z));

    velocity.add(frameDecceleration);

    const controlObject = this._target;
    const _Q = new THREE.Quaternion();
    const _A = new THREE.Vector3();
    const _R = controlObject.quaternion.clone();

    const acc = this._acceleration.clone();
    if (this._input._keys.shift) {
      acc.multiplyScalar(2.0);
    }

    if (salto02 == true){
      jump02();
      jumpBox02();
    }

    if (agacharse02 == true){
      bend02();
      bendBox02();
    }

    controlObject.quaternion.copy(_R);

    const oldPosition = new THREE.Vector3();
    oldPosition.copy(controlObject.position);

    const forward = new THREE.Vector3(0, 0, 1);
    forward.applyQuaternion(controlObject.quaternion);
    forward.normalize();

    const sideways = new THREE.Vector3(1, 0, 0);
    sideways.applyQuaternion(controlObject.quaternion);
    sideways.normalize();

    sideways.multiplyScalar(velocity.x * timeInSeconds);
    forward.multiplyScalar(velocity.z * timeInSeconds);

    controlObject.position.add(forward);
    controlObject.position.add(sideways);

    oldPosition.copy(controlObject.position);

    if (this._mixer) {
      this._mixer.update(timeInSeconds);
      this.position_.y = SaltosJump02;
      controlObject.position.copy(this.position_);
    }
  }
};


////////////////////////////////////////////////////// CONTROLS

class BasicCharacterControllerInput {
  constructor() {
    this._Init();    
  }

  _Init() {
    this._keys = {
      salto01: false,
      salto02: false,
      salto03: false,
      salto04: false,
      agacharse01: false,
      agacharse02: false,
      forward: false,
      backward: false,
      left: false,
      right: false,
      space: false,
      shift: false,
    };
    document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
    document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
  }

  _onKeyDown(event) {
    switch (event.keyCode) {
      case 87: // w
        this._keys.salto01 = true; 
        effectMusicJ1.volume = volumenEffect.value;
        effectMusicJ1.play();
        salto01 = true;
        break;
      case 83: // s
        this._keys.agacharse01 = true;
        effectMusicJ1.volume = volumenEffect.value;
        effectMusicJ1.play();
        agacharse01 = true;
        break;
      case 65: // a
        this._keys.left = true;
        break;     
      case 68: // d
        this._keys.right = true;
        break;
      case 84: // t
        this._keys.salto02 = true;
        effectMusicJ2.volume = volumenEffect.value;
        effectMusicJ2.play();
        salto02 = true;
        break;
      case 71: // g
        this._keys.agacharse02 = true;
        effectMusicJ2.volume = volumenEffect.value;
        effectMusicJ2.play();
        agacharse02 = true;
        break;
      case 73: // i
        this._keys.salto03 = true;
        break;
      case 80: // p
        this._keys.salto04 = true;
        break;
      case 32: // SPACE
        if (alertPausa == true){
          //alert("En Pausa");
          $('#Pausa').modal('show');
          alertPausa = false;
          const music = document.getElementById('MusicGame');
          music.pause();
        } 
        juegoPausa = true;
        break;
      case 13: // ENTER
 
        const music = document.getElementById('MusicGame');
        if (TipoDeEscenario == 1){
          music.src = UrlMusic("c");
        } else if (TipoDeEscenario == 2){
          music.src = UrlMusic("b");
        }
        music.volume = volumenMusic.value;
        music.play();
         MusicPlay = true;
      
      $('#PlayGame').modal('hide');
        //this._keys.shift = true;

        $('#LugarPuntuacion').modal('hide');
        $('#TerminoJuego').modal('hide');
        $('#Pausa').modal('hide');
        juegoPausa = false;
        alertPausa = true;
        break;
      case 16: // SHIFT

      
        break;
    }
  }

  _onKeyUp(event) {
    switch(event.keyCode) {
      case 87: // w
        this._keys.salto01 = false;
        break;
      case 83: // s
        this._keys.agacharse01 = false;
        break;
      case 65: // a
        this._keys.left = false;
        break;
      case 68: // d
        this._keys.right = false;
        break;
      case 84: // t
        this._keys.salto02 = false;
        break;
      case 71: // g
        this._keys.agacharse02 = false;
        break;
      case 73: // i
        this._keys.salto03 = false;
        break;
      case 80: // p
        this._keys.salto04 = false;
        break;
      case 32: // SPACE
        this._keys.space = false;
        break;
      case 16: // SHIFT
        this._keys.shift = false;
        break;
    }
  }
};


class FiniteStateMachine {
  constructor() {
    this._states = {};
    this._currentState = null;
  }

  _AddState(name, type) {
    this._states[name] = type;
  }

  SetState(name) {
    const prevState = this._currentState;
    
    if (prevState) {
      if (prevState.Name == name) {
        return;
      }
      prevState.Exit();
    }

    const state = new this._states[name](this);

    this._currentState = state;
    state.Enter(prevState);
  }

  Update(timeElapsed, input) {
    if (this._currentState) {
      this._currentState.Update(timeElapsed, input);
    }
  }
};


class CharacterFSM extends FiniteStateMachine {
  constructor(proxy) {
    super();
    this._proxy = proxy;
    this._Init();
  }

  _Init() {
    //this._AddState('idle', IdleState);
    //this._AddState('walk', WalkState);
    //this._AddState('run', RunState);
    //this._AddState('dance', DanceState);
    this._AddState('Parado01', Parado01State);
    this._AddState('Salto01', Salto01State);
    this._AddState('Agacharse01', Agacharse01State);

    this._AddState('Parado02', Parado02State);
    this._AddState('Salto02', Salto02State);
    this._AddState('Agacharse02', Agacharse02State);

    //this._AddState('Parado03', Parado03State);
    //this._AddState('Salto03', Salto03State);

    //this._AddState('Parado04', Parado04State);
    //this._AddState('Salto04', Salto04State);
  }
};



////////////////////////////////////////////////////// STATE

class State {
  constructor(parent) {
    this._parent = parent;
  }

  Enter() {}
  Exit() {}
  Update() {}
};


class Salto01State extends State {
    constructor(parent) {
      super(parent);
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'Salto01';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Salto01'].action;
      const mixer = Action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);
  
      if (prevState) {
        const prevAction = this._parent._proxy._animations[prevState.Name].action;
  
        Action.reset();  
        Action.setLoop(THREE.LoopOnce, 1);
        Action.clampWhenFinished = true;
        Action.crossFadeFrom(prevAction, 0.2, true);
        Action.play();
      } else {
        Action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('Parado01');
    }
  
    _Cleanup() {
      const action = this._parent._proxy._animations['Salto01'].action;
      action.getMixer().removeEventListener('finished', this._CleanupCallback);
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };

  class Parado01State extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'Parado01';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Parado01'].action;
      if (prevState) {
        const prevAction = this._parent._proxy._animations[prevState.Name].action;
        Action.time = 0.0;
        Action.enabled = true;
        Action.setEffectiveTimeScale(1.0);
        Action.setEffectiveWeight(1.0);
        Action.crossFadeFrom(prevAction, 0.5, true);
        Action.play();
      } else {
        Action.play();
      }
    }
  
    Exit() {
    }
  
    Update(_, input) {
      if (input._keys.salto01) {
        this._parent.SetState('Salto01');
      }
      if (input._keys.agacharse01) {
        this._parent.SetState('Agacharse01');
      }
    }
  };

  class Agacharse01State extends State {
    constructor(parent) {
      super(parent);
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'Agacharse01';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Agacharse01'].action;
      const mixer = Action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);
  
      if (prevState) {
        const prevAction = this._parent._proxy._animations[prevState.Name].action;
  
        Action.reset();  
        Action.setLoop(THREE.LoopOnce, 1);
        Action.clampWhenFinished = true;
        Action.crossFadeFrom(prevAction, 0.2, true);
        Action.play();
      } else {
        Action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('Parado01');
    }
  
    _Cleanup() {
      const action = this._parent._proxy._animations['Agacharse01'].action;
      
      action.getMixer().removeEventListener('finished', this._CleanupCallback);
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };


  class Salto02State extends State {
    constructor(parent) {
      super(parent);
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'Salto02';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Salto02'].action;
      const mixer = Action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);
  
      if (prevState) {
        const prevAction = this._parent._proxy._animations[prevState.Name].action;
  
        Action.reset();  
        Action.setLoop(THREE.LoopOnce, 1);
        Action.clampWhenFinished = true;
        Action.crossFadeFrom(prevAction, 0.2, true);
        Action.play();
      } else {
        Action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('Parado02');
    }
  
    _Cleanup() {
      const action = this._parent._proxy._animations['Salto02'].action;
      
      action.getMixer().removeEventListener('finished', this._CleanupCallback);
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };

  class Parado02State extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'Parado02';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Parado02'].action;
      if (prevState) {
        const prevAction = this._parent._proxy._animations[prevState.Name].action;
        Action.time = 0.0;
        Action.enabled = true;
        Action.setEffectiveTimeScale(1.0);
        Action.setEffectiveWeight(1.0);
        Action.crossFadeFrom(prevAction, 0.5, true);
        Action.play();
      } else {
        Action.play();
      }
    }
  
    Exit() {
    }
  
    Update(_, input) {
      if (input._keys.salto02) {
        this._parent.SetState('Salto02');
      }
      if (input._keys.agacharse02) {
        this._parent.SetState('Agacharse02');
      }
    }
  };

  class Agacharse02State extends State {
    constructor(parent) {
      super(parent);
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'Agacharse02';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Agacharse02'].action;
      const mixer = Action.getMixer();
      mixer.addEventListener('finished', this._FinishedCallback);
  
      if (prevState) {
        const prevAction = this._parent._proxy._animations[prevState.Name].action;
  
        Action.reset();  
        Action.setLoop(THREE.LoopOnce, 1);
        Action.clampWhenFinished = true;
        Action.crossFadeFrom(prevAction, 0.2, true);
        Action.play();
      } else {
        Action.play();
      }
    }
  
    _Finished() {
      this._Cleanup();
      this._parent.SetState('Parado02');
    }
  
    _Cleanup() {
      const action = this._parent._proxy._animations['Agacharse02'].action;
      
      action.getMixer().removeEventListener('finished', this._CleanupCallback);
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };






  //////////////////////////////////////////// SCENE

class CharacterControllerDemo {
  constructor() {
    this._Initialize();
  }

  _Initialize() {

    ConfigurarTipoDeModoEscenario();

    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.outputEncoding = THREE.sRGBEncoding;
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    
    var canvasSceneSection = document.getElementById('scene-section');
    canvasSceneSection.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(0, 10, 20);

    this._scene = new THREE.Scene();

    let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(-100, 100, 100);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 50;
    light.shadow.camera.right = -50;
    light.shadow.camera.top = 50;
    light.shadow.camera.bottom = -50;
    this._scene.add(light);

    light = new THREE.AmbientLight(0xFFFFFF, 0.25);
    this._scene.add(light);

    ///////////////////////////// Controles de mouse para ver el escenario

        /*
    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 20, 0);
    controls.update(); */

    const loader = new THREE.CubeTextureLoader();
    let texture;
    if(TipoDeEscenario == 1){
    texture = loader.load([
        './assets/Skybox_02/corona_ft.png',
        './assets/Skybox_02/corona_bk.png',
        './assets/Skybox_02/corona_up.png',
        './assets/Skybox_02/corona_dn.png',
        './assets/Skybox_02/corona_rt.png',
        './assets/Skybox_02/corona_lf.png',
    ]);
  }

  if(TipoDeEscenario == 2){
    texture = loader.load([
      './assets/Skybox_01/stormydays_ft.jpg',
      './assets/Skybox_01/stormydays_bk.jpg',
      './assets/Skybox_01/stormydays_dn.jpg',
      './assets/Skybox_01/stormydays_up.jpg',
      './assets/Skybox_01/stormydays_rt.jpg',
      './assets/Skybox_01/stormydays_lf.jpg',
  ]); 
}
    texture.encoding = THREE.sRGBEncoding;
    this._scene.background = texture;

    const model1 = new BasicModel('./assets/space/moon/', 'Moon.obj', 'Moon.mtl');

    let model2;
    let model3;
    let model4;

 if (TipoDeEscenario == 1){
    model2 = new BasicModel('./assets/space/afo/', 'flying Disk flying.obj', 'flying_Disk_flying.mtl');
    model3 = new BasicModel('./assets/space/asteroid/', 'asteroides_obj.obj', 'asteroides_obj.mtl');
    model4 = new BasicModel('./assets/space/mars/', 'mars.obj', 'mars.mtl');
 }
    const modelMoonPurple = new BasicModel('./assets/space/moon/', 'Moon.obj', 'Moon_purple.mtl');
    const modelMoonCian = new BasicModel('./assets/space/moon/', 'Moon.obj', 'Moon_cian.mtl');
    const modelMoonRed = new BasicModel('./assets/space/moon/', 'Moon.obj', 'Moon_red.mtl');

    if (TipoDeEscenario == 1){
    model1._loadObjWithMtl((luna) =>{
      luna.position.set(-200, 100, -100);
      luna.scale.set(0.2, 0.2, 0.2);
      this._scene.add(luna);
    })

    model2._loadObjWithMtl((ovni) =>{
      ovni.position.set(150, 30, -90);
      ovni.scale.set(0.2, 0.2, 0.2);
      this._scene.add(ovni);
    })
    
    model3._loadObjWithMtl((asteorides) =>{
      asteorides.position.set(200, 40, -200);
      asteorides.scale.set(0.3, 0.3, 0.3);
      this._scene.add(asteorides);
    })
    model3._loadObjWithMtl((asteorides) =>{
      asteorides.position.set(250, -25, -200);
      asteorides.scale.set(0.1, 0.1, 0.1);
      this._scene.add(asteorides);
    })

    model4._loadObjWithMtl((marte) =>{
      marte.position.set(-300, -200, -300);
      marte.scale.set(100, 100, 100);
      this._scene.add(marte);
    })
  }

  if(TipoDeEscenario == 2){

    model2 = new BasicModel('./assets/castle/castle2/', 'castillo_OBJ.obj', 'castillo_OBJ.mtl');
    model2._loadObjWithMtl((castillo) =>{
      castillo.position.set(0, -40, -140);
      castillo.scale.set(3, 3, 3);
      this._scene.add(castillo);
    })

  }


model1._loadObjWithMtl((lunaobstaculo) =>{
  lunaobstaculo.position.set(60, 0, -15);
  lunaobstaculo.scale.set(0.007, 0.007, 0.007);
  this._scene.add(lunaobstaculo);
  lunaobstaculo.name = "lunaobstaculo";
})

model1._loadObjWithMtl((lunaobstaculo2) =>{
  lunaobstaculo2.position.set(60, 15, -15);
  lunaobstaculo2.scale.set(0.007, 0.007, 0.007);
  this._scene.add(lunaobstaculo2);
  lunaobstaculo2.name = "lunaobstaculo2";
})

modelMoonPurple._loadObjWithMtl((lunaPowerUp01) =>{
  lunaPowerUp01.position.set(60, 20, -15);
  lunaPowerUp01.scale.set(0.007, 0.007, 0.007);
  this._scene.add(lunaPowerUp01);
  lunaPowerUp01.name = "lunaPowerUp01";
})

modelMoonCian._loadObjWithMtl((lunaPowerUp02) =>{
  lunaPowerUp02.position.set(60, 20, -15);
  lunaPowerUp02.scale.set(0.007, 0.007, 0.007);
  this._scene.add(lunaPowerUp02);
  lunaPowerUp02.name = "lunaPowerUp02";
})

modelMoonRed._loadObjWithMtl((lunaPowerUp03) =>{
  lunaPowerUp03.position.set(60, 20, -15);
  lunaPowerUp03.scale.set(0.007, 0.007, 0.007);
  this._scene.add(lunaPowerUp03);
  lunaPowerUp03.name = "lunaPowerUp03";
})

var jugador1=new THREE.Object3D();
var materialcubo=new THREE.MeshPhongMaterial({color:new THREE.Color(0,0.5,0.0), opacity: 0.0, transparent: true});
var geometrycubo=new THREE.BoxGeometry(2.5,15,2);
jugador1=new THREE.Mesh(geometrycubo,materialcubo);
jugador1.position.set(0,0,0);
jugador1.position.z=-15;
jugador1.position.y=8;
jugador1.position.x=-10;
this._scene.add(jugador1);
jugador1.name = "jugador1"

var powerUpHelpJ01 = new THREE.Object3D();
var materialcubopowerUpHelpJ01=new THREE.MeshLambertMaterial({color:new THREE.Color(0.5,0.0,0.0)});
var geometrycubopowerUpHelpJ01=new THREE.BoxGeometry(2.5,15,2);
powerUpHelpJ01=new THREE.Mesh(geometrycubopowerUpHelpJ01,materialcubopowerUpHelpJ01);
powerUpHelpJ01.position.set(0,0,0);
powerUpHelpJ01.position.z=-15;
powerUpHelpJ01.position.y=8;
powerUpHelpJ01.position.x=60;
this._scene.add(powerUpHelpJ01);
powerUpHelpJ01.name = "powerUpHelpJ01"

var jugador2=new THREE.Object3D();
var materialcubo02=new THREE.MeshPhongMaterial({color:new THREE.Color(0,0.5,0.0), opacity: 0.0, transparent: true});
var geometrycubo02=new THREE.BoxGeometry(2.5,15,2);
jugador2=new THREE.Mesh(geometrycubo02,materialcubo02);
jugador2.position.set(0,0,0);
jugador2.position.z=-15;
jugador1.position.y=8;
jugador2.position.x=10;
this._scene.add(jugador2);
jugador2.name = "jugador2"

var powerUpHelpJ02 = new THREE.Object3D();
var materialcubopowerUpHelpJ02=new THREE.MeshLambertMaterial({color:new THREE.Color(0.0,0.0,0.5)});
var geometrycubopowerUpHelpJ02=new THREE.BoxGeometry(2.5,15,2);
powerUpHelpJ02=new THREE.Mesh(geometrycubopowerUpHelpJ02,materialcubopowerUpHelpJ02);
powerUpHelpJ02.position.set(0,0,0);
powerUpHelpJ02.position.z=-15;
powerUpHelpJ02.position.y=8;
powerUpHelpJ02.position.x=60;
this._scene.add(powerUpHelpJ02);
powerUpHelpJ02.name = "powerUpHelpJ02"


var obstaculo=new THREE.Object3D();
var materialcuboobstaculo=new THREE.MeshPhongMaterial({color:new THREE.Color(0,0.5,0.0), opacity: 0.0, transparent: true});
var geometrycuboobstaculo=new THREE.BoxGeometry(2.8,2.8,2.8);
obstaculo=new THREE.Mesh(geometrycuboobstaculo,materialcuboobstaculo);
obstaculo.position.set(0,0,0);
obstaculo.position.z=-15;
obstaculo.position.y= 1;
obstaculo.position.x=60;
this._scene.add(obstaculo);
obstaculo.name = "obstaculo"


var obstaculo2=new THREE.Object3D();
var materialcuboobstaculo2=new THREE.MeshPhongMaterial({color:new THREE.Color(0,0.5,0.0), opacity: 0.0, transparent: true});
var geometrycuboobstaculo2=new THREE.BoxGeometry(2.8,2.8,2.8);
obstaculo2=new THREE.Mesh(geometrycuboobstaculo2,materialcuboobstaculo2);
obstaculo2.position.set(0,0,0);
obstaculo2.position.z=-15;
obstaculo2.position.y= 15;
obstaculo2.position.x= 60;
this._scene.add(obstaculo2);
obstaculo2.name = "obstaculo2"

var powerUpBox=new THREE.Object3D();
var materialcubopowerUpBox=new THREE.MeshPhongMaterial({color:new THREE.Color(0,0.5,0.0), opacity: 0.0, transparent: true});
var geometrycubopowerUpBox=new THREE.BoxGeometry(2.8,2.8,2.8);
powerUpBox=new THREE.Mesh(geometrycubopowerUpBox,materialcubopowerUpBox);
powerUpBox.position.set(0,0,0);
powerUpBox.position.z=-15;
powerUpBox.position.y= 20;
powerUpBox.position.x= 60;
this._scene.add(powerUpBox);
powerUpBox.name = "powerUpBox"

var PowerUpSphere01J1=new THREE.Object3D();
var materialcuboPowerUpSphere01J1=new THREE.MeshLambertMaterial({color:new THREE.Color(0.5,0.0,0.5)});
var geometrycuboPowerUpSphere01J1=new THREE.SphereGeometry( 1, 10, 10 );
PowerUpSphere01J1=new THREE.Mesh(geometrycuboPowerUpSphere01J1,materialcuboPowerUpSphere01J1);
PowerUpSphere01J1.position.set(0,0,0);
PowerUpSphere01J1.position.z=-15;
PowerUpSphere01J1.position.y= -3;
PowerUpSphere01J1.position.x= 60;
this._scene.add(PowerUpSphere01J1);
PowerUpSphere01J1.name = "PowerUpSphere01J1"

var PowerUpSphere02J1=new THREE.Object3D();
var materialcuboPowerUpSphere02J1=new THREE.MeshLambertMaterial({color:new THREE.Color(0.0,0.3,0.3)});
var geometrycuboPowerUpSphere02J1=new THREE.SphereGeometry( 1, 10, 10 );
PowerUpSphere02J1=new THREE.Mesh(geometrycuboPowerUpSphere02J1,materialcuboPowerUpSphere02J1);
PowerUpSphere02J1.position.set(0,0,0);
PowerUpSphere02J1.position.z=-15;
PowerUpSphere02J1.position.y= -3;
PowerUpSphere02J1.position.x= 60;
this._scene.add(PowerUpSphere02J1);
PowerUpSphere02J1.name = "PowerUpSphere02J1"

var PowerUpSphere03J1=new THREE.Object3D();
var materialcuboPowerUpSphere03J1=new THREE.MeshLambertMaterial({color:new THREE.Color(0.5,0.0,0.0)});
var geometrycuboPowerUpSphere03J1=new THREE.SphereGeometry( 1, 10, 10 );
PowerUpSphere03J1=new THREE.Mesh(geometrycuboPowerUpSphere03J1,materialcuboPowerUpSphere03J1);
PowerUpSphere03J1.position.set(0,0,0);
PowerUpSphere03J1.position.z=-15;
PowerUpSphere03J1.position.y= -3;
PowerUpSphere03J1.position.x= 60;
this._scene.add(PowerUpSphere03J1);
PowerUpSphere03J1.name = "PowerUpSphere03J1"

var PowerUpSphere01J2 = PowerUpSphere01J1.clone();
this._scene.add(PowerUpSphere01J2);
PowerUpSphere01J2.name = "PowerUpSphere01J2"

var PowerUpSphere02J2 = PowerUpSphere02J1.clone();
this._scene.add(PowerUpSphere02J2);
PowerUpSphere02J2.name = "PowerUpSphere02J2"

var PowerUpSphere03J2 = PowerUpSphere03J1.clone();
this._scene.add(PowerUpSphere03J2);
PowerUpSphere03J2.name = "PowerUpSphere03J2"


var PowerUpSphereVidas01 = new THREE.Object3D();
var materialcuboPowerUpSphereVidas01=new THREE.MeshLambertMaterial({color:new THREE.Color(0.5,0.0,0.0)});
var geometrycuboPowerUpSphereVidas01=new THREE.SphereGeometry( 1, 10, 10 );
PowerUpSphereVidas01=new THREE.Mesh(geometrycuboPowerUpSphereVidas01,materialcuboPowerUpSphereVidas01);
PowerUpSphereVidas01.position.set(0,0,0);
PowerUpSphereVidas01.position.z= -15;
PowerUpSphereVidas01.position.y = 25;
PowerUpSphereVidas01.position.x = -5;
this._scene.add(PowerUpSphereVidas01);
PowerUpSphereVidas01.name = "PowerUpSphereVidas01"

var PowerUpSphereVidas02 = new THREE.Object3D();
var materialcuboPowerUpSphereVidas02=new THREE.MeshLambertMaterial({color:new THREE.Color(0.5,0.0,0.0)});
var geometrycuboPowerUpSphereVidas02=new THREE.SphereGeometry( 1, 10, 10 );
PowerUpSphereVidas02=new THREE.Mesh(geometrycuboPowerUpSphereVidas02,materialcuboPowerUpSphereVidas02);
PowerUpSphereVidas02.position.set(0,0,0);
PowerUpSphereVidas02.position.z= -15;
PowerUpSphereVidas02.position.y = 25;
PowerUpSphereVidas02.position.x = 0;
this._scene.add(PowerUpSphereVidas02);
PowerUpSphereVidas02.name = "PowerUpSphereVidas02"

var PowerUpSphereVidas03 = new THREE.Object3D();
var materialcuboPowerUpSphereVidas03=new THREE.MeshLambertMaterial({color:new THREE.Color(0.5,0.0,0.0)});
var geometrycuboPowerUpSphereVidas03=new THREE.SphereGeometry( 1, 10, 10 );
PowerUpSphereVidas03=new THREE.Mesh(geometrycuboPowerUpSphereVidas03,materialcuboPowerUpSphereVidas03);
PowerUpSphereVidas03.position.set(0,0,0);
PowerUpSphereVidas03.position.z= -15;
PowerUpSphereVidas03.position.y = 25;
PowerUpSphereVidas03.position.x = 5;
this._scene.add(PowerUpSphereVidas03);
PowerUpSphereVidas03.name = "PowerUpSphereVidas03"



//this.world_ = new world.WorldManager({scene: this._scene});

let plane;

if(TipoDeEscenario == 1){
  plane = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 10, 10),
        new THREE.MeshStandardMaterial({
            color: 0x641a67,
          }));
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -10;
    this._scene.add(plane);
 }

 if(TipoDeEscenario == 2){
  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 100, 10, 10),
    new THREE.MeshStandardMaterial({
        color: 0x001100,
      }));
    plane.position.y = 0;
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -10;
    this._scene.add(plane);
 }

    this._mixers = [];
    this._previousRAF = null;

 
    this._LoadAnimatedModel();
    this._LoadAnimatedModel02();

    this._RAF();


    score = 0;
    highscore = 0;
    if (localStorage.getItem('highscore')) {
       highscore = localStorage.getItem('highscore');
       HighscoreID.textContent = highscore;
    }

    HighscoreID.textContent = highscore;
    ScoreID.textContent = score;

  }

  _LoadAnimatedModel() {
    const params = {
      camera: this._camera,
      scene: this._scene,
    }
    this._controls = new BasicCharacterController(params);
  }

  _LoadAnimatedModel02() {
    const params02 = {
      camera: this._camera,
      scene: this._scene,
    }
    this._controls02 = new BasicCharacterController02(params02);
  }


  

  _LoadModel() {
    const loader = new GLTFLoader();
    loader.load('./resources/thing.glb', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });
      this._scene.add(gltf.scene);
    });
  }

  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
  }

  _RAF() {
    requestAnimationFrame((t) => {
      if (this._previousRAF === null) {
        this._previousRAF = t;
      }

      this._RAF();

      this._threejs.render(this._scene, this._camera);
      this._Render(t - this._previousRAF);
      this._previousRAF = t;
    });
  }

  _Render(timeElapsed) {

    

    if(playGameModal == true){
    $('#PlayGame').modal('show');
    playGameModal = false;
    }

    const timeElapsedS = timeElapsed * 0.001;
    if (this._mixers) {
      this._mixers.map(m => m.update(timeElapsedS));
    }

   // this.world_.Update(timeElapsedS);

   

    if (this._controls) {
      this._controls.Update(timeElapsedS);
    }

    if (this._controls02) {
      this._controls02.Update(timeElapsedS);
    }

     ////////////////////////// MODO VIDAS SPHERE

     var PowerUpSphereVidas01 = this._scene.getObjectByName("PowerUpSphereVidas01");
     var PowerUpSphereVidas02 = this._scene.getObjectByName("PowerUpSphereVidas02");
     var PowerUpSphereVidas03 = this._scene.getObjectByName("PowerUpSphereVidas03");
     
     if (TipoDeModo == 2){

      if( InicioJuego == true){
      PowerUpSphereVidas01.position.x = 60;
      PowerUpSphereVidas02.position.x = 60;
      PowerUpSphereVidas03.position.x = 60;
      contadorVidas = 3;
      InicioJuego = false;

      }
    }

    //////////////////////////// INICIO DEL JUEGO

    if (juegoPausa == false){

    GameSpeedLevel();

    var obstaculo = this._scene.getObjectByName("obstaculo");
    var lunaobstaculo = this._scene.getObjectByName("lunaobstaculo");
    var obstaculo2 = this._scene.getObjectByName("obstaculo2");
    var lunaobstaculo2 = this._scene.getObjectByName("lunaobstaculo2");

    var powerUpBox = this._scene.getObjectByName("powerUpBox");
    
    var jugador1 = this._scene.getObjectByName("jugador1");
    var jugador2 = this._scene.getObjectByName("jugador2");
    var powerUpHelpJ01 = this._scene.getObjectByName("powerUpHelpJ01");
    var powerUpHelpJ02 = this._scene.getObjectByName("powerUpHelpJ02");

    

    var lunaPowerUp01 = this._scene.getObjectByName("lunaPowerUp01");
    var lunaPowerUp02 = this._scene.getObjectByName("lunaPowerUp02");
    var lunaPowerUp03 = this._scene.getObjectByName("lunaPowerUp03");

    var PowerUpSphere01J1 = this._scene.getObjectByName("PowerUpSphere01J1");
    var PowerUpSphere02J1 = this._scene.getObjectByName("PowerUpSphere02J1");
    var PowerUpSphere03J1 = this._scene.getObjectByName("PowerUpSphere03J1");

    var PowerUpSphere01J2 = this._scene.getObjectByName("PowerUpSphere01J2");
    var PowerUpSphere02J2 = this._scene.getObjectByName("PowerUpSphere02J2");
    var PowerUpSphere03J2 = this._scene.getObjectByName("PowerUpSphere03J2");




   

    

    ////////////////////////// OBSTACULO POSITION


    if (cambioObstaculo == true){
      obstaculoTipoNumber = RandomIntInRange(1,2);
      } 

      switch (obstaculoTipoNumber) {
        case 1:

          cambioObstaculo = false;

          obstaculo.position.x -= inicialGameSpeed;    
          if (obstaculo.position.x <= -60){
            obstaculo.position.x = 60;
            cambioObstaculo = true;
          }
      
          lunaobstaculo.position.x -= inicialGameSpeed;
          if (lunaobstaculo.position.x <= -60){
            lunaobstaculo.position.x = 60;
          }

            break;  
  
        case 2:

          cambioObstaculo = false;

          obstaculo2.position.x -= inicialGameSpeed;    
          if (obstaculo2.position.x <= -60){
            obstaculo2.position.x = 60;

            cambioObstaculo = true;
          }
      
          lunaobstaculo2.position.x -= inicialGameSpeed;
          if (lunaobstaculo2.position.x <= -60){
            lunaobstaculo2.position.x = 60;
          }

            break;
        default:
            break;
    }

   

    ////////////////////////// POWER UP POSITION

    powerUpBox.position.x -= 0.1;
    if (powerUpBox.position.x <= -60){
      powerUpBox.position.x = 60;
    }

    if (cambioPowerUp == true){
    powerUpTipoNumber = RandomIntInRange(1,3);
    } 

    switch (powerUpTipoNumber) {
      case 1:
        cambioPowerUp = false;
        lunaPowerUp01.position.x -= 0.1;
        if (lunaPowerUp01.position.x <= -60){
          lunaPowerUp01.position.x = 60;
          cambioPowerUp = true;
        }
          break;  

      case 2:
        cambioPowerUp = false;
        lunaPowerUp02.position.x -= 0.1;
        if (lunaPowerUp02.position.x <= -60){
          lunaPowerUp02.position.x = 60;
          cambioPowerUp = true;
        }

          break;
        
      case 3:
        cambioPowerUp = false;
        lunaPowerUp03.position.x -= 0.1;
        if (lunaPowerUp03.position.x <= -60){
          lunaPowerUp03.position.x = 60;
          cambioPowerUp = true;
        }

          break; 
      default:
          break;
  }
   

  if (invencibilidad01 == true){

    contadorInvencibilidad01 += 0.1;

    if(contadorInvencibilidad01 >= 100){
      invencibilidad01 = false;
      contadorInvencibilidad01 = 0;
      PowerUpSphere01J1.position.x = 60;
    }
  }

    if (invencibilidad02 == true){

      contadorInvencibilidad02 += 0.1;

      if(contadorInvencibilidad02 >= 100){
        invencibilidad02 = false;
        contadorInvencibilidad02 = 0;
        PowerUpSphere01J2.position.x = 60;
      }
    }

    if (Help01 == true){

      powerUpHelpJ01.position.x = -10;
      contadorHelp01 += 0.1;
  
      if(contadorHelp01 >= 100){
        Help01 = false;
        contadorHelp01 = 0;
        PowerUpSphere02J1.position.x = 60;
        powerUpHelpJ01.position.x = 60;
      }
    }
  
      if (Help02 == true){
  
        powerUpHelpJ02.position.x = 10;
        contadorHelp02 += 0.1;
  
        if(contadorHelp02 >= 100){
          Help02 = false;
          contadorHelp02 = 0;
          PowerUpSphere02J2.position.x = 60;
          powerUpHelpJ02.position.x = 60;
        }
      }

      if (NoElegirPowerUp01 == true){

        contadorNoElegirPowerUp01 += 0.1;
    
        if(contadorNoElegirPowerUp01 >= 100){
          NoElegirPowerUp01 = false;
          contadorNoElegirPowerUp01 = 0;
          PowerUpSphere03J1.position.x = 60;
        }
      }
    
        if (NoElegirPowerUp02 == true){
    
          contadorNoElegirPowerUp02 += 0.1;
    
          if(contadorNoElegirPowerUp02 >= 100){
            NoElegirPowerUp02 = false;
            contadorNoElegirPowerUp02 = 0;
            PowerUpSphere03J2.position.x = 60;
          }
        }

    jugador1.position.y = SaltojumpBox01;
    jugador2.position.y = SaltojumpBox02;
    powerUpHelpJ01.position.y = SaltojumpBox01;
    powerUpHelpJ02.position.y = SaltojumpBox02;
    

    //////////////////////////// COLISIONES

    var Jugador1BB = new THREE.Box3().setFromObject(jugador1);
    var Obstaculo01J1 = new THREE.Box3().setFromObject(obstaculo);
    var Obstaculo02J1 = new THREE.Box3().setFromObject(obstaculo2);
    var powerUpBoxBB01 = new THREE.Box3().setFromObject(powerUpBox);
   
    var collision01J1 = Jugador1BB.intersectsBox(Obstaculo01J1);
    if (invencibilidad01 == false) {  
      if(collision01J1){
        obstaculo.position.x = 60; 
        lunaobstaculo.position.x = 60; 
        cambioObstaculo = true;
        if (TipoDeModo == 2){
        GameEndJ1 = true;
        alertPausa = true;
        }
        if(TipoDeModo == 1){
          contadorVidas = contadorVidas - 1;
        }
      
        //this._scene.remove(obstaculo);
        //alert('Jugador 01 Perdio :c');
      }
    }

      var collision02J1 = Jugador1BB.intersectsBox(Obstaculo02J1);  
    if (invencibilidad01 == false) {
      if(collision02J1){
        obstaculo2.position.x = 60; 
        lunaobstaculo2.position.x = 60;
        cambioObstaculo = true;  
        if (TipoDeModo == 2){ 
        GameEndJ1 = true;
        alertPausa = true;
        }
        if(TipoDeModo == 1){
          contadorVidas = contadorVidas - 1;
        }      
        //this._scene.remove(obstaculo);
        //alert('Jugador 01 Perdio :c');
      }
    }

      var collisionPU01 = Jugador1BB.intersectsBox(powerUpBoxBB01);
    if (NoElegirPowerUp02 == false) {  
      if(collisionPU01){
        
        
        if ( NoElegirPowerUp01 != true && Help01 != true && invencibilidad01 != true){
        if (lunaPowerUp01.position.x < 59){
          PowerUpActivo(1);
          PowerUpSphere01J1.position.x = -10;
        }

        if (lunaPowerUp02.position.x < 59){
          PowerUpActivo(2);
          PowerUpSphere02J1.position.x = -10;
        }

        if (lunaPowerUp03.position.x < 59){
          PowerUpActivo(3);
          PowerUpSphere03J1.position.x = -10;
        }

        powerUpBox.position.x = 60; 
        lunaPowerUp01.position.x = 60;
        lunaPowerUp02.position.x = 60;
        lunaPowerUp03.position.x = 60;
        cambioPowerUp = true;
      }

        
      }
    }


    var Jugador2BB = new THREE.Box3().setFromObject(jugador2);
    var Obstaculo01J2 = new THREE.Box3().setFromObject(obstaculo);
    var Obstaculo02J2 = new THREE.Box3().setFromObject(obstaculo2);
    var powerUpBoxBB02 = new THREE.Box3().setFromObject(powerUpBox);
   
    var collision01J2 = Jugador2BB.intersectsBox(Obstaculo01J2); 
    if (invencibilidad02 == false) {
      if(collision01J2){
       
        obstaculo.position.x = 60; 
        lunaobstaculo.position.x = 60;
        cambioObstaculo = true; 
        if (TipoDeModo == 2){ 
        GameEndJ2 = true;
        alertPausa = true;
        }
        if(TipoDeModo == 1){
          contadorVidas = contadorVidas - 1;
        }    
        //this._scene.remove(obstaculo);
        //alert('Jugador 02 Perdio :c');
      }
    } 

      var collision02J2 = Jugador2BB.intersectsBox(Obstaculo02J2);
      if (invencibilidad02 == false) {
      if(collision02J2){
        
        obstaculo2.position.x = 60; 
        lunaobstaculo2.position.x = 60;
        cambioObstaculo = true;
        if (TipoDeModo == 2){
        GameEndJ2 = true;
        alertPausa = true;
        }
        if(TipoDeModo == 1){
          contadorVidas = contadorVidas - 1;
        }
                  
        //this._scene.remove(obstaculo);
        //alert('Jugador 02 Perdio :c');
      }

    } 

      var collisionPU02 = Jugador2BB.intersectsBox(powerUpBoxBB02);
    if (NoElegirPowerUp01 == false) { 
       if(collisionPU02){

        
        

        if ( NoElegirPowerUp02 != true && Help02 != true && invencibilidad02 != true){

        if (lunaPowerUp01.position.x < 59){
          PowerUpActivo(4);
          PowerUpSphere01J2.position.x = 10;
        }

        if (lunaPowerUp02.position.x < 59){
          PowerUpActivo(5);
          PowerUpSphere02J2.position.x = 10;
        }

        if (lunaPowerUp03.position.x < 59){
          PowerUpActivo(6);
          PowerUpSphere03J2.position.x = 10;
        }

        powerUpBox.position.x = 60;
        lunaPowerUp01.position.x = 60;
        lunaPowerUp02.position.x = 60;
        lunaPowerUp03.position.x = 60;
        cambioPowerUp = true; 

      }

        
       }
      }
     

      contadorScore++;

      if(contadorScore%20==0){
        
        score++;
        ScoreID.textContent = score;
         
      }
      
      if (score > highscore) {
        highscore = score;
        superoHighscore = true;
        HighscoreID.textContent = highscore;
      }


      if (TipoDeModo == 2){

      if(GameEndJ1 == true){

        if (alertPausa == true){
          if (superoHighscore == true) {
              const Ganador = document.getElementById('UsuarioGanadorLP');
                Ganador.textContent = "Player 2";
              const Puntuacion = document.getElementById('PuntuacionLugar');
               Puntuacion.textContent = score;
               $('#LugarPuntuacion').modal('show');
               superoHighscore = false;
            } else{
              const Ganador = document.getElementById('UsuarioGanador');
              Ganador.textContent = "Player 2";
               const Puntuacion = document.getElementById('Puntuación');
               Puntuacion.textContent = score;
               $('#TerminoJuego').modal('show');
               superoHighscore = false;
            }
          alertPausa = false;
      } 
      juegoPausa = true;

    score = 0;
    window.localStorage.setItem('highscore', highscore);
    GameEndJ1 = false;
    contadorGameSpeed = 0;
    LevelGameSpeed = 1;
    powerUpBox.position.x = 60;
    lunaPowerUp01.position.x = 60;
    lunaPowerUp02.position.x = 60;
    lunaPowerUp03.position.x = 60;
    PowerUpSphere01J1.position.x = 60;
    PowerUpSphere02J1.position.x = 60;
    PowerUpSphere03J1.position.x = 60;
    PowerUpSphere01J2.position.x = 60;
    PowerUpSphere02J2.position.x = 60;
    PowerUpSphere03J2.position.x = 60;
    powerUpHelpJ01.position.x = 60;
    powerUpHelpJ02.position.x = 60;
    contadorInvencibilidad01 = 0;
    contadorInvencibilidad02 = 0;
    contadorHelp01 = 0;
    contadorHelp02 = 0;
    contadorNoElegirPowerUp01=0;
    contadorNoElegirPowerUp02=0;
    InicioJuego = true;


    const music = document.getElementById('MusicGame');
    music.pause();


      } else if (GameEndJ2 == true){


        if (alertPausa == true){
          if (superoHighscore == true) {
              const Ganador = document.getElementById('UsuarioGanadorLP');
              Ganador.textContent = "Player 1";
              const Puntuacion = document.getElementById('PuntuacionLugar');
               Puntuacion.textContent = score;
               $('#LugarPuntuacion').modal('show');
               superoHighscore = false;
            } else{
               const Ganador = document.getElementById('UsuarioGanador');
               Ganador.textContent = "Player 1";
               const Puntuacion = document.getElementById('Puntuación');
               Puntuacion.textContent = score;
               $('#TerminoJuego').modal('show');
               superoHighscore = false;
            }
          alertPausa = false;
      } 
      juegoPausa = true;

    score = 0;
    window.localStorage.setItem('highscore', highscore);
    GameEndJ2 = false;
    contadorGameSpeed = 0;
    LevelGameSpeed = 1;
    powerUpBox.position.x = 60;
    lunaPowerUp01.position.x = 60;
    lunaPowerUp02.position.x = 60;
    lunaPowerUp03.position.x = 60;
    PowerUpSphere01J1.position.x = 60;
    PowerUpSphere02J1.position.x = 60;
    PowerUpSphere03J1.position.x = 60;
    PowerUpSphere01J2.position.x = 60;
    PowerUpSphere02J2.position.x = 60;
    PowerUpSphere03J2.position.x = 60;
    powerUpHelpJ01.position.x = 60;
    powerUpHelpJ02.position.x = 60;
    contadorInvencibilidad01 = 0;
    contadorInvencibilidad02 = 0;
    contadorHelp01 = 0;
    contadorHelp02 = 0;
    contadorNoElegirPowerUp01=0;
    contadorNoElegirPowerUp02=0;
    InicioJuego = true;
    const music = document.getElementById('MusicGame');
    music.pause();
      }

    }

    if(TipoDeModo == 1){

      if(contadorVidas == 2){
        PowerUpSphereVidas03.position.x = 60;
      } else if (contadorVidas == 1){
        PowerUpSphereVidas02.position.x = 60;
      } if (contadorVidas == 0){
        alertPausa = true;
        GameEndCooperativo = true;
        PowerUpSphereVidas01.position.x = 60;

      }

      if(GameEndCooperativo == true){
        
        if (alertPausa == true){
          if (superoHighscore == true) {
              const Ganador = document.getElementById('UsuarioGanadorLP');
                Ganador.textContent = "Player 1 & 2";
              const Puntuacion = document.getElementById('PuntuacionLugar');
               Puntuacion.textContent = score;
               $('#LugarPuntuacion').modal('show');
               superoHighscore = false;
            } else{
              const Ganador = document.getElementById('UsuarioGanador');
              Ganador.textContent = "Player 1 & 2";
               const Puntuacion = document.getElementById('Puntuación');
               Puntuacion.textContent = score;
               $('#TerminoJuego').modal('show');
               superoHighscore = false;
            }
          alertPausa = false;
      } 
      juegoPausa = true;

    score = 0;
    window.localStorage.setItem('highscore', highscore);
    GameEndCooperativo = false;
    contadorGameSpeed = 0;
    LevelGameSpeed = 1;
    powerUpBox.position.x = 60;
    lunaPowerUp01.position.x = 60;
    lunaPowerUp02.position.x = 60;
    lunaPowerUp03.position.x = 60;
    PowerUpSphere01J1.position.x = 60;
    PowerUpSphere02J1.position.x = 60;
    PowerUpSphere03J1.position.x = 60;
    PowerUpSphere01J2.position.x = 60;
    PowerUpSphere02J2.position.x = 60;
    PowerUpSphere03J2.position.x = 60;
    powerUpHelpJ01.position.x = 60;
    powerUpHelpJ02.position.x = 60;
    contadorInvencibilidad01 = 0;
    contadorInvencibilidad02 = 0;
    contadorHelp01 = 0;
    contadorHelp02 = 0;
    contadorNoElegirPowerUp01=0;
    contadorNoElegirPowerUp02=0;
    contadorVidas = 3;
    PowerUpSphereVidas01.position.x = -5;
    PowerUpSphereVidas02.position.x = 0;
    PowerUpSphereVidas03.position.x = 5;

    const music = document.getElementById('MusicGame');
    music.pause();

      }
      
    }

  }
}



}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new CharacterControllerDemo();
});





