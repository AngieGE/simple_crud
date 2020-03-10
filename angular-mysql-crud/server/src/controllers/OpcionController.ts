import { Request, Response} from 'express';
import { OpcionService } from '../services';
import { Opcion } from '../models';

export class OpcionController {
    
    static async listarOpciones(req: Request, res: Response) {
        const { opcion } = req.query;
        const _opcion: Opcion[] = await OpcionService.listarOpciones(opcion);
        res.json(_opcion);
    }

    static async crearOpcion(req: Request, res: Response) {
        let opcion: Opcion = req.body;    
        await OpcionService.crearOpcion(opcion);     
        res.json({'message':'saved opcion'});
    }

    static async obtenerOpcion(req: Request, res: Response) {
        const { idOpcion } = req.params;
        const _opcion: Opcion = await OpcionService.obtenerOpcion(parseInt(idOpcion));
        if(_opcion == null){
            res.json({message:'the opcion is not valid'});
        }else{
            res.json(_opcion);
        }
    }

    static async actualizarOpcion(req: Request, res: Response) {
        const { idOpcion } = req.params;
        let opcion: Opcion = req.body;    
        await OpcionService.actualizarOpcion(parseInt(idOpcion), opcion);    
        res.json({'message':'the opcion was updated '})
    }

    static async eliminarOpcion(req: Request, res: Response) {
        const { idOpcion } = req.params;
        await OpcionService.eliminarOpcion(parseInt(idOpcion));     
        res.json({'message': 'the opcion was deleted'});
    }

}
