<?php

    class Nivel{
        private $IdNivel;
        private $Nivel;

        public function __construct($IdNivel, $Nivel){
            $this->IdNivel    = $IdNivel;
            $this->Nivel      = $Nivel;
        }

        //Get y Set

        public function getIdNivel(){
            return $this->IdNivel;
        }

        public function setIdNivel($IdNivel){
            $this->IdNivel = $IdNivel;
        }

        public function getNivel(){
            return $this->Nivel;
        }

        public function setNivel($Nivel){
            $this->Nivel = $Nivel;
        }
        
    }

?>