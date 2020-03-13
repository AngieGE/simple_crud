import { Aplicacion } from "./Aplicacion";
import { Opcion } from "./Opcion";
import { Pregunta } from "./Pregunta";

export class RespuestaMultiple {
    idRespuestaMultiple?: number;
    idAplicacion?: number;
    idOpcion?: number;
    idPregunta?: number;
    // Has many

    // Belongs to 
    aplicacion?: Aplicacion;
    opcion?: Opcion;
    pregunta?: Pregunta;
    
    constructor(respuestaMultiple: RespuestaMultiple) {
        this.idRespuestaMultiple=respuestaMultiple.idRespuestaMultiple,
        this.idAplicacion=respuestaMultiple.idAplicacion,
        this.idOpcion=respuestaMultiple.idOpcion,
        this.idPregunta=respuestaMultiple.idPregunta;
    }
}
