<?php
    include_once '../database.php';
    include_once '../modelos/usuario.php';

    class DtoUsuario{
     
        public function __construct(){
            $this->db = new Database();
        }

        public function RegistrarUsuario($Usuario){
            try {
                $query = $this->db->connect()->prepare('CALL RegistrarUsuario(:Mail, :User ,:Password);');
                $query->execute(['Mail' => $Usuario->getEmail(), 'User' => $Usuario->getUsuario(),   
                'Password' => $Usuario->getContraseña()]);
                return true;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

        public function IniciarSesion($Usuario){
            try {
                $query = $this->db->connect()->prepare('CALL IniciarSesion(:User, :Password);');
                $query->execute(['User' => $Usuario->getUsuario(), 'Password' => $Usuario->getContraseña()]);
                $row = $query->fetch();
                
                if($row > 0)
                {
                    $Usuario->setIdUsuario($row['IdUsuario']);
                    $Usuario->setEmail($row['Email']);
                    return $Usuario;
                }
                else
                    return null;
            } catch (PDOException $e) {
                echo $e;
                return null;
            }
        }
    }

?>