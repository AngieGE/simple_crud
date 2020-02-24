import { Request, Response } from 'express';
import pool from '../database';
class CuestionariosController {

    public async list (req: Request, res: Response){
        const cuestionarios = await pool.query('SELECT * FROM cuestionario')
        res.json(cuestionarios);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const cuestionario = await pool.query('SELECT * FROM cuestionario WHERE id = ?', {id});
        console.log(cuestionario);
        if ( cuestionario.length > 0 ){
            return res.json(cuestionario[0]);
        }
        res.status(404).json({'text':'the cuestionario doesnt exist'})
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO cuestionario set ?', [req.body])
        res.json({'message':'saved questionaire'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM cuestionario WHERE id = ?', [{id}]);
        res.json({'message': 'the cuetsionrio was deleted'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE cuestionario set ? WHERE id = ?', [req.body, id])
        res.json({'message':'the questionaire was updated '})
    }
}





const cuesionariosController = new CuestionariosController();
export default cuesionariosController;
