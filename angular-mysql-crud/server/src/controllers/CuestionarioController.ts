import { Request, Response} from 'express';
import { pool } from '../database';

export class CuestionarioController {

    static async listarCuestionarios (req: Request, res: Response){
        const { id } = req.params;
        const cuestionarios = await pool.query('SELECT * FROM cuestionario WHERE activa = 1 AND idUsuario  = '+ id + ';');
        res.json(cuestionarios.recordset);
        console.log(cuestionarios)
    }

    static async crearCuestionario(req: Request, res: Response) {
        // let cuest=  json(req.body);
        console.log(req.body.desciption);
         console.log(req.body.title);
 
         await pool.query("INSERT INTO cuestionario ([title], [desciption]) VALUES ('"+ req.body.title +"', '"+ req.body.desciption +"');")
         res.json({'message':'saved questionaire'});
    }

    static async obtenerCuestionario (req: Request, res: Response) {
        const { id } = req.params;
       const cuestionario = await pool.query('SELECT * FROM cuestionario WHERE idEncuesta = ' + id);
        if ( cuestionario.recordset.length > 0 ){
            return res.json(cuestionario.recordset[0]);
        }
        res.status(404).json({'text':'the cuestionario doesnt exist'})
    }

    static async actualizarCuestionario(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query("UPDATE cuestionario set title = '" + req.body.title + "', desciption = '" + req.body.desciption + "' WHERE idEncuesta = " + id +" ;");//, [req.body, id])
        //UPDATE table_name
        // SET column1 = value1, column2 = value2, ...
        // WHERE condition
        res.json({'message':'the questionaire was updated '})
    }

    static async eliminarCuestionario(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE cuestionario SET activa = 0 WHERE idEncuesta = ' + id).
        catch(err => res.status(400).json({err}));
        res.json({'message': 'the cuetsionrio was deleted'});
    }

}
