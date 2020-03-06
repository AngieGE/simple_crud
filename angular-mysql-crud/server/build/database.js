"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const keys_1 = __importDefault(require("./keys"));
const pool = new mssql_1.default.ConnectionPool(keys_1.default.database);
pool.connect().then(connection => {
    const req = new mssql_1.default.Request();
    console.log('DB is connected!!!');
});
exports.default = pool;
//# sourceMappingURL=database.js.map