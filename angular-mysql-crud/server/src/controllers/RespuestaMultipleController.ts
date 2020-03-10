import { Request, Response} from 'express';
import { RespuestaMultipleService } from '../services';
import { RespuestaMultiple } from '../models';

export class RespuestaMultipleController {
    
    static async listarRespuestaMultiples(req: Request, res: Response) {
        const { respuestaMultiple } = req.query;
        const _respuestaMultiple: RespuestaMultiple[] = await RespuestaMultipleService.listarRespuestaMultiples(respuestaMultiple);
        res.json(_respuestaMultiple);
    }

    static async crearRespuestaMultiple(req: Request, res: Response) {
        let respuestaMultiple: RespuestaMultiple = req.body;    
        await RespuestaMultipleService.crearRespuestaMultiple(respuestaMultiple);     
        res.json({'message':'saved respuestaMultiple'});
    }

    static async obtenerRespuestaMultiple(req: Request, res: Response) {
        const { idRespuestaMultiple } = req.params;
        const _respuestaMultiple: RespuestaMultiple = await RespuestaMultipleService.obtenerRespuestaMultiple(parseInt(idRespuestaMultiple));
        if(_respuestaMultiple == null){
            res.json({message:'the respuestaMultiple is not valid'});
        }else{
            res.json(_respuestaMultiple);
        }
    }

    static async actualizarRespuestaMultiple(req: Request, res: Response) {
        const { idRespuestaMultiple } = req.params;
        let respuestaMultiple: RespuestaMultiple = req.body;    
        await RespuestaMultipleService.actualizarRespuestaMultiple(parseInt(idRespuestaMultiple), respuestaMultiple);    
        res.json({'message':'the respuestaMultiple was updated '})
    }

    static async eliminarRespuestaMultiple(req: Request, res: Response) {
        const { idRespuestaMultiple } = req.params;
        await RespuestaMultipleService.eliminarRespuestaMultiple(parseInt(idRespuestaMultiple));     
        res.json({'message': 'the RespuestaMultiple was deleted'});
    }

}
