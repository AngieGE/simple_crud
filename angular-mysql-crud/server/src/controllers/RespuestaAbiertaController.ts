import { Request, Response} from 'express';
import { RespuestaAbiertaService } from '../services';
import { RespuestaAbierta } from '../models';

export class RespuestaAbiertaController {
    
    static async listarRespuestaAbiertas(req: Request, res: Response) {
        const { respuestaAbierta } = req.query;
        const _respuestaAbierta: RespuestaAbierta[] = await RespuestaAbiertaService.listarRespuestaAbiertas(respuestaAbierta);
        res.json(_respuestaAbierta);
    }

    static async crearRespuestaAbierta(req: Request, res: Response) {
        let respuestaAbierta: RespuestaAbierta = req.body;    
        await RespuestaAbiertaService.crearRespuestaAbierta(respuestaAbierta);     
        res.json({'message':'saved respuestaAbierta'});
    }

    static async obtenerRespuestaAbierta(req: Request, res: Response) {
        const { idRespuestaAbierta } = req.params;
        const _respuestaAbierta: RespuestaAbierta = await RespuestaAbiertaService.obtenerRespuestaAbierta(parseInt(idRespuestaAbierta));
        if(_respuestaAbierta == null){
            res.json({message:'the RespuestaAbierta is not valid'});
        }else{
            res.json(_respuestaAbierta);
        }
    }

    static async actualizarRespuestaAbierta(req: Request, res: Response) {
        const { idRespuestaAbierta } = req.params;
        let respuestaAbierta: RespuestaAbierta = req.body;    
        await RespuestaAbiertaService.actualizarRespuestaAbierta(parseInt(idRespuestaAbierta), respuestaAbierta);    
        res.json({'message':'the respuestaAbierta was updated '})
    }

    static async eliminarRespuestaAbierta(req: Request, res: Response) {
        const { idRespuestaAbierta } = req.params;
        await RespuestaAbiertaService.eliminarRespuestaAbierta(parseInt(idRespuestaAbierta));     
        res.json({'message': 'the respuestaAbierta was deleted'});
    }

}
