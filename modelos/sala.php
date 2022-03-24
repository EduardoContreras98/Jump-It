<?php

    class Sala{
        private $Cve_Sala;
        private $IdUsuario;
        private $IdNivel;
        private $IdColor;

        public function __construct($Cve_Sala, $IdUsuario, $IdNivel,  $IdColor){
            $this->Cve_Sala   = $Cve_Sala;
            $this->IdUsuario    = $IdUsuario;
            $this->IdNivel      = $IdNivel;
            $this->IdColor        = $IdColor;
        }

        //Get y Set

        public function getCve_Sala(){
            return $this->Cve_Sala;
        }

        public function setCve_Sala($Cve_Sala){
            $this->Cve_Sala = $Cve_Sala;
        }


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

        public function getIdColor(){
            return $this->IdColor;
        }

        public function setIdColor($IdColor){
            $this->IdColor = $IdColor;
        }
        
    }

?>