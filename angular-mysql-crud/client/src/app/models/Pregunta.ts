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
    localChartType: string;
    localChartDatasets: Array<any>;
    localChartLabels: Array<string>;

    constructor(pregunta?: Pregunta) {
        if (pregunta != null) {
            this.idPregunta = pregunta.idPregunta;
            this.idCuestionario = pregunta.idCuestionario;
            this.idCatalogoPregunta = pregunta.idCatalogoPregunta;
            this.idTipoPregunta = pregunta.idTipoPregunta;
            this.catalogoPregunta = pregunta.catalogoPregunta;
            this.tipoPregunta = pregunta.tipoPregunta;
        }
        this.localChartType = 'bar';
        this.localChartDatasets = [{ data: [], label: '' }];
        this.localChartLabels = [];
    }

    setChart() {
      this.localChartLabels = this.opciones.map((item: Opcion) => item.catalogoOpcion.opcion);
      const data: number[] = new Array<number>(this.opciones.length);
      for (let i = 0; i < this.opciones.length; i++) {
        data[i] = this.opciones[i].respuestasMultiples.length;
      }
      this.localChartDatasets = [{ data, label: '' }];
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
