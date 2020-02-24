"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuestionariosController_1 = __importDefault(require("../controllers/cuestionariosController"));
class CuestionariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', cuestionariosController_1.default.list);
        this.router.get('/:id', cuestionariosController_1.default.getOne);
        this.router.post('/', cuestionariosController_1.default.create);
        this.router.delete('/:id', cuestionariosController_1.default.delete);
        this.router.put('/:id', cuestionariosController_1.default.update);
    }
}
const cuestionariosRoutes = new CuestionariosRoutes();
exports.default = cuestionariosRoutes.router;
