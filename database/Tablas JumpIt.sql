CREATE DATABASE `db-jump-it` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ 
/*!80016 DEFAULT ENCRYPTION='N' */;
use  `db-jump-it`;

CREATE TABLE `usuario` (
  `IdUsuario` int unsigned NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(45) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Contraseña` varchar(10) NOT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `color` (
  `idcolor` int unsigned NOT NULL AUTO_INCREMENT,
  `Color` varchar(45) NOT NULL,
  PRIMARY KEY (`idcolor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `nivel` (
  `idnivel` int unsigned NOT NULL AUTO_INCREMENT,
  `Nivel` varchar(50) NOT NULL,
  PRIMARY KEY (`idnivel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `puntuación` (
  `IdUsuario` int unsigned NOT NULL,
  `IdNivel` int unsigned NOT NULL,
  `Puntuación` float unsigned DEFAULT '0',
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `Fkp_IdUsuario_idx` (`IdUsuario`),
  KEY `Fkp_IdNivel_idx` (`IdNivel`),
  CONSTRAINT `Fkp_IdNivel` FOREIGN KEY (`IdNivel`) REFERENCES `nivel` (`idnivel`),
  CONSTRAINT `Fkp_IdUsuario` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `sala` (
  `Clave_Sala` varchar(10) NOT NULL,
  `IdUsuario` int unsigned NOT NULL,
  `IdColor` int unsigned NOT NULL,
  `IdNivel` int unsigned NOT NULL,
  KEY `IdUsuario_idx` (`IdUsuario`),
  KEY `FK_IdNivel_idx` (`IdNivel`),
  KEY `FK_IdColor_idx` (`IdColor`),
  CONSTRAINT `FK_IdColor` FOREIGN KEY (`IdColor`) REFERENCES `color` (`idcolor`),
  CONSTRAINT `FK_IdNivel` FOREIGN KEY (`IdNivel`) REFERENCES `nivel` (`idnivel`),
  CONSTRAINT `FK_IdUsuario` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `IniciarSesion`(
IN Usuario VARCHAR(45),
IN Contraseña VARCHAR(10))
BEGIN
SELECT `usuario`.`IdUsuario`,`usuario`.`Usuario`, `usuario`.`Email`
FROM `usuario`
WHERE `usuario`.`Usuario` = Usuario 
AND `usuario`.`Contraseña` = Contraseña;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `RegistrarUsuario`(
IN Email VARCHAR(50),
IN Usuario VARCHAR(45),
IN Contraseña VARCHAR(10))
BEGIN
INSERT INTO `db-jump-it`.`usuario`
(`Usuario`, `Email`, `Contraseña`)
VALUES
(Usuario, Email, Contraseña);
END$$
DELIMITER ;

SELECT * FROM usuario;