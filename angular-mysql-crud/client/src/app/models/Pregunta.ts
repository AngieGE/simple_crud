import { Cuestionario } from "./Cuestionario";
import { CatalogoPregunta } from "./CatalogoPregunta";
import { TipoPregunta } from "./TipoPregunta";


export class Pregunta {
    idPregunta?: number;

    //FK
    idCuestionario?: number;
    idCatalogoPregunta?: number;
    idTipoPregunta?: number;

    //Relaciones
    cuestionario?: Cuestionario;
    catalogoPregunta?: CatalogoPregunta;
    tipoPregunta?: TipoPregunta;

    constructor() {

    }
}

export class PreguntaRequest {
    idPregunta?: number;

  //FK
  idCuestionario?: number;
  idCatalogoPregunta?: number;
  idTipoPregunta?: number;

  //Relaciones
  cuestionario?: Cuestionario;
  catalogoPregunta?: CatalogoPregunta;
  tipoPregunta?: TipoPregunta;
    constructor() {

    }
}
