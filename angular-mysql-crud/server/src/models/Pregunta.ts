import { Cuestionario } from "./Cuestionario";
import { CatalogoPregunta } from "./CatalogoPregunta";
import { TipoPregunta } from "./TipoPregunta";

export class Pregunta {
    idPregunta?: number;
    idCuestionario?: number;
    idCatalogoPregunta?: number;
    idTipoPregunta?: number;
    // Relaciones
    cuestionario?: Cuestionario;
    catalogoPregunta?: CatalogoPregunta;
    tipoPregunta?: TipoPregunta;


    constructor(pregunta: Pregunta) {
        this.idCuestionario=pregunta.idCatalogoPregunta,
        this.idCatalogoPregunta=pregunta.idCatalogoPregunta,
        this.idTipoPregunta=pregunta.idTipoPregunta;
    }
}

export class PreguntaRequest {
    idPregunta?: number;

    constructor() {

    }
}
