import { Usuario } from "../models";

export class UsuarioService {
    
    static async listarUsuarioes(): Promise<Usuario[]> {
        return new Array<Usuario>();
    }

    static async crearUsuarioes(): Promise<boolean> {
        return true;
    }

    static async obtenerUsuarioes(): Promise<Usuario> {
        return new Usuario();
    }

    static async actualizarUsuarioes(): Promise<boolean> {
        return true;
    }

    static async eliminarUsuarioes(): Promise<boolean> {
        return true;
    }

}
