import { Encuesta } from "./Encuesta";

export class Aplicacion {
    idAplicacion?: number;
    fecha?: Date;
    idEncuesta?: number; 
    idUsuario?: number;
    // Relaciones
    encuesta?: Encuesta;
    usuario?: Encuesta;

    constructor() {

    }
}