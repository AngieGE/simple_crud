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
        this.router.get('/login', UsuarioController.login);
        this.router.get('/', UsuarioController.listarUsuarios);
        this.router.post('/', UsuarioController.crearUsuario);
        this.router.get('/:idUsuario', UsuarioController.obtenerUsuario);
        this.router.put('/:idUsuario', UsuarioController.actualizarUsuario);
        this.router.delete('/:idUsuario', UsuarioController.eliminarUsuario);
    }
}
