
export class CatalogoPregunta {
    idCatalogoPregunta?: number;
    pregunta?: string;

    constructor(catalogoPregunta: CatalogoPregunta) {
        this.pregunta=catalogoPregunta.pregunta;
    }
}
