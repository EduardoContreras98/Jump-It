
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {MTLLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/MTLLoader.js';
import {OBJLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/OBJLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';

export const player = (() => {

    class Player {
        constructor(params) {
            

            this._Init(params);

            
        }

              
    
          _Init(params) {
            this._params = params;
            this.playerBox_ = new THREE.Box3();
            this._position = new THREE.Vector3(0, 0, 0);
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
         
    
        CheckCollisions_() {
          const colliders = this._params.world.GetColliders();
    
          this.playerBox_.setFromObject(this._mesh);
    
          for (let c of colliders) {
            const cur = c.collider;
    
            if (cur.intersectsBox(this.playerBox_)) {
              this.gameOver = true;
            }
          }
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
        
            if (this._input._keys.salto01) {
                this._position.y += timeInSeconds * (
                    velocity.z += acc.z * timeInSeconds);
                this._position.y = Math.max(this._position.y, 0.0);
            }
        
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







    class BasicCharacterControllerProxy {
            constructor(animations) {
              this._animations = animations;
            }
          
            get animations() {
              return this._animations;
            }
     };

          
    class BasicCharacterControllerInput {
    constructor() {
      this._Init();    
    }
  
    _Init() {
      this._keys = {
        salto01: false,
      };
      document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
      document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
    }
  
    _onKeyDown(event) {
      switch (event.keyCode) {
        case 87: // w
          this._keys.salto01 = true;
          break;
      }
    }
  
    _onKeyUp(event) {
      switch(event.keyCode) {
        case 87: // w
          this._keys.salto01 = false;
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
      this._AddState('Parado01', Parado01State);
      this._AddState('Salto01', Salto01State);
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
    
      return {
          Player: Player,
      };


})();