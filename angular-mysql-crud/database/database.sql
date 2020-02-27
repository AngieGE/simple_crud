CREATE DATABASE ng_cuestionarios_db;

USE ng_cuestionarios_db;

CREATE TABLE cuestionario(
                             id INT NOT NULL IDENTITY PRIMARY KEY,
                             title VARCHAR(180),
                             desciption VARCHAR(255),
                             created_at TIMESTAMP
);

CREATE TABLE usuario
(
    idUsuario         INT          NOT NULL IDENTITY  PRIMARY KEY,
    nombre            VARCHAR(45)  NOT NULL,
    apellido        VARCHAR(45)  NOT NULL,
    contrasena      VARCHAR(45)  NOT NULL,
    usuario         VARCHAR(45)  NOT NULL,
    fechaNacimiento DATETIME2(0) NOT NULL,
    genero          TINYINT     NOT NULL,
);


INSERT INTO cuestionario ([title], [desciption])
VALUES ('moda', 'Este es un cuestionario sobre la ropa mas usada en el 2020');

INSERT INTO cuestionario ([title], [desciption])
VALUES ('comida', 'Este es un cuestionario sobre tacos, nopales y chimichangas');

INSERT INTO usuario ([nombre], [apellido], [contrasena],[usuario],  [fechaNacimiento],[genero] )
VALUES ('fer', 'lopez', '123', 'fer_lopez', '1998-01-01', 0 );

SELECT  * FROM cuestionario;

SELECT  * FROM usuario;
