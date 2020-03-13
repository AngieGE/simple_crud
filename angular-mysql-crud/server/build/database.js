"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const keys_1 = require("./keys");
exports.pool = new mssql_1.default.ConnectionPool(keys_1.database);
exports.pool.connect().then(connection => {
    // pool.releaseConnection(connection);
    const req = new mssql_1.default.Request();
});
//# sourceMappingURL=database.js.map