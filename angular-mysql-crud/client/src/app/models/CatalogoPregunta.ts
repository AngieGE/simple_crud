import { Pregunta } from './Pregunta';

export class CatalogoPregunta {
    idCatalogoPregunta?: number;
    pregunta?: string;

    // Has many
    preguntas?: Pregunta[];

    // Belongs to

    constructor(catalogoPregunta?: CatalogoPregunta) {
        this.idCatalogoPregunta = catalogoPregunta.idCatalogoPregunta;
        this.pregunta = catalogoPregunta.pregunta;
    }
}
