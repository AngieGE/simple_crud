"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuario');
            res.json(usuarios.recordset);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuarios = yield database_1.default.query('SELECT * FROM usuario WHERE idUsuario = ' + id);
            if (usuarios.recordset.length > 0) {
                return res.json(usuarios.recordset[0]);
            }
            res.status(404).json({ 'text': 'the usuario doesnt exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO usuario ([nombre], [apellido], [contrasena],[usuario], [fechaNacimiento],[genero]) VALUES ('" + req.body.nombre + "', '" + req.body.apellido + "', '" + req.body.contrasena + "', '" + req.body.usuario + "', '" + req.body.fechaNacimiento + "', '" + req.body.genero + "');").catch(err => res.status(400).json({ err }));
            ;
            res.json({ 'message': 'saved usuario' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE idUsuario = ' + id);
            res.json({ 'message': 'the usuarios was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE usuario SET nombre = '" + req.body.nombre + "', apellido = '" + req.body.apellido + "'," +
                "contrasena = '" + req.body.contrasena + "', usuario = '" + req.body.usuario + "', " +
                "fechaNacimiento = '" + req.body.fechaNacimiento + "', genero = '" + req.body.genero + "' " +
                "WHERE idUsuario = " + id + " ;"); //, [req.body, id])
            res.json({ 'message': 'the usuario was updated ' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuario = req.query.usuario;
            let contrasena = req.query.contrasena;
            console.log(req.query);
            const usuarioCheck = yield database_1.default.query("SELECT * FROM usuario WHERE usuario = '" + usuario + "' AND contrasena = '" + contrasena + "'; ");
            if (usuarioCheck.recordset.length == 0) {
                res.json({ 'message': 'the usuario is not valid ', 'usuario': null });
            }
            else {
                res.json({ 'message': 'the usuario is valid', 'usuario': JSON.stringify(usuarioCheck.recordset[0]) });
            }
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
