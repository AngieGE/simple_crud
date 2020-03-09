import { CatalogoOpcion } from "./CatalogoOpcion";
import { Pregunta } from "./Pregunta";
export class Opcion {
    idOpcion?: number;

    //fk
    idCatalogoOpcion?: number;
    idPregunta?: number;

    //relaciones
    catalogoOpcion? : CatalogoOpcion;
    pregunta?: Pregunta;

    constructor() {

    }
}

export class OpcionRequest {
  idOpcion?: number;

  //fk
  idCatalogoOpcion?: number;
  idPregunta?: number;

  //relaciones
  catalogoOpcion? : CatalogoOpcion;
  pregunta?: Pregunta;

    constructor() {

    }
}
