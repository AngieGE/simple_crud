"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./routes/index");
const keys_1 = require("./keys");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default({ origin: 'http://localhost:4200' }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/aplicacion', index_1.AplicacionRouter.getInstance().router);
        this.app.use('/cuestionario', index_1.CuestionarioRouter.getInstance().router);
        this.app.use('/opcion', index_1.OpcionRouter.getInstance().router);
        this.app.use('/pregunta', index_1.PreguntaRouter.getInstance().router);
        this.app.use('/respuestaAbierta', index_1.RespuestaAbiertaRouter.getInstance().router);
        this.app.use('/respuestaMultiple', index_1.RespuestaMultipleRouter.getInstance().router);
        this.app.use('/usuario', index_1.UsuarioRouter.getInstance().router);
    }
    start() {
        this.app.listen(keys_1.apiPort, () => {
            console.log("Server running on port: ", keys_1.apiPort);
        });
    }
}
exports.Server = Server;
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map