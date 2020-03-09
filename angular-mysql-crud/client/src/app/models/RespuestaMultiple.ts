import { Aplicacion } from "./Aplicacion";
import { Opcion } from "./Opcion";
import { Pregunta } from "./Pregunta";

export class RespuestaMultiple {
    idRespuestaMultiple?: number;

    //FK
    idAplicacion?: number;
    idOpcion?: number;
    idPregunta?: number;

    //Relaciones
    aplicacion?: Aplicacion;
    opcion?: Opcion;
    pregunta?: Pregunta;

    constructor() {

    }
}
