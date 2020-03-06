import { Aplicacion } from "../models";

export class AplicacionController {
    
    static async listarAplicaciones(): Promise<Aplicacion[]> {
        return new Array<Aplicacion>();
    }

    static async crearAplicacion(): Promise<boolean> {
        return true;
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
