import {Router} from 'express';
import { IndexController } from "../controllers/IndexController";

export class IndexRouter {
    public router: Router = Router();
    static instance: IndexRouter

    static getInstance(): IndexRouter {
        if (this.instance==null) this.instance = new IndexRouter();
        return this.instance;
    }

    constructor() {
        this.config();
    }
    
    config():void{
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', IndexController.index);
    }
}
