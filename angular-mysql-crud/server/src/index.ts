import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { IndexRouter, CuestionarioRouter, UsuarioRouter, AplicacionRouter, OpcionRouter, PreguntaRouter, RespuestaAbiertaRouter, RespuestaMultipleRouter } from './routes'
import { apiPort } from './keys';

export class Server{
    public  app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.use(morgan('dev'));
        this.app.use(cors({origin: 'http://localhost:4200'})); //omaigoood, no quiten esa url
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
        this.app.use('/', IndexRouter.getInstance().router);
        this.app.use('/aplicacion', AplicacionRouter.getInstance().router);
        this.app.use('/api/cuestionarios', CuestionarioRouter.getInstance().router);
        this.app.use('/opcion', OpcionRouter.getInstance().router);
        this.app.use('/pregunta', PreguntaRouter.getInstance().router);
        this.app.use('/respuestaAbierta', RespuestaAbiertaRouter.getInstance().router);
        this.app.use('/respuestaMultiple', RespuestaMultipleRouter.getInstance().router);
        this.app.use('/api/usuarios', UsuarioRouter.getInstance().router);
    }

    start(): void{
        this.app.listen(apiPort, () =>{
            console.log("Server running on port: ", apiPort);
        });
    }
}

const server = new Server();
server.start();
