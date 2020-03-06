import {Router} from 'express';
import { UsuarioController } from '../controllers/UsuarioController'

export class UsuarioRouter{
    public router: Router = Router();
    static instance: UsuarioRouter

    static getInstance(): UsuarioRouter {
        if (this.instance==null) this.instance = new UsuarioRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }

    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        //this.router.get('/', usuariosController.list);
        this.router.get('/', UsuarioController.login);
        this.router.post ('/', UsuarioController.create);
        this.router.delete ('/:id', UsuarioController.delete);
        this.router.put ('/:id', UsuarioController.update);
    }
}
