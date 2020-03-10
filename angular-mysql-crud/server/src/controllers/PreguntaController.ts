import { Request, Response} from 'express';
import { PreguntaService } from '../services';
import { Pregunta } from '../models';

export class PreguntaController {
    
    static async listarPreguntas(req: Request, res: Response) {
        const { pregunta } = req.query;
        const _pregunta: Pregunta[] = await PreguntaService.listarPreguntas(pregunta);
        res.json(_pregunta);
    }

    static async crearPregunta(req: Request, res: Response) {
        let pregunta: Pregunta = req.body;    
        await PreguntaService.crearPregunta(pregunta);     
        res.json({'message':'saved pregunta'});
    }

    static async obtenerPregunta(req: Request, res: Response) {
        const { idPregunta} = req.params;
        const _pregunta: Pregunta = await PreguntaService.obtenerPregunta(parseInt(idPregunta));
        if(_pregunta == null){
            res.json({message:'the pregunta is not valid'});
        }else{
            res.json(_pregunta);
        }
    }

    static async actualizarPregunta(req: Request, res: Response) {
        const { idPregunta } = req.params;
        let pregunta: Pregunta = req.body;    
        await PreguntaService.actualizarPregunta(parseInt(idPregunta), pregunta);    
        res.json({'message':'the pregunta was updated '})
    }

    static async eliminarPregunta(req: Request, res: Response) {
        const { idPregunta } = req.params;
        await PreguntaService.eliminarPregunta(parseInt(idPregunta));     
        res.json({'message': 'the aplicacion was deleted'});
    }

}
