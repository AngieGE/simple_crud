import { Cuestionario } from "../models";

export class CuestionarioService {

    static async listarEncuestaes(): Promise<Cuestionario[]> {
        return new Array<Cuestionario>();
    }

    static async crearEncuesta(): Promise<boolean> {
        return true;
    }

    static async obtenerEncuesta(): Promise<Cuestionario> {
        return new Cuestionario();
    }

    static async actualizarEncuesta(): Promise<boolean> {
        return true;
    }

    static async eliminarEncuesta(): Promise<boolean> {
        return true;
    }

}
