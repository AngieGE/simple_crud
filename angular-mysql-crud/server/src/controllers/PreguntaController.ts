import { Request, Response} from 'express';
import { PreguntaService, CatalogoPreguntaService, TipoPreguntaService } from '../services';
import { Pregunta, CatalogoPregunta, TipoPregunta, PreguntaRequest } from '../models';

export class PreguntaController {
    
    static async listarPreguntas(req: Request, res: Response) {
        const { idCuestionario, idCatalogoPregunta} = req.query;
        const _pregunta: Pregunta[] = await PreguntaService.listarPreguntas(idCuestionario,idCatalogoPregunta);
        const preguntaFormat = _pregunta.map((item: any) => new Pregunta(item))
        for (const pregunta of preguntaFormat) {
            pregunta.catalogoPregunta = new CatalogoPregunta(await CatalogoPreguntaService.obtenerCatalogoPregunta(pregunta.idCatalogoPregunta!)); 
            pregunta.tipoPregunta = new TipoPregunta(await TipoPreguntaService.obtenerTipoPregunta(pregunta.idTipoPregunta!));            
        }
        res.json(preguntaFormat);
    }

    static async crearPregunta(req: Request, res: Response) {
        let preguntaR: PreguntaRequest = req.body;    
        let pregunta = new Pregunta(preguntaR as Pregunta);
        let catalogos = await CatalogoPreguntaService.listarCatalogoPreguntas(preguntaR.pregunta);
        let tipos = await TipoPreguntaService.listarTipoPreguntas(preguntaR.tipoPregunta);
        if(tipos.length>0){
            pregunta.idTipoPregunta = tipos[0].idTipoPregunta;
        }
        if (catalogos.length > 0) { // La nueva pregunta ya existe
            pregunta.idCatalogoPregunta = catalogos[0].idCatalogoPregunta
        } else {                    // La nueva pregunta no existe
            let newCatalogo = new CatalogoPregunta({pregunta: preguntaR.pregunta})
            await CatalogoPreguntaService.crearCatalogoPregunta(newCatalogo);
            catalogos = await CatalogoPreguntaService.listarCatalogoPreguntas(preguntaR.pregunta);
            pregunta.idCatalogoPregunta = catalogos[0].idCatalogoPregunta
        }

        await PreguntaService.crearPregunta(pregunta);     
        res.json({'message':'saved pregunta'});
    }

    static async obtenerPregunta(req: Request, res: Response) {
        const { idPregunta} = req.params;
        const _pregunta: Pregunta = await PreguntaService.obtenerPregunta(parseInt(idPregunta));
        const preguntaFormat = new Pregunta(_pregunta);
        preguntaFormat.catalogoPregunta = new CatalogoPregunta(await CatalogoPreguntaService.obtenerCatalogoPregunta(preguntaFormat.idCatalogoPregunta!));            
        preguntaFormat.tipoPregunta = new TipoPregunta(await TipoPreguntaService.obtenerTipoPregunta(preguntaFormat.idTipoPregunta!));            

        if(preguntaFormat == null){
            res.json({message:'the pregunta is not valid'});
        }else{
            res.json(preguntaFormat);
        }
    }

    static async actualizarPregunta(req: Request, res: Response) {
        const { idPregunta } = req.params;
        let preguntaR: PreguntaRequest = req.body;    
        let pregunta = new Pregunta(preguntaR as Pregunta);
        let preguntaAnterior = await PreguntaService.obtenerPregunta(parseInt(idPregunta));
        let preguntasMismoCatalogo = await PreguntaService.listarPreguntas(preguntaAnterior.idCatalogoPregunta);
        let catalogos = await CatalogoPreguntaService.listarCatalogoPreguntas(preguntaR.pregunta); 
        let tipos = await TipoPreguntaService.listarTipoPreguntas(preguntaR.tipoPregunta);
        if(tipos.length>0){
            pregunta.idTipoPregunta = tipos[0].idTipoPregunta;
        }
        if (preguntasMismoCatalogo.length <= 1 && catalogos.length > 0) { //La opcion anterior solo yo la uso y la nueva ya existe
            pregunta.idCatalogoPregunta = catalogos[0].idCatalogoPregunta;
            await PreguntaService.actualizarPregunta(parseInt(idPregunta), pregunta);    
            await CatalogoPreguntaService.eliminarCatalogoPregunta(preguntaAnterior.idCatalogoPregunta!);

        }else if (preguntasMismoCatalogo.length <= 1 && catalogos.length <= 0) { // La opcion anterior solo yo la uso, y la nueva no existe
            await CatalogoPreguntaService.actualizarCatalogoPregunta(preguntaAnterior.idCatalogoPregunta!, { pregunta: preguntaR.pregunta });
            await PreguntaService.actualizarPregunta(parseInt(idPregunta), pregunta);

        } else if (preguntasMismoCatalogo.length > 1 && catalogos.length > 0) { //La opcion anterior mas personas la usan y la nueva ya existe
            pregunta.idCatalogoPregunta = catalogos[0].idCatalogoPregunta;
            await PreguntaService.actualizarPregunta(parseInt(idPregunta), pregunta);    

        }else if (preguntasMismoCatalogo.length > 1 && catalogos.length <= 0) { // La opcion anterior mas personas la usan, y la nueva no existe
            await CatalogoPreguntaService.crearCatalogoPregunta({ pregunta: preguntaR.pregunta });
            let newCatalogos = await CatalogoPreguntaService.listarCatalogoPreguntas(preguntaR.pregunta);
            pregunta.idCatalogoPregunta = newCatalogos[0].idCatalogoPregunta;
            await PreguntaService.actualizarPregunta(parseInt(idPregunta), pregunta);

        }

        await PreguntaService.actualizarPregunta(parseInt(idPregunta), pregunta);    
        res.json({'message':'the pregunta was updated '})
    }

    static async eliminarPregunta(req: Request, res: Response) {
        const { idPregunta } = req.params;
        await PreguntaService.eliminarPregunta(parseInt(idPregunta));     
        res.json({'message': 'the pregunta was deleted'});
    }

}
