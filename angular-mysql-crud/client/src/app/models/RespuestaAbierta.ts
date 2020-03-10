import { Aplicacion } from "./Aplicacion";
import { Pregunta } from "./Pregunta";


export class RespuestaAbierta {
    idRespuestaAbierta?: number;


    //FK
    idAplicacion?: number;
    idPregunta: number;

    //Relaciones
    aplicacion?: Aplicacion;
    pregunta?: Pregunta;

    constructor() {

    }
}
