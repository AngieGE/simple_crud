import express, {Application} from 'express';
import indexRoutes from './routes/IndexRouter';
import cuestionariosRoutes from './routes/CuestionarioRouter';
import usuariosRoutes from './routes/UsuarioRouter';
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

        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors({origin: 'http://localhost:4200'})); //omaigoood, no quiten esa url
        this.app.use(express.json());
       this.app.use(express.urlencoded({extended:false}));

    }

    routes(): void{
        console.log('en routes');
        this.app.use('/',indexRoutes);
        this.app.use('/api/cuestionarios', cuestionariosRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
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
