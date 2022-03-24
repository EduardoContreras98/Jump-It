<?php

    class Usuario{
        private $IdUsuario;
        private $Usuario;
        private $Email;
        private $Contraseña;

        public function __construct($IdUsuario, $Usuario, $Email, $Contraseña){
            $this->IdUsuario    = $IdUsuario;
            $this->Usuario      = $Usuario;
            $this->Email        = $Email;
            $this->Contraseña   = $Contraseña;
        }

        //Get y Set

        public function getIdUsuario(){
            return $this->IdUsuario;
        }

        public function setIdUsuario($IdUsuario){
            $this->IdUsuario = $IdUsuario;
        }

        public function getUsuario(){
            return $this->Usuario;
        }

        public function setUsuario($Usuario){
            $this->Usuario = $Usuario;
        }

        
        public function getEmail(){
            return $this->Email;
        }

        public function setEmail($Email){
            $this->Email = $Email;
        }

        public function getContraseña(){
            return $this->Contraseña;
        }

        public function setContraseña($Contraseña){
            $this->Contraseña = $Contraseña;
        }
    }

?>