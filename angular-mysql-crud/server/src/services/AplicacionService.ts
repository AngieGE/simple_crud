import { Aplicacion } from "../models";

export class AplicacionService {
    
    static async listarAplicaciones(): Promise<Aplicacion[]> {
        return new Array<Aplicacion>();
    }

    static async crearAplicacion(): Promise<number> {
        return -1;
    }

    static async obtenerAplicacion(): Promise<Aplicacion> {
        return new Aplicacion();
    }

    static async actualizarAplicacion(): Promise<boolean> {
        return true;
    }

    static async eliminarAplicacion(): Promise<boolean> {
        return true;
    }

}
