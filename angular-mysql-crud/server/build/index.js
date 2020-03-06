"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IndexRouter_1 = __importDefault(require("./routes/IndexRouter"));
const CuestionarioRouter_1 = __importDefault(require("./routes/CuestionarioRouter"));
const UsuarioRouter_1 = __importDefault(require("./routes/UsuarioRouter"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        console.log("constructor");
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default({ origin: 'http://localhost:4200' }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        console.log('en routes');
        this.app.use('/', IndexRouter_1.default);
        this.app.use('/api/cuestionarios', CuestionarioRouter_1.default);
        this.app.use('/api/usuarios', UsuarioRouter_1.default);
    }
    start() {
        console.log('en start');
        this.app.listen(this.app.get('port'), () => {
            console.log("en start: Server running on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map