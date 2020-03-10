import { Usuario } from "./Usuario";

export class Cuestionario {
    idCuestionario?: number;
    nombre?: string;
    descripcion?: string;
    idUsuario?: number;
    activa?: boolean;
    //Relaciones
    usuario?: Usuario;

    constructor(cuestionario: Cuestionario) {
        this.nombre=cuestionario.nombre,
        this.descripcion=cuestionario.descripcion,
        this.idUsuario=cuestionario.idUsuario,
        this.activa=cuestionario.activa;
    }
}
