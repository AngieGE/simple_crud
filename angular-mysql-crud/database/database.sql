create database cuestionariosDB
------- USUARIO ---------
create table Usuario
(
    idUsuario       int identity primary key,
    nombre          varchar(45) not null,
    apellido        varchar(45) not null,
    contraseña      varchar(45) not null,
    usuario         varchar(45) not null,
    fechaNacimiento date        not null,
    genero          smallint    not null
)
    go

INSERT INTO cuestionariosDB.dbo.Usuario ( nombre, apellido, contraseña, usuario, fechaNacimiento, genero) VALUES ( 'Fer', 'Ordu', '123', 'fer1', '1963-01-10', 1);
INSERT INTO cuestionariosDB.dbo.Usuario ( nombre, apellido, contraseña, usuario, fechaNacimiento, genero) VALUES ( 'Angie', 'Babillo', '124', 'angie1', '1900-01-01', 1);
INSERT INTO cuestionariosDB.dbo.Usuario (nombre, apellido, contraseña, usuario, fechaNacimiento, genero) VALUES ( 'JuanPa', 'Guemes', '125', 'Juan1', '1900-01-01', 0);
INSERT INTO cuestionariosDB.dbo.Usuario (nombre, apellido, contraseña, usuario, fechaNacimiento, genero) VALUES ( 'Hugo', 'Hdz', '126', 'hugo1', '1900-01-01', 0);


------- CUESTIONARIO ---------
create table Cuestionario
(
    idCuestionario int identity primary key,
    nombre         varchar(45) not null,
    descripcion    varchar(256),
    idUsuario      int         not null
        constraint fk_encuesta_usuario1
        references Usuario,
    activa         tinyint default 1
)
    go

create index fk_encuesta_usuario1_idx
    on Cuestionario (idUsuario)
    go

INSERT INTO cuestionariosDB.dbo.Cuestionario ( nombre, descripcion, idUsuario, activa) VALUES ( 'Comida', 'Habitos comida', 1, null);
INSERT INTO cuestionariosDB.dbo.Cuestionario ( nombre, descripcion, idUsuario, activa) VALUES ( 'Deportes', 'Deportes mas practicados', 1, null);
INSERT INTO cuestionariosDB.dbo.Cuestionario ( nombre, descripcion, idUsuario, activa) VALUES ( 'Progra', 'Encuesta actualizada', 2, null);

------- APLICACION ---------
create table Aplicacion
(
    idAplicacion   int identity
        primary key,
    fecha          datetime2(0) not null,
    idCuestionario int          not null
        constraint fk_aplicacion_encuesta1
        references Cuestionario,
    idUsuario      int          not null
        constraint fk_aplicacion_usuario1
        references Usuario
)
    go

create index fk_aplicacion_encuesta1_idx
    on Aplicacion (idCuestionario)
    go

create index fk_aplicacion_usuario1_idx
    on Aplicacion (idUsuario)
    go

INSERT INTO cuestionariosDB.dbo.Aplicacion ( fecha, idCuestionario, idUsuario) VALUES ( '1998-09-08 00:00:00', 2, 1);
INSERT INTO cuestionariosDB.dbo.Aplicacion ( fecha, idCuestionario, idUsuario) VALUES ( '1998-09-11 00:00:00', 2, 2);


------- TIPO PREGUNTA ---------
create table TipoPregunta
(
    idTipoPregunta int identity
        primary key,
    tipo           varchar(45) not null
)
    go

INSERT INTO cuestionariosDB.dbo.TipoPregunta ( tipo) VALUES ( 'Abierta');
INSERT INTO cuestionariosDB.dbo.TipoPregunta ( tipo) VALUES ( 'Opcion Multiple');
INSERT INTO cuestionariosDB.dbo.TipoPregunta ( tipo) VALUES ( 'Selección Multiple');


------- CATALOGO OPCION  ---------
create table CatalogoOpcion
(
    idCatalogoOpcion int identity
        primary key,
    descripcion      varchar(45)
)
    go

INSERT INTO cuestionariosDB.dbo.CatalogoOpcion ( descripcion) VALUES ( 'Pizza');
INSERT INTO cuestionariosDB.dbo.CatalogoOpcion ( descripcion) VALUES ( 'Tacos');
INSERT INTO cuestionariosDB.dbo.CatalogoOpcion ( descripcion) VALUES ( 'Sushi');
INSERT INTO cuestionariosDB.dbo.CatalogoOpcion ( descripcion) VALUES ( 'Si');
INSERT INTO cuestionariosDB.dbo.CatalogoOpcion ( descripcion) VALUES ( 'No');
INSERT INTO cuestionariosDB.dbo.CatalogoOpcion ( descripcion) VALUES ( 'Hambre');


------- CATALOGO PREGUNTA  ---------
create table CatalogoPregunta
(
    idCatalogoPregunta int identity
        primary key,
    pregunta           varchar(100) not null
)
    go

INSERT INTO cuestionariosDB.dbo.CatalogoPregunta ( pregunta) VALUES ( 'Que comida prefieres?');
INSERT INTO cuestionariosDB.dbo.CatalogoPregunta ( pregunta) VALUES ( 'Cuantos deportes practicas?');
INSERT INTO cuestionariosDB.dbo.CatalogoPregunta ( pregunta) VALUES ( 'Te gusta el futbol?');



-------  PREGUNTA  ---------
create table Pregunta
(
    idPregunta         int identity
        primary key,
    idCuestionario     int not null
        constraint fk_pregunta_encuesta1
        references Cuestionario,
    idCatalogoPregunta int not null
        constraint fk_pregunta_catalogoPregunta1
        references CatalogoPregunta,
    idTipoPregunta     int not null
        constraint fk_pregunta_tipoPregunta1
        references TipoPregunta
)
    go

create index fk_pregunta_encuesta1_idx
    on Pregunta (idCuestionario)
    go

create index fk_pregunta_catalogoPregunta1_idx
    on Pregunta (idCatalogoPregunta)
    go

create index fk_pregunta_tipoPregunta1_idx
    on Pregunta (idTipoPregunta)
    go

INSERT INTO cuestionariosDB.dbo.Pregunta ( idCuestionario, idCatalogoPregunta, idTipoPregunta) VALUES ( 2, 2, 1);
INSERT INTO cuestionariosDB.dbo.Pregunta ( idCuestionario, idCatalogoPregunta, idTipoPregunta) VALUES ( 2, 3, 2);

-------  OPCION  ---------
create table Opcion
(
    idOpcion         int identity
        primary key,
    idCatalogoOpcion int not null
        constraint fk_pregunta_has_opcion_opcion1
        references CatalogoOpcion,
    idPregunta       int not null
        constraint fk_opcion_pregunta1
        references Pregunta
)
    go

create index fk_pregunta_has_opcion_opcion1_idx
    on Opcion (idCatalogoOpcion)
    go

create index fk_opcion_pregunta1_idx
    on Opcion (idPregunta)
    go

INSERT INTO cuestionariosDB.dbo.Opcion ( idCatalogoOpcion, idPregunta) VALUES ( 4, 2);
INSERT INTO cuestionariosDB.dbo.Opcion ( idCatalogoOpcion, idPregunta) VALUES ( 5, 2);


-------  RESPUESTA ABIERTA  ---------
create table RespuestaAbierta
(
    idRespuestaAbierta int identity
        primary key,
    respuesta          varchar(256),
    idAplicacion       int not null
        constraint fk_respuestaAbierta_aplicacion1
        references Aplicacion,
    idPregunta         int not null
        constraint fk_respuestaAbierta_pregunta1
        references Pregunta
)
    go

create index fk_respuestaAbierta_aplicacion1_idx
    on RespuestaAbierta (idAplicacion)
    go

create index fk_respuestaAbierta_pregunta1_idx
    on RespuestaAbierta (idPregunta)
    go

INSERT INTO cuestionariosDB.dbo.RespuestaAbierta ( respuesta, idAplicacion, idPregunta) VALUES ('Cinco deportes', 2, 1);


-------  RESPUESTA ABIERTA  ---------
create table RespuestaMultiple
(
    idRespuestaMultiple int identity
        primary key,
    idAplicacion        int not null
        constraint fk_respuestaMultiple_aplicacion1
        references Aplicacion,
    idOpcion            int not null
        constraint fk_respuestaMultiple_pregunta_has_opcion1
        references Opcion,
    idPregunta          int not null
        constraint fk_respuestaMultiple_pregunta1
        references Pregunta
)
    go

create index fk_respuestaMultiple_aplicacion1_idx
    on RespuestaMultiple (idAplicacion)
    go

create index fk_respuestaMultiple_pregunta_has_opcion1_idx
    on RespuestaMultiple (idOpcion)
    go

create index fk_respuestaMultiple_pregunta1_idx
    on RespuestaMultiple (idPregunta)
    go

INSERT INTO cuestionariosDB.dbo.RespuestaMultiple ( idAplicacion, idOpcion, idPregunta) VALUES ( 2, 1, 2);
INSERT INTO cuestionariosDB.dbo.RespuestaMultiple ( idAplicacion, idOpcion, idPregunta) VALUES ( 1, 2, 2);
