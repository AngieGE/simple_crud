import { CatalogoOpcion } from "../models";

export class CatalogoOpcionService {
    
    static async listarCatalogoOpciones(): Promise<CatalogoOpcion[]> {
        return new Array<CatalogoOpcion>();
    }

    static async crearCatalogoOpcion(): Promise<boolean> {
        return true;
    }

    static async obtenerCatalogoOpcion(): Promise<CatalogoOpcion> {
        return new CatalogoOpcion();
    }

    static async actualizarCatalogoOpcion(): Promise<boolean> {
        return true;
    }

    static async eliminarCatalogoOpcion(): Promise<boolean> {
        return true;
    }

}
