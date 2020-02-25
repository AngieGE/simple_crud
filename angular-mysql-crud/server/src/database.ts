import sql from 'mssql';
import keys from './keys';

const pool = new sql.ConnectionPool(keys.database);

pool.connect().then(connection =>{
   // pool.releaseConnection(connection);
    const req = new sql.Request()
    console.log('DB is connected!!!');
});

export default pool;




