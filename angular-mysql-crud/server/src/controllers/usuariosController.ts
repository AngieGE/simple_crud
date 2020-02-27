import {json, Request, Response} from 'express';
import pool from '../database';
class UsuariosController {

    public async list (req: Request, res: Response){ //YA QUEDO
        const usuarios = await pool.query('SELECT * FROM usuario')
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
        res.json({'message':'the questionaire was updated '})
    }
}
const usuariosController = new UsuariosController();
export default usuariosController;
