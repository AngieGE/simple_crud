import { Usuario } from "./Usuario";
import { Aplicacion } from "./Aplicacion";
import { Pregunta } from "./Pregunta";


export class Cuestionario {
    idCuestionario?: number;
    nombre?: string;
    descripcion?: string;
    idUsuario?: number;
    activa?: boolean;

    // Has many
    aplicaciones?: Aplicacion[];
    preguntas?: Pregunta[];

    // Belongs to 
    usuario?: Usuario;

    constructor(cuestionario: Cuestionario) {
        this.idCuestionario=cuestionario.idCuestionario,
        this.nombre=cuestionario.nombre,
        this.descripcion=cuestionario.descripcion,
        this.idUsuario=cuestionario.idUsuario,
        this.activa=cuestionario.activa;
    }
}
