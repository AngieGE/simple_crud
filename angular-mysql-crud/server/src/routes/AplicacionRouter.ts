import {Router} from 'express';
import { AplicacionController } from '../controllers';

export class AplicacionRouter {
    public router: Router = Router();
    static instance: AplicacionRouter

    static getInstance(): AplicacionRouter {
        if (this.instance==null) this.instance = new AplicacionRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', AplicacionController.listarAplicaciones);
        this.router.post('/', AplicacionController.crearAplicacion);
        this.router.get('/:idAplicacion', AplicacionController.obtenerAplicacion);
        this.router.put('/:idAplicacion', AplicacionController.actualizarAplicacion);
        this.router.delete('/:idAplicacion', AplicacionController.eliminarAplicacion);
    }

}
