import { Cuestionario } from "./Cuestionario";
import { Usuario } from "./Usuario";

export class Aplicacion {
    idAplicacion?: number;
    fecha?: Date;
    idCuestionario?: number; 
    idUsuario?: number;
    // Relaciones
    cuestionario?: Cuestionario;
    usuario?: Usuario;

    constructor(aplicacion: Aplicacion) {
        this.fecha=aplicacion.fecha,
        this.idCuestionario=aplicacion.idCuestionario,
        this.idUsuario=aplicacion.idUsuario;
    }
}