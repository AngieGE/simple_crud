import { Aplicacion } from "./Aplicacion";
import { Pregunta } from "./Pregunta";

export class RespuestaAbierta {
    idRespuestaAbierta?: number;
    respuesta?: string;
    idAplicacion?: number;
    idPregunta?: number;
    //Relaciones
    aplicacion?: Aplicacion;
    pregunta?: Pregunta;

    constructor(respuestaAbierta: RespuestaAbierta) {
        this.respuesta=respuestaAbierta.respuesta,
        this.idAplicacion=respuestaAbierta.idAplicacion,
        this.idPregunta=respuestaAbierta.idPregunta;
    }
}
