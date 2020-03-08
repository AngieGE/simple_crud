
export class TipoPregunta {
    idTipoPregunta?: number;
    tipo?: string;

    constructor(tipoPregunta: TipoPregunta) {
        this.tipo=tipoPregunta.tipo;
    }
}
