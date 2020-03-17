import { Request, Response} from 'express';
import { AplicacionService } from '../services';
import { Aplicacion } from '../models';

export class AplicacionController {
    
    static async listarAplicaciones(req: Request, res: Response) {
        const { idUsuario, idCuestionario} = req.query;
        const _aplicacion: Aplicacion[] = await AplicacionService.listarAplicaciones(idUsuario,idCuestionario);
        res.json(_aplicacion);
    }
    
    static async crearAplicacion(req: Request, res: Response) {
        console.log('Si llego a Aplicacion Controller');
        let aplicacion: Aplicacion = req.body;    
        const inserted=await AplicacionService.crearAplicacion(aplicacion);     
        res.json({inserted});
    }

    static async obtenerAplicacion(req: Request, res: Response) {
        const { idAplicacion } = req.params;
        const _aplicacion: Aplicacion = await AplicacionService.obtenerAplicacion(parseInt(idAplicacion));
        if(_aplicacion == null){
            res.json({message:'the aplicacion is not valid'});
        }else{
            res.json(_aplicacion);
        }
    }

    static async actualizarAplicacion(req: Request, res: Response) {
        const { idAplicacion } = req.params;
        let aplicacion: Aplicacion = req.body;    
        await AplicacionService.actualizarAplicacion(parseInt(idAplicacion), aplicacion);    
        res.json({'message':'the aplicacion was updated '})
    }

    static async eliminarAplicacion(req: Request, res: Response) {
        const { idAplicacion } = req.params;
        await AplicacionService.eliminarAplicacion(parseInt(idAplicacion));     
        res.json({'message': 'the aplicacion was deleted'});
    }

}
