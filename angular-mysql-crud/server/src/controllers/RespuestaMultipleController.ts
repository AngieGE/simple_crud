import { RespuestaMultiple } from "../models";

export class RespuestaMultipleController {
    
    static async listarRespuestaMultiples(): Promise<RespuestaMultiple[]> {
        return new Array<RespuestaMultiple>();
    }

    static async crearRespuestaMultiple(): Promise<boolean> {
        return true;
    }

    static async obtenerRespuestaMultiple(): Promise<RespuestaMultiple> {
        return new RespuestaMultiple();
    }

    static async actualizarRespuestaMultiple(): Promise<boolean> {
        return true;
    }

    static async eliminarRespuestaMultiple(): Promise<boolean> {
        return true;
    }

}
