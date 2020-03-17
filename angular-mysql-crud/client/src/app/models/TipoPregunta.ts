import { Pregunta } from './Pregunta';

export class TipoPregunta {
    idTipoPregunta?: number;
    tipo?: _TipoPregunta.TipoPreguntaEnum;

    // Has many
    preguntas?: Pregunta[];

    // Belongs to

    constructor(tipoPregunta?: TipoPregunta) {
        if (tipoPregunta != null) {
            this.idTipoPregunta = tipoPregunta.idTipoPregunta;
            this.tipo = tipoPregunta.tipo;
        }
    }
}
// tslint:disable-next-line:no-namespace
export namespace _TipoPregunta {
    export type TipoPreguntaEnum  =  'Abierta' | 'Opcion Multiple' | 'Selección Multiple';
    export const TipoPreguntaEnum  =  {
        ABIERTA: 'Abierta' as TipoPreguntaEnum,
        OPCION_MULTIPLE: 'Opcion Multiple' as TipoPreguntaEnum,
        SELECCION_MULTIPLE: 'Seleccion Multiple' as TipoPreguntaEnum
    };
    export const listTipos: TipoPreguntaEnum[] = [TipoPreguntaEnum.ABIERTA, TipoPreguntaEnum.SELECCION_MULTIPLE, TipoPreguntaEnum.OPCION_MULTIPLE];

}

