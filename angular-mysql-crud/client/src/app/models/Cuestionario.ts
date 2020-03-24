import { Usuario } from './Usuario';
import { Aplicacion } from './Aplicacion';
import { Pregunta, PreguntaRequest } from './Pregunta';


export class Cuestionario {
    idCuestionario?: number;
    nombre?: string;
    descripcion?: string;
    idUsuario?: number;
    activa?: number;

    // Has many
    aplicaciones?: Aplicacion[];
    preguntas?: Pregunta[];
    preguntasRequest?: PreguntaRequest[];

    // Belongs to
    usuario?: Usuario;

    constructor(cuestionario?: Cuestionario) {
        if (cuestionario != null) {
            this.idCuestionario = cuestionario.idCuestionario;
            this.nombre = cuestionario.nombre;
            this.descripcion = cuestionario.descripcion;
            this.idUsuario = cuestionario.idUsuario;
            this.activa = cuestionario.activa;
        }
    }
}
