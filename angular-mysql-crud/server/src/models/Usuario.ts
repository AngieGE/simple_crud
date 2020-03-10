
export class Usuario {
    idUsuario?: number;
    nombre?: string;
    apellido?: string;
    contrasena?: string;
    usuario?: string;
    fechaNacimiento?: Date;
    genero?: number;

    constructor(usuario: Usuario) {
        this.nombre=usuario.nombre,
        this.apellido=usuario.apellido,
        this.contrasena=usuario.contrasena,
        this.usuario=usuario.usuario,
        this.fechaNacimiento=usuario.fechaNacimiento,
        this.genero=usuario.genero;
    }
}
