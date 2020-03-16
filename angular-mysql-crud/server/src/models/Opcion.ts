import { CatalogoOpcion } from "./CatalogoOpcion";
import { Pregunta } from "./Pregunta";
import { RespuestaMultiple } from "./RespuestaMultiple";


export class Opcion {
    idOpcion?: number;
    idCatalogoOpcion?: number;
    idPregunta?: number;
    

    // Has many
    RespuestasMultiples?: RespuestaMultiple[];

    // Belongs to 
    catalogoOpcion?: CatalogoOpcion;
    pregunta?: Pregunta;



    constructor(opcion: Opcion) {
        this.idOpcion=opcion.idOpcion,
        this.idCatalogoOpcion=opcion.idCatalogoOpcion,
        this.idPregunta=opcion.idPregunta;
        this.catalogoOpcion=opcion.catalogoOpcion;

    }
}

export class OpcionRequest {
    idOpcion?: number;
    opcion?: string;
    idPregunta?: number;

    // Has many

    // Belongs to 
    pregunta?: Pregunta;

    constructor(opcion: OpcionRequest) {
        this.idOpcion=opcion.idOpcion;
        this.opcion=opcion.opcion;
        this.idPregunta=opcion.idPregunta;

    }
}
