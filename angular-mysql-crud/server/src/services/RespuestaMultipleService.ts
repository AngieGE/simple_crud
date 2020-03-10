import { RespuestaMultiple } from "../models";
import { pool } from "../database";


export class RespuestaMultipleService {
    
    static async listarRespuestaMultiples(): Promise<RespuestaMultiple[]> {
        return new Array<RespuestaMultiple>();
    }

    static async crearRespuestaMultiple(respuestaMultiple:RespuestaMultiple): Promise<boolean> {
        let sql: string = "INSERT INTO RespuestaMultiple (idAplicacion, idOpcion, idPregunta)" +
                          "VALUES ('"+ respuestaMultiple.idAplicacion + "', '" +
                                       respuestaMultiple.idOpcion + "', '" +
                                       respuestaMultiple.idPregunta + "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerRespuestaMultiple(idRespuestaMultiple: number): Promise<RespuestaMultiple> {
        let sql: string = "SELECT * FROM RespuestaMultiple WHERE idRespuestaMultiple = " + idRespuestaMultiple;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarRespuestaMultiple(idRespuestaMultiple: number,respuestaMultiple:RespuestaMultiple): Promise<boolean> {
        let sql: string = "UPDATE RespuestaMultiple SET " + 
                                "idAplicacion = '" +  respuestaMultiple.idAplicacion + "', " +
                                "idOpcion = '" +  respuestaMultiple.idOpcion + "', " +
                                "idPregunta = '" + respuestaMultiple.idPregunta +
                                "WHERE idRespuestaMultiple = " + idRespuestaMultiple +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarRespuestaMultiple(idRespuestaMultiple: number): Promise<boolean> {
        let sql: string = "DELETE FROM RespuestaMultiple WHERE idRespuestaMultiple = " + idRespuestaMultiple;
        await pool.query(sql);
        return true;
    }

}
