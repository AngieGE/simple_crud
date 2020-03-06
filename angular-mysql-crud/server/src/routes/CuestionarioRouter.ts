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
        this.router.get('/:id', CuestionarioController.getUserCuestionarios);
        this.router.get('/', CuestionarioController.getCuestionarios);
        this.router.post ('/', CuestionarioController.create);
        this.router.delete ('/:id', CuestionarioController.delete);
        this.router.put ('/:id', CuestionarioController.update);
    }
}
