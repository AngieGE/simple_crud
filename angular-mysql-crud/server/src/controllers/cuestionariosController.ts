import {json, Request, Response} from 'express';
import pool from '../database';
class CuestionariosController {

    public async list (req: Request, res: Response){ //YA QUEDO
        const cuestionarios = await pool.query('SELECT * FROM cuestionario')
        res.json(cuestionarios.recordset);
    }

    public async getOne (req: Request, res: Response): Promise<any>{ //YA QUEDO
        const { id } = req.params;
       const cuestionario = await pool.query('SELECT * FROM cuestionario WHERE id = ' + id);
        if ( cuestionario.recordset.length > 0 ){
            return res.json(cuestionario.recordset[0]);
        }
        res.status(404).json({'text':'the cuestionario doesnt exist'})
    }

    public async create(req: Request, res: Response): Promise<void>{ //YA QUEDO
       // let cuest=  json(req.body);
       console.log(req.body.desciption);
        console.log(req.body.title);

        await pool.query("INSERT INTO cuestionario ([title], [desciption]) VALUES ('"+ req.body.title +"', '"+ req.body.desciption +"');")
        res.json({'message':'saved questionaire'});
    }

    public async delete(req: Request, res: Response): Promise<void>{ //YA QUEDO
        const { id } = req.params;
        await pool.query('DELETE FROM cuestionario WHERE id = ' + id);
        res.json({'message': 'the cuetsionrio was deleted'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query("UPDATE cuestionario set title = '" + req.body.title + "', desciption = '" + req.body.desciption + "' WHERE id = " + id+" ;");//, [req.body, id])
        //UPDATE table_name
        // SET column1 = value1, column2 = value2, ...
        // WHERE condition
        res.json({'message':'the questionaire was updated '})
    }
}





const cuesionariosController = new CuestionariosController();
export default cuesionariosController;
