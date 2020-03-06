import { Pregunta } from "../models";

export class PreguntaService {
    
    static async listarPreguntaes(): Promise<Pregunta[]> {
        return new Array<Pregunta>();
    }

    static async crearPregunta(): Promise<boolean> {
        return true;
    }

    static async obtenerPregunta(): Promise<Pregunta> {
        return new Pregunta();
    }

    static async actualizarPregunta(): Promise<boolean> {
        return true;
    }

    static async eliminarPregunta(): Promise<boolean> {
        return true;
    }

}
