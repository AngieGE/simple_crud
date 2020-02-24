import {Router} from 'express';
import cuestionariosController from '../controllers/cuestionariosController'

class CuestionariosRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', cuestionariosController.list);
        this.router.get('/:id', cuestionariosController.getOne);
        this.router.post ('/', cuestionariosController.create);
        this.router.delete ('/:id', cuestionariosController.delete);
        this.router.put ('/:id', cuestionariosController.update);

    }
}

const cuestionariosRoutes = new CuestionariosRoutes();
export default cuestionariosRoutes.router;
