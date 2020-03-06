import { RespuestaAbierta } from "../models";

export class RespuestaAbiertaController {
    
    static async listarRespuestaAbiertas(): Promise<RespuestaAbierta[]> {
        return new Array<RespuestaAbierta>();
    }

    static async crearRespuestaAbierta(): Promise<boolean> {
        return true;
    }

    static async obtenerRespuestaAbierta(): Promise<RespuestaAbierta> {
        return new RespuestaAbierta();
    }

    static async actualizarRespuestaAbierta(): Promise<boolean> {
        return true;
    }

    static async eliminarRespuestaAbierta(): Promise<boolean> {
        return true;
    }

}
