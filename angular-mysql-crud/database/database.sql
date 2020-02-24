CREATE DATABASE ng_cuestionarios_db;

USE ng_cuestionarios_db;

CREATE TABLE cuestionario(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    desciption VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


