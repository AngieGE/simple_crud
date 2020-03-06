import { Request, Response } from 'express';

export class IndexController {
    static async index (req: Request, res: Response){
        res.send('hello server');//json({ text: 'API IS /api/cuestionarios'});
        console.log("send at indexController");
    }
}
