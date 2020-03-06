import { Opcion } from "../models";

export class OpcionController {
    
    static async listarOpciones(): Promise<Opcion[]> {
        return new Array<Opcion>();
    }

    static async crearOpcion(): Promise<boolean> {
        return true;
    }

    static async obtenerOpcion(): Promise<Opcion> {
        return new Opcion();
    }

    static async actualizarOpcion(): Promise<boolean> {
        return true;
    }

    static async eliminarOpcion(): Promise<boolean> {
        return true;
    }

}
