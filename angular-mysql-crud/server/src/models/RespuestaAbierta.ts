import { Aplicacion } from "./Aplicacion";
import { Pregunta } from "./Pregunta";

export class RespuestaAbierta {
    idRespuestaAbierta?: number;
    respuesta?: string;
    idAplicacion?: number;
    idPregunta?: number;
    // Has many

    // Belongs to 
    aplicacion?: Aplicacion;
    pregunta?: Pregunta;

    constructor(respuestaAbierta: RespuestaAbierta) {
        this.idRespuestaAbierta=respuestaAbierta.idRespuestaAbierta,
        this.respuesta=respuestaAbierta.respuesta,
        this.idAplicacion=respuestaAbierta.idAplicacion,
        this.idPregunta=respuestaAbierta.idPregunta;
    }
}
