import {Router} from 'express';
import { CuestionarioController } from '../controllers/CuestionarioController'

export class CuestionarioRouter {
    router: Router = Router();
    static instance: CuestionarioRouter

    static getInstance(): CuestionarioRouter {
        if (this.instance==null) this.instance = new CuestionarioRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', CuestionarioController.listarCuestionarios);
        this.router.post('/', CuestionarioController.crearCuestionario);
        this.router.get('/:idCuestionario', CuestionarioController.obtenerCuestionario);
        this.router.put('/:idCuestionario', CuestionarioController.actualizarCuestionario);
        this.router.delete('/:idCuestionario', CuestionarioController.eliminarCuestionario);
    }
}
