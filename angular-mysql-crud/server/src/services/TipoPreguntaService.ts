import { TipoPregunta } from "../models";

export class TipoPreguntaService {
    
    static async listarTipoPreguntaes(): Promise<TipoPregunta[]> {
        return new Array<TipoPregunta>();
    }

    static async crearTipoPregunta(): Promise<boolean> {
        return true;
    }

    static async obtenerTipoPregunta(): Promise<TipoPregunta> {
        return new TipoPregunta();
    }

    static async actualizarTipoPregunta(): Promise<boolean> {
        return true;
    }

    static async eliminarTipoPregunta(): Promise<boolean> {
        return true;
    }

}
