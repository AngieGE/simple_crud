import {json, Request, Response} from 'express';
import { pool } from '../database';
import { UsuarioService } from '../services';
import { Usuario } from '../models';

export class UsuarioController {

    static async login(req: Request, res: Response) {
        const { usuario, contrasena } = req.query;
        const _usuario: Usuario = await UsuarioService.login(usuario, contrasena);
        if(_usuario == null){
            res.json({message:'the usuario is not valid ', usuario: null})
        }else{
            res.json({message:'the usuario is valid', usuario: _usuario});
        }
    }
    
    static async listarUsuarios (req: Request, res: Response) {
        const { usuario } = req.query;
        const _usuarios: Usuario[] = await UsuarioService.listarUsuarios(usuario);
        res.json(_usuarios);
    }

    static async crearUsuario(req: Request, res: Response) {
        let usuario: Usuario = req.body;    
        await UsuarioService.crearUsuario(usuario);     
        res.json({'message':'saved usuario'});
    }

    static async obtenerUsuario (req: Request, res: Response) {
        const { idUsuario } = req.params;
        const _usuario: Usuario = await UsuarioService.obtenerUsuario(parseInt(idUsuario));
        if(_usuario == null){
            res.json({message:'the usuario is not valid'});
        }else{
            res.json(_usuario);
        }
    }

    static async actualizarUsuario (req: Request, res: Response) {
        const { idUsuario } = req.params;
        let usuario: Usuario = req.body;    
        await UsuarioService.actualizarUsuario(parseInt(idUsuario), usuario);    
        res.json({'message':'the usuario was updated '})
    }

    static async eliminarUsuario (req: Request, res: Response) {
        const { idUsuario } = req.params;
        await UsuarioService.eliminarUsuario(parseInt(idUsuario));     
        res.json({'message': 'the usuarios was deleted'});
    }

}

