import { Encuesta } from "../models";

export class EncuestaService {

    static async listarEncuestaes(): Promise<Encuesta[]> {
        return new Array<Encuesta>();
    }

    static async crearEncuesta(): Promise<boolean> {
        return true;
    }

    static async obtenerEncuesta(): Promise<Encuesta> {
        return new Encuesta();
    }

    static async actualizarEncuesta(): Promise<boolean> {
        return true;
    }

    static async eliminarEncuesta(): Promise<boolean> {
        return true;
    }

}
