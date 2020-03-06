import { CatalogoPregunta } from "../models";

export class CatalogoPreguntaService {
    
    static async listarCatalogoPreguntaes(): Promise<CatalogoPregunta[]> {
        return new Array<CatalogoPregunta>();
    }

    static async crearCatalogoPregunta(): Promise<boolean> {
        return true;
    }

    static async obtenerCatalogoPregunta(): Promise<CatalogoPregunta> {
        return new CatalogoPregunta();
    }

    static async actualizarCatalogoPregunta(): Promise<boolean> {
        return true;
    }

    static async eliminarCatalogoPregunta(): Promise<boolean> {
        return true;
    }

}
