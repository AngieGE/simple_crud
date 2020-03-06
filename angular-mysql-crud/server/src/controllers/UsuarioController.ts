import {json, Request, Response} from 'express';
import pool from '../database';

export class UsuarioController {

    public async list (req: Request, res: Response){ //YA QUEDO
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios.recordset);
    }

    public async getOne (req: Request, res: Response): Promise<any>{ //YA QUEDO
        const { id } = req.params;
        const usuarios = await pool.query('SELECT * FROM usuario WHERE idUsuario = ' + id);
        if ( usuarios.recordset.length > 0 ){
            return res.json(usuarios.recordset[0]);
        }
        res.status(404).json({'text':'the usuario doesnt exist'})
    }

    public async create(req: Request, res: Response): Promise<void>{ //YA QUEDO
        await pool.query("INSERT INTO usuario ([nombre], [apellido], [contrasena],[usuario], [fechaNacimiento],[genero]) VALUES ('"+ req.body.nombre +"', '"+ req.body.apellido +"', '" + req.body.contrasena + "', '" + req.body.usuario + "', '" + req.body.fechaNacimiento + "', '" + req.body.genero + "');").catch(err => res.status(400).json({err}));;
        res.json({'message':'saved usuario'});
    }

    public async delete(req: Request, res: Response): Promise<void>{ //YA QUEDO
        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE idUsuario = ' + id);
        res.json({'message': 'the usuarios was deleted'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query("UPDATE usuario SET nombre = '" +  req.body.nombre + "', apellido = '" + req.body.apellido +"'," +
                                    "contrasena = '" + req.body.contrasena + "', usuario = '" + req.body.usuario + "', " +
                                    "fechaNacimiento = '" + req.body.fechaNacimiento + "', genero = '" + req.body.genero + "' " +
                                    "WHERE idUsuario = " + id +" ;");//, [req.body, id])
        res.json({'message':'the usuario was updated '})
    }

    public async login(req: Request, res: Response): Promise<void>{
        let usuario = req.query.usuario;
        let contrasena = req.query.contrasena;
        console.log(req.query);

        const usuarioCheck = await pool.query("SELECT * FROM usuario WHERE usuario = '" + usuario + "' AND contrasena = '" + contrasena + "'; ")

        if(usuarioCheck.recordset.length == 0){
            res.json({'message':'the usuario is not valid ', 'usuario': null})
        }else{
            res.json({'message':'the usuario is valid', 'usuario': JSON.stringify(usuarioCheck.recordset[0])});
        }

    }
}
const usuariosController = new UsuarioController();
export default usuariosController;
