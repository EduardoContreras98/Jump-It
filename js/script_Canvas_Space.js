import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js';
import {OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import {world} from './script_Canvas-World.js';

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
            'Salto01','prueba_jump.fbx', new THREE.Vector3(-30, 0, 10));    
    
    
            //this._LoadModels();
  }

  _LoadModels() {
    const loader = new FBXLoader();
    loader.setPath('./assets/zombie/');
    loader.load('mremireh_o_desbiens.fbx', (fbx) => {
      fbx.scale.setScalar(0.1);
      fbx.traverse(c => {
        c.castShadow = true;
      });

      this._target = fbx;
      this._params.scene.add(this._target);

      this._mixer = new THREE.AnimationMixer(this._target);

      this._manager = new THREE.LoadingManager();
      this._manager.onLoad = () => {
        this._stateMachine.SetState('idle');
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
      loader.setPath('./assets/zombie/');
      loader.load('walk.fbx', (a) => { _OnLoad('walk', a); });
      loader.load('run.fbx', (a) => { _OnLoad('run', a); });
      loader.load('idle.fbx', (a) => { _OnLoad('idle', a); });
      loader.load('dance.fbx', (a) => { _OnLoad('dance', a); });
    });
  }

  _CargaModels(path, modelFile, nameanimFile01,animFile01, nameanimFile02,animFile02, offset) {
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

    //if (this._stateMachine._currentState.Name == 'Salto') {
    //  acc.multiplyScalar(0.0);
    //}

    /*
    if (this._input._keys.forward) {
      velocity.z += acc.z * timeInSeconds;
    }
    if (this._input._keys.backward) {
      velocity.z -= acc.z * timeInSeconds;
    }
    if (this._input._keys.left) {
      _A.set(0, 1, 0);
      _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y);
      _R.multiply(_Q);
    }
    if (this._input._keys.right) {
      _A.set(0, 1, 0);
      _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y);
      _R.multiply(_Q);
    }

    */
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
    }
  }
};

class BasicCharacterController02 {
    constructor(params) {
      this._Init(params);
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
  
  
      this._CargaModels(
              './assets/guardia/', 'ModeloPrueba.fbx','Parado02', 'Happy Idle.fbx',
              'Salto02','prueba_jump.fbx', new THREE.Vector3(-10, 0, 10));   
      
      
              //this._LoadModels();
    }
  
    _LoadModels() {
      const loader = new FBXLoader();
      loader.setPath('./assets/zombie/');
      loader.load('mremireh_o_desbiens.fbx', (fbx) => {
        fbx.scale.setScalar(0.1);
        fbx.traverse(c => {
          c.castShadow = true;
        });
  
        this._target = fbx;
        this._params.scene.add(this._target);
  
        this._mixer = new THREE.AnimationMixer(this._target);
  
        this._manager = new THREE.LoadingManager();
        this._manager.onLoad = () => {
          this._stateMachine.SetState('idle');
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
        loader.setPath('./assets/zombie/');
        loader.load('walk.fbx', (a) => { _OnLoad('walk', a); });
        loader.load('run.fbx', (a) => { _OnLoad('run', a); });
        loader.load('idle.fbx', (a) => { _OnLoad('idle', a); });
        loader.load('dance.fbx', (a) => { _OnLoad('dance', a); });
      });
    }
  
    _CargaModels(path, modelFile, nameanimFile01,animFile01, nameanimFile02,animFile02, offset) {
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
  
      //if (this._stateMachine._currentState.Name == 'Salto') {
      //  acc.multiplyScalar(0.0);
      //}
  
      /*
      if (this._input._keys.forward) {
        velocity.z += acc.z * timeInSeconds;
      }
      if (this._input._keys.backward) {
        velocity.z -= acc.z * timeInSeconds;
      }
      if (this._input._keys.left) {
        _A.set(0, 1, 0);
        _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y);
        _R.multiply(_Q);
      }
      if (this._input._keys.right) {
        _A.set(0, 1, 0);
        _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y);
        _R.multiply(_Q);
      }
  
      */
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
      }
    }
};

class BasicCharacterController03 {
    constructor(params) {
      this._Init(params);
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
  
  
      this._CargaModels(
              './assets/guardia/', 'ModeloPrueba.fbx','Parado03', 'Happy Idle.fbx',
              'Salto03','prueba_jump.fbx', new THREE.Vector3(10, 0, 10));   
      
    }
  
    _CargaModels(path, modelFile, nameanimFile01,animFile01, nameanimFile02,animFile02, offset) {
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
  
      //if (this._stateMachine._currentState.Name == 'Salto') {
      //  acc.multiplyScalar(0.0);
      //}
  
      /*
      if (this._input._keys.forward) {
        velocity.z += acc.z * timeInSeconds;
      }
      if (this._input._keys.backward) {
        velocity.z -= acc.z * timeInSeconds;
      }
      if (this._input._keys.left) {
        _A.set(0, 1, 0);
        _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y);
        _R.multiply(_Q);
      }
      if (this._input._keys.right) {
        _A.set(0, 1, 0);
        _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y);
        _R.multiply(_Q);
      }
  
      */
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
      }
    }
};

class BasicCharacterController04 {
    constructor(params) {
      this._Init(params);
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
  
  
      this._CargaModels(
              './assets/guardia/', 'ModeloPrueba.fbx','Parado04', 'Happy Idle.fbx',
              'Salto04','prueba_jump.fbx', new THREE.Vector3(30, 0, 10));   
      
    }
  
    _CargaModels(path, modelFile, nameanimFile01,animFile01, nameanimFile02,animFile02, offset) {
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
  
      //if (this._stateMachine._currentState.Name == 'Salto') {
      //  acc.multiplyScalar(0.0);
      //}
  
      /*
      if (this._input._keys.forward) {
        velocity.z += acc.z * timeInSeconds;
      }
      if (this._input._keys.backward) {
        velocity.z -= acc.z * timeInSeconds;
      }
      if (this._input._keys.left) {
        _A.set(0, 1, 0);
        _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y);
        _R.multiply(_Q);
      }
      if (this._input._keys.right) {
        _A.set(0, 1, 0);
        _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y);
        _R.multiply(_Q);
      }
  
      */
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
      }
    }
};

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
        break;
      case 65: // a
        this._keys.left = true;
        break;
      case 83: // s
        this._keys.backward = true;
        break;
      case 68: // d
        this._keys.right = true;
        break;
      case 84: // t
        this._keys.salto02 = true;
        break;
      case 73: // i
        this._keys.salto03 = true;
        break;
      case 80: // p
        this._keys.salto04 = true;
        break;
      case 32: // SPACE
        this._keys.space = true;
        break;
      case 16: // SHIFT
        this._keys.shift = true;
        break;
    }
  }

  _onKeyUp(event) {
    switch(event.keyCode) {
      case 87: // w
        this._keys.salto01 = false;
        break;
      case 65: // a
        this._keys.left = false;
        break;
      case 83: // s
        this._keys.backward = false;
        break;
      case 68: // d
        this._keys.right = false;
        break;
        case 84: // t
        this._keys.salto02 = false;
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

    this._AddState('Parado02', Parado02State);
    this._AddState('Salto02', Salto02State);

    this._AddState('Parado03', Parado03State);
    this._AddState('Salto03', Salto03State);

    this._AddState('Parado04', Parado04State);
    this._AddState('Salto04', Salto04State);
  }
};


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
    }
  };


  class Salto03State extends State {
    constructor(parent) {
      super(parent);
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'Salto03';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Salto03'].action;
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
      this._parent.SetState('Parado03');
    }
  
    _Cleanup() {
      const action = this._parent._proxy._animations['Salto03'].action;
      
      action.getMixer().removeEventListener('finished', this._CleanupCallback);
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };

  class Parado03State extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'Parado03';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Parado03'].action;
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
      if (input._keys.salto03) {
        this._parent.SetState('Salto03');
      }
    }
  };

  class Salto04State extends State {
    constructor(parent) {
      super(parent);
  
      this._FinishedCallback = () => {
        this._Finished();
      }
    }
  
    get Name() {
      return 'Salto04';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Salto04'].action;
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
      this._parent.SetState('Parado04');
    }
  
    _Cleanup() {
      const action = this._parent._proxy._animations['Salto04'].action;
      
      action.getMixer().removeEventListener('finished', this._CleanupCallback);
    }
  
    Exit() {
      this._Cleanup();
    }
  
    Update(_) {
    }
  };

  class Parado04State extends State {
    constructor(parent) {
      super(parent);
    }
  
    get Name() {
      return 'Parado04';
    }
  
    Enter(prevState) {
      const Action = this._parent._proxy._animations['Parado04'].action;
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
      if (input._keys.salto04) {
        this._parent.SetState('Salto04');
      }
    }
  };
  
/*
class DanceState extends State {
  constructor(parent) {
    super(parent);

    this._FinishedCallback = () => {
      this._Finished();
    }
  }

  get Name() {
    return 'dance';
  }

  Enter(prevState) {
    const curAction = this._parent._proxy._animations['dance'].action;
    const mixer = curAction.getMixer();
    mixer.addEventListener('finished', this._FinishedCallback);

    if (prevState) {
      const prevAction = this._parent._proxy._animations[prevState.Name].action;

      curAction.reset();  
      curAction.setLoop(THREE.LoopOnce, 1);
      curAction.clampWhenFinished = true;
      curAction.crossFadeFrom(prevAction, 0.2, true);
      curAction.play();
    } else {
      curAction.play();
    }
  }

  _Finished() {
    this._Cleanup();
    this._parent.SetState('idle');
  }

  _Cleanup() {
    const action = this._parent._proxy._animations['dance'].action;
    
    action.getMixer().removeEventListener('finished', this._CleanupCallback);
  }

  Exit() {
    this._Cleanup();
  }

  Update(_) {
  }
};


class WalkState extends State {
  constructor(parent) {
    super(parent);
  }

  get Name() {
    return 'walk';
  }

  Enter(prevState) {
    const curAction = this._parent._proxy._animations['walk'].action;
    if (prevState) {
      const prevAction = this._parent._proxy._animations[prevState.Name].action;

      curAction.enabled = true;

      if (prevState.Name == 'run') {
        const ratio = curAction.getClip().duration / prevAction.getClip().duration;
        curAction.time = prevAction.time * ratio;
      } else {
        curAction.time = 0.0;
        curAction.setEffectiveTimeScale(1.0);
        curAction.setEffectiveWeight(1.0);
      }

      curAction.crossFadeFrom(prevAction, 0.5, true);
      curAction.play();
    } else {
      curAction.play();
    }
  }

  Exit() {
  }

  Update(timeElapsed, input) {
    if (input._keys.forward || input._keys.backward) {
      if (input._keys.shift) {
        this._parent.SetState('run');
      }
      return;
    }

    this._parent.SetState('idle');
  }
};


class RunState extends State {
  constructor(parent) {
    super(parent);
  }

  get Name() {
    return 'run';
  }

  Enter(prevState) {
    const curAction = this._parent._proxy._animations['run'].action;
    if (prevState) {
      const prevAction = this._parent._proxy._animations[prevState.Name].action;

      curAction.enabled = true;

      if (prevState.Name == 'walk') {
        const ratio = curAction.getClip().duration / prevAction.getClip().duration;
        curAction.time = prevAction.time * ratio;
      } else {
        curAction.time = 0.0;
        curAction.setEffectiveTimeScale(1.0);
        curAction.setEffectiveWeight(1.0);
      }

      curAction.crossFadeFrom(prevAction, 0.5, true);
      curAction.play();
    } else {
      curAction.play();
    }
  }

  Exit() {
  }

  Update(timeElapsed, input) {
    if (input._keys.forward || input._keys.backward) {
      if (!input._keys.shift) {
        this._parent.SetState('walk');
      }
      return;
    }

    this._parent.SetState('idle');
  }
};


class IdleState extends State {
  constructor(parent) {
    super(parent);
  }

  get Name() {
    return 'idle';
  }

  Enter(prevState) {
    const idleAction = this._parent._proxy._animations['idle'].action;
    if (prevState) {
      const prevAction = this._parent._proxy._animations[prevState.Name].action;
      idleAction.time = 0.0;
      idleAction.enabled = true;
      idleAction.setEffectiveTimeScale(1.0);
      idleAction.setEffectiveWeight(1.0);
      idleAction.crossFadeFrom(prevAction, 0.5, true);
      idleAction.play();
    } else {
      idleAction.play();
    }
  }

  Exit() {
  }

  Update(_, input) {
    if (input._keys.forward || input._keys.backward) {
      this._parent.SetState('walk');
    } else if (input._keys.space) {
      this._parent.SetState('dance');
    }
  }
};

*/

class CharacterControllerDemo {
  constructor() {
    this._Initialize();
  }

  _Initialize() {
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.outputEncoding = THREE.sRGBEncoding;
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(0, 10, 80);

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

    this.world_ = new world.WorldManager({scene: this._scene});

    ///////////////////////////// Controles de mouse para ver el escenario

        /*
    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 20, 0);
    controls.update(); */

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        './assets/Skybox_02/corona_ft.png',
        './assets/Skybox_02/corona_bk.png',
        './assets/Skybox_02/corona_up.png',
        './assets/Skybox_02/corona_dn.png',
        './assets/Skybox_02/corona_rt.png',
        './assets/Skybox_02/corona_lf.png',
    ]);

    /*
    const texture = loader.load([
      './assets/Skybox_01/stormydays_ft.jpg',
      './assets/Skybox_01/stormydays_bk.jpg',
      './assets/Skybox_01/stormydays_dn.jpg',
      './assets/Skybox_01/stormydays_up.jpg',
      './assets/Skybox_01/stormydays_rt.jpg',
      './assets/Skybox_01/stormydays_lf.jpg',
  ]); */
    texture.encoding = THREE.sRGBEncoding;
    this._scene.background = texture;

    const model1 = new BasicModel('./assets/space/moon/', 'Moon.obj', 'Moon.mtl');
    const model2 = new BasicModel('./assets/space/afo/', 'flying Disk flying.obj', 'flying_Disk_flying.mtl');
    const model3 = new BasicModel('./assets/space/asteroid/', 'asteroides_obj.obj', 'asteroides_obj.mtl');
    const model4 = new BasicModel('./assets/space/mars/', 'mars.obj', 'mars.mtl');

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

    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 10, 10),
        new THREE.MeshStandardMaterial({
            color: 0x641a67,
          }));
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    this._scene.add(plane);

    this._mixers = [];
    this._previousRAF = null;

    this._LoadAnimatedModel();
    this._LoadAnimatedModel02();
    this._LoadAnimatedModel03();
    this._LoadAnimatedModel04();
    this._RAF();
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

  _LoadAnimatedModel03() {
    const params03 = {
      camera: this._camera,
      scene: this._scene,
    }
    this._controls03 = new BasicCharacterController03(params03);
  }

  _LoadAnimatedModel04() {
    const params04 = {
      camera: this._camera,
      scene: this._scene,
    }
    this._controls04 = new BasicCharacterController04(params04);
  }

  _LoadAnimatedModelAndPlay(path, modelFile, animFile, offset) {
    const loader = new FBXLoader();
    loader.setPath(path);
    loader.load(modelFile, (fbx) => {
      fbx.scale.setScalar(0.1);
      fbx.traverse(c => {
        c.castShadow = true;
      });
      fbx.position.copy(offset);

      const anim = new FBXLoader();
      anim.setPath(path);
      anim.load(animFile, (anim) => {
        const m = new THREE.AnimationMixer(fbx);
        this._mixers.push(m);
        const idle = m.clipAction(anim.animations[0]);
        idle.play();
      });
      this._scene.add(fbx);
    });
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
      this._Step(t - this._previousRAF);
      this._previousRAF = t;
    });
  }

  _Step(timeElapsed) {
    const timeElapsedS = timeElapsed * 0.001;
    if (this._mixers) {
      this._mixers.map(m => m.update(timeElapsedS));
    }

    this.world_.Update(timeElapsedS);

    if (this._controls) {
      this._controls.Update(timeElapsedS);
    }

    if (this._controls02) {
        this._controls02.Update(timeElapsedS);
      }

      if (this._controls03) {
        this._controls03.Update(timeElapsedS);
      }

      if (this._controls04) {
        this._controls04.Update(timeElapsedS);
      }


  }
}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new CharacterControllerDemo();
});