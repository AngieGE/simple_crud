import sql from 'mssql';
import { database } from './keys';

export const pool = new sql.ConnectionPool(database);

pool.connect().then(connection =>{
   // pool.releaseConnection(connection);
    const req = new sql.Request()
});
