import { RespuestaAbierta } from "../models";
import { RespuestaAbiertaController } from "../controllers";
import { Router } from "express";

export class RespuestaAbiertaRouter {
    public router: Router = Router();
    static instance: RespuestaAbiertaRouter

    static getInstance(): RespuestaAbiertaRouter {
        if (this.instance==null) this.instance = new RespuestaAbiertaRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', RespuestaAbiertaController.listarRespuestaAbiertas);
        this.router.post('/', RespuestaAbiertaController.crearRespuestaAbierta);
        this.router.get('/:idRespuestaAbierta', RespuestaAbiertaController.obtenerRespuestaAbierta);
        this.router.put('/:idRespuestaAbierta', RespuestaAbiertaController.actualizarRespuestaAbierta);
        this.router.delete('/:idRespuestaAbierta', RespuestaAbiertaController.eliminarRespuestaAbierta);
    }
}
