import { OpcionController } from '../controllers';
import { Router } from "express";

export class OpcionRouter {
    public router: Router = Router();
    static instance: OpcionRouter

    static getInstance(): OpcionRouter {
        if (this.instance==null) this.instance = new OpcionRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }
    
    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', OpcionController.listarOpciones);
        this.router.post('/', OpcionController.crearOpcion);
        this.router.get('/:idOpcion', OpcionController.obtenerOpcion);
        this.router.put('/:idOpcion', OpcionController.actualizarOpcion);
        this.router.delete('/:idOpcion', OpcionController.eliminarOpcion);
    }

}
