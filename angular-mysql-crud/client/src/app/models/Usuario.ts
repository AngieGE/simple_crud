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

    // Local variables
    contrasena2?: string;
    localFechaNacimiento?: string;
    localGenero?: string;

    constructor(usuario?: Usuario) {
        if (usuario != null) {
            this.idUsuario  =  usuario.idUsuario;
            this.nombre  =  usuario.nombre;
            this.apellido  =  usuario.apellido;
            this.contrasena  =  usuario.contrasena;
            this.usuario  =  usuario.usuario;
            this.fechaNacimiento  = new Date(usuario.fechaNacimiento);
            this.genero  =  usuario.genero;
            this.localGenero = this.genero === 1 ? 'Mujer' : 'Hombre';
        }
    }
}
