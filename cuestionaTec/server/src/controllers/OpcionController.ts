import { Request, Response} from 'express';
import { OpcionService, CatalogoOpcionService } from '../services';
import { Opcion, CatalogoOpcion, OpcionRequest } from '../models';

export class OpcionController {
    
    static async listarOpciones(req: Request, res: Response) {
        const { idCatalogoOpcion, idPregunta} = req.query;
        const _opcion: Opcion[] = await OpcionService.listarOpciones(idCatalogoOpcion,idPregunta);
        const opcionFormat = _opcion.map((item: any) => new Opcion(item))
        for (const opcion of opcionFormat) {
            opcion.catalogoOpcion = new CatalogoOpcion(await CatalogoOpcionService.obtenerCatalogoOpcion(opcion.idCatalogoOpcion!));            
        }
        res.json(opcionFormat);
    }

    static async crearOpcion(req: Request, res: Response) {
        let opcionR: OpcionRequest = req.body;   
        let opcion = new Opcion(opcionR);
        let catalogos = await CatalogoOpcionService.listarCatalogoOpciones(opcionR.opcion);
        if (catalogos.length > 0) { // LA nueva opcion ya existe
            opcion.idCatalogoOpcion = catalogos[0].idCatalogoOpcion
        } else {                    // La nueva opcion no existe
            let newCatalogo = new CatalogoOpcion({opcion: opcionR.opcion})
            await CatalogoOpcionService.crearCatalogoOpcion(newCatalogo);
            catalogos = await CatalogoOpcionService.listarCatalogoOpciones(opcionR.opcion);
            opcion.idCatalogoOpcion = catalogos[0].idCatalogoOpcion
        }
        await OpcionService.crearOpcion(opcion);     
        res.json({'message':'saved opcion'});
    }

    static async obtenerOpcion(req: Request, res: Response) {
        const { idOpcion } = req.params;
        const _opcion: Opcion = await OpcionService.obtenerOpcion(parseInt(idOpcion));
        const opcionFormat = new Opcion(_opcion);
        opcionFormat.catalogoOpcion = new CatalogoOpcion(await CatalogoOpcionService.obtenerCatalogoOpcion(opcionFormat.idCatalogoOpcion!)); 

        if(opcionFormat == null){
            res.json({message:'the opcion is not valid'});
        }else{
            res.json(opcionFormat);
        }
    }

    static async actualizarOpcion(req: Request, res: Response) {
        const { idOpcion } = req.params;
        let opcionR: OpcionRequest = req.body; 
        let opcion = new Opcion(opcionR);
        let opcionAnterior = await OpcionService.obtenerOpcion(parseInt(idOpcion));
        let opcionesMismoCatalogo = await OpcionService.listarOpciones(opcionAnterior.idCatalogoOpcion);
        let catalogos = await CatalogoOpcionService.listarCatalogoOpciones(opcionR.opcion); 
        if (opcionesMismoCatalogo.length <= 1 && catalogos.length > 0) { //La opcion anterior solo yo la uso y la nueva ya existe
            opcion.idCatalogoOpcion = catalogos[0].idCatalogoOpcion;
            await OpcionService.actualizarOpcion(parseInt(idOpcion), opcion);    
            await CatalogoOpcionService.eliminarCatalogoOpcion(opcionAnterior.idCatalogoOpcion!);

        }else if (opcionesMismoCatalogo.length <= 1 && catalogos.length <= 0) { // La opcion anterior solo yo la uso, y la nueva no existe
            await CatalogoOpcionService.actualizarCatalogoOpcion(opcionAnterior.idCatalogoOpcion!, { opcion: opcionR.opcion });
            await OpcionService.actualizarOpcion(parseInt(idOpcion), opcion);

        } else if (opcionesMismoCatalogo.length > 1 && catalogos.length > 0) { //La opcion anterior mas personas la usan y la nueva ya existe
            opcion.idCatalogoOpcion = catalogos[0].idCatalogoOpcion;
            await OpcionService.actualizarOpcion(parseInt(idOpcion), opcion);    

        }else if (opcionesMismoCatalogo.length > 1 && catalogos.length <= 0) { // La opcion anterior mas personas la usan, y la nueva no existe
            await CatalogoOpcionService.crearCatalogoOpcion({ opcion: opcionR.opcion });
            let newCatalogos = await CatalogoOpcionService.listarCatalogoOpciones(opcionR.opcion);
            opcion.idCatalogoOpcion = newCatalogos[0].idCatalogoOpcion;
            await OpcionService.actualizarOpcion(parseInt(idOpcion), opcion);

        }

        res.json({'message':'the opcion was updated '})
    }

    static async eliminarOpcion(req: Request, res: Response) {
        const { idOpcion } = req.params;
        await OpcionService.eliminarOpcion(parseInt(idOpcion));     
        res.json({'message': 'the opcion was deleted'});
    }

}
