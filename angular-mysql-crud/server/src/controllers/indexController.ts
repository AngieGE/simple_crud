import { Request, Response } from 'express';

export class IndexController {
    public index (req: Request, res: Response){
        res.send('hello server');//json({ text: 'API IS /api/cuestionarios'});
        console.log("send at indexController");
    }
}

export const indexController = new IndexController();
