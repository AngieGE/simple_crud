
export class Usuario {
    idUsuario?: number;
    nombre?: string;
    apellido?: string;
    contraseña?: string;
    usuario?: string;
    fechaNacimiento?: Date;
    genero?: number;

    constructor(usuario: Usuario) {
        this.nombre=usuario.nombre,
        this.apellido=usuario.apellido,
        this.contraseña=usuario.contraseña,
        this.usuario=usuario.usuario,
        this.fechaNacimiento=usuario.fechaNacimiento,
        this.genero=usuario.genero;
    }
}
