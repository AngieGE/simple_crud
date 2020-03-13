import { Aplicacion } from './Aplicacion';
import { Cuestionario } from './Cuestionario';



export class Usuario {
    idUsuario?: number;
    nombre?: string;
    apellido?: string;
    contrasena?: string;
    usuario?: string;
    fechaNacimiento?: Date;
    genero?: number;

    // Has many
    aplicaciones?: Aplicacion[];
    cuestionarios?: Cuestionario[];

    // Belongs to

    constructor(usuario?: Usuario) {
        this.idUsuario  =  usuario.idUsuario;
        this.nombre  =  usuario.nombre;
        this.apellido  =  usuario.apellido;
        this.contrasena  =  usuario.contrasena;
        this.usuario  =  usuario.usuario;
        this.fechaNacimiento  =  usuario.fechaNacimiento;
        this.genero  =  usuario.genero;
    }
}
