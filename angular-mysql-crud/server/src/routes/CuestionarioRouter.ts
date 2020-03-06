import {Router} from 'express';
import cuestionariosController from '../controllers/CuestionarioController'

class CuestionarioRouter{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/:id', cuestionariosController.getUserCuestionarios);
        this.router.get('/', cuestionariosController.getCuestionarios);
        this.router.post ('/', cuestionariosController.create);
        this.router.delete ('/:id', cuestionariosController.delete);
        this.router.put ('/:id', cuestionariosController.update);
    }
}

const cuestionariosRoutes = new CuestionarioRouter();
export default cuestionariosRoutes.router;