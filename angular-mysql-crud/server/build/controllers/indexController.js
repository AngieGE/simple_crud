"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('hello server'); //json({ text: 'API IS /api/cuestionarios'});
        console.log("send at indexController");
    }
}
exports.indexController = new IndexController();
