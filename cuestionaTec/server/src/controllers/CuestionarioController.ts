import { Request, Response} from 'express';
import { CuestionarioService } from '../services';
import { Cuestionario } from '../models';

export class CuestionarioController {

    static async listarCuestionarios (req: Request, res: Response){
        const { idUsuario, nombre } = req.query;
        const _cuestionario: Cuestionario[] = await CuestionarioService.listarCuestionarios(idUsuario,nombre);
        res.json(_cuestionario);
    }

    static async crearCuestionario(req: Request, res: Response) {
        let cuestionario: Cuestionario = req.body;    
        await CuestionarioService.crearCuestionario(cuestionario);     
        res.json({'message':'saved cuestionario'});
    }

    static async obtenerCuestionario (req: Request, res: Response) {
        const { idCuestionario } = req.params;
        const _cuestionario: Cuestionario = await CuestionarioService.obtenerCuestionario(parseInt(idCuestionario));
        if(_cuestionario == null){
            res.json({message:'the cuestionario is not valid'});
        }else{
            res.json(_cuestionario);
        }
    }

    static async actualizarCuestionario(req: Request, res: Response) {
        const { idCuestionario } = req.params;
        let cuestionario: Cuestionario = req.body;    
        await CuestionarioService.actualizarCuestionario(parseInt(idCuestionario), cuestionario);    
        res.json({'message':'the cuestionario was updated '})
    }

    static async eliminarCuestionario(req: Request, res: Response) {
        const { idCuestionario } = req.params;
        await CuestionarioService.eliminarCuestionario(parseInt(idCuestionario));     
        res.json({'message': 'the cuestionario was deleted'});
    }

}
