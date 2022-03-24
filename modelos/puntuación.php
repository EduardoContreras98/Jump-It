<?php

    class Puntuación{
        private $IdUsuario;
        private $IdNivel;
        private $Puntuación;
        private $Fecha;

        public function __construct($IdUsuario, $IdNivel, $Puntuación, $Fecha){
            $this->IdUsuario    = $IdUsuario;
            $this->IdNivel      = $IdNivel;
            $this->Puntuación   = $Puntuación;
            $this->Fecha        = $Fecha;
        }

        //Get y Set

        public function getIdUsuario(){
            return $this->IdUsuario;
        }

        public function setIdUsuario($IdUsuario){
            $this->IdUsuario = $IdUsuario;
        }

        public function getIdNivel(){
            return $this->IdNivel;
        }

        public function setIdNivel($IdNivel){
            $this->IdNivel = $IdNivel;
        }

        public function getPuntuación(){
            return $this->Puntuación;
        }

        public function setPuntuación($Puntuación){
            $this->Puntuación = $Puntuación;
        }

        public function getFecha(){
            return $this->Fecha;
        }

        public function setFecha($Fecha){
            $this->Fecha = $Fecha;
        }
        
    }

?>