import { Cuestionario } from './Cuestionario';
import { CatalogoPregunta } from './CatalogoPregunta';
import { TipoPregunta } from './TipoPregunta';
import { Opcion } from './Opcion';
import { RespuestaAbierta } from './RespuestaAbierta';
import { RespuestaMultiple } from './RespuestaMultiple';

export class Pregunta {
    idPregunta?: number;
    idCuestionario?: number;
    idCatalogoPregunta?: number;
    idTipoPregunta?: number;

    // Has many
    opciones?: Opcion[];
    RespuestasAbiertas?: RespuestaAbierta[];
    RespuestasMultiples?: RespuestaMultiple[];

    // Belongs to
    cuestionario?: Cuestionario;
    catalogoPregunta?: CatalogoPregunta;
    tipoPregunta?: TipoPregunta;

    constructor(pregunta?: Pregunta) {
        if (pregunta != null) {
            this.idPregunta = pregunta.idPregunta;
            this.idCuestionario = pregunta.idCuestionario;
            this.idCatalogoPregunta = pregunta.idCatalogoPregunta;
            this.idTipoPregunta = pregunta.idTipoPregunta;
            this.catalogoPregunta = pregunta.catalogoPregunta;
            this.tipoPregunta = pregunta.tipoPregunta;
        }
    }
}

export class PreguntaRequest {
    idPregunta?: number;
    idCuestionario?: number;
    pregunta?: string;
    tipoPregunta?: string;

    // Has many

    // Belongs to
    cuestionario?: Cuestionario;

    constructor(pregunta?: PreguntaRequest) {
        if (pregunta != null) {
            this.idPregunta = pregunta.idPregunta;
            this.idCuestionario = pregunta.idCuestionario;
            this.pregunta = pregunta.pregunta;
            this.tipoPregunta = pregunta.tipoPregunta;
        }
    }
}
