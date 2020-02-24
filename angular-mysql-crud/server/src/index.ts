import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import cuestionariosRoutes from './routes/cuestionariosRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{
    public  app: Application;
    constructor(){
        //Inicializa express y lo guarda en la propiedad app
        console.log("constructor");
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        console.log('en config');
        this.app.set('port', process.env.PORT || 3000);
        console.log(this.app.get('port'));
        this.app.use(morgan('dev'));
       // this.app.use(cors);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }

    routes(): void{
        console.log('en routes');
        this.app.use('/',indexRoutes);
        this.app.use('/api/cuestionarios', cuestionariosRoutes);
    }

    start(): void{
        console.log('en start');
        this.app.listen(this.app.get('port'), () =>{
            console.log("en start: Server running on port", this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
