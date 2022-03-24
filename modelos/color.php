<?php

    class Color{
        private $IdColor;
        private $Color;

        public function __construct($IdColor, $Color){
            $this->IdColor    = $IdColor;
            $this->Color      = $Color;
        }

        //Get y Set

        public function getIdColor(){
            return $this->IdColor;
        }

        public function setIdColor($IdColor){
            $this->IdColor = $IdColor;
        }

        public function getColor(){
            return $this->Color;
        }

        public function setColor($Color){
            $this->Color = $Color;
        }
        
    }

?>