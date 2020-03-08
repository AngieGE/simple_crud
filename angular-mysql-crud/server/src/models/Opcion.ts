import { CatalogoOpcion } from "./CatalogoOpcion";
import { Pregunta } from "./Pregunta";

export class Opcion {
    idOpcion?: number;
    idCatalogoOpcion?: number;
    idPregunta?: number;
    //Relaciones
    catalogoOpcion?: CatalogoOpcion;
    pregunta?: Pregunta;



    constructor(opcion: Opcion) {
        this.idCatalogoOpcion=opcion.idCatalogoOpcion,
        this.idPregunta=opcion.idPregunta;
    }
}

export class OpcionRequest {
    idOpcion?: number;
    
    constructor() {

    }
}
