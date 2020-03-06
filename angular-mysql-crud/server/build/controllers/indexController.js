"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('hello server');
        console.log("send at indexController");
    }
}
exports.indexController = new IndexController();
//# sourceMappingURL=indexController.js.map