import { Pregunta } from "../models";
import { Router } from "express";
import { PreguntaController } from "../controllers";

export class PreguntaRouter {
    public router: Router = Router();
    static instance: PreguntaRouter

    static getInstance(): PreguntaRouter {
        if (this.instance==null) this.instance = new PreguntaRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }
    
    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', PreguntaController.listarPreguntas);
        this.router.post('/', PreguntaController.crearPregunta);
        this.router.get('/:idPregunta', PreguntaController.obtenerPregunta);
        this.router.put('/:idPregunta', PreguntaController.actualizarPregunta);
        this.router.delete('/:idPregunta', PreguntaController.eliminarPregunta);
    }

}
