import { RespuestaMultiple } from "../models";
import { Router } from "express";
import { RespuestaMultipleController } from "../controllers";

export class RespuestaMultipleRouter {
    public router: Router = Router();
    static instance: RespuestaMultipleRouter

    static getInstance(): RespuestaMultipleRouter {
        if (this.instance==null) this.instance = new RespuestaMultipleRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }
    
    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', RespuestaMultipleController.listarRespuestaMultiples);
        this.router.post('/', RespuestaMultipleController.crearRespuestaMultiple);
        this.router.get('/:idRespuestaMultiple', RespuestaMultipleController.obtenerRespuestaMultiple);
        this.router.put('/:idRespuestaMultiple', RespuestaMultipleController.actualizarRespuestaMultiple);
        this.router.delete('/:idRespuestaMultiple', RespuestaMultipleController.eliminarRespuestaMultiple);
    }

}
