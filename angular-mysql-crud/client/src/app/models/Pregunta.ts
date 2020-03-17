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
    respuestasAbiertas?: RespuestaAbierta[];
    respuestasMultiples?: RespuestaMultiple[];

    // Belongs to
    cuestionario?: Cuestionario;
    catalogoPregunta?: CatalogoPregunta;
    tipoPregunta?: TipoPregunta;

    // Local
    localChartType = 'bar';
    localChartDatasets: Array<any> = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: '' }
    ];
    localChartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    // Local variables
    localRespuestaAbierta?: RespuestaAbierta;

    constructor(pregunta?: Pregunta) {
        if (pregunta != null) {
            this.idPregunta = pregunta.idPregunta;
            this.idCuestionario = pregunta.idCuestionario;
            this.idCatalogoPregunta = pregunta.idCatalogoPregunta;
            this.idTipoPregunta = pregunta.idTipoPregunta;
            this.catalogoPregunta = pregunta.catalogoPregunta;
            this.tipoPregunta = pregunta.tipoPregunta;
            this.localRespuestaAbierta = new RespuestaAbierta({idPregunta: pregunta.idPregunta});

        }
        this.localChartType = 'bar';
        this.localChartDatasets = [{ data: [], label: '' }];
        this.localChartLabels = [];
    }

    setChart() {
      this.localChartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
      this.localChartDatasets = [{ data: [], label: '' }];
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
