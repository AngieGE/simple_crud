import { Cuestionario } from "./Cuestionario";
import { Usuario } from "./Usuario";

export class Aplicacion {
    idAplicacion?: number;
    fecha?: Date;
    idEncuesta?: number; 
    idUsuario?: number;
    // Relaciones
    cuestionario?: Cuestionario;
    usuario?: Usuario;

    constructor() {

    }
}