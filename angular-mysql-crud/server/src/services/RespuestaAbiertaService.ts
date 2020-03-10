import { RespuestaAbierta } from "../models";
import { pool } from "../database";


export class RespuestaAbiertaService {
    
    static async listarRespuestaAbiertas(): Promise<RespuestaAbierta[]> {
        return new Array<RespuestaAbierta>();
    }

    static async crearRespuestaAbierta(respuestaAbierta: RespuestaAbierta): Promise<boolean> {
        let sql: string = "INSERT INTO RespuestaAbierta (respuesta, idAplicacion, idPregunta)" +
                          "VALUES ('"+ respuestaAbierta.respuesta + "', '" +
                                       respuestaAbierta.idAplicacion + "', '" +
                                       respuestaAbierta.idPregunta + "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerRespuestaAbierta(idRespuestaAbierta: number): Promise<RespuestaAbierta> {
        let sql: string = "SELECT * FROM RespuestaAbierta WHERE idRespuestaAbierta = " + idRespuestaAbierta;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarRespuestaAbierta(idRespuestaAbierta: number,respuestaAbierta: RespuestaAbierta): Promise<boolean> {
        let sql: string = "UPDATE RespuestaAbierta SET " + 
                                "respuesta = '" +  respuestaAbierta.respuesta + "', " +
                                "idAplicacion = '" +  respuestaAbierta.idAplicacion + "', " +
                                "idPregunta = '" + respuestaAbierta.idPregunta +
                                "WHERE idRespuestaAbierta = " + idRespuestaAbierta +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarRespuestaAbierta(idRespuestaAbierta: number): Promise<boolean> {
        let sql: string = "DELETE FROM RespuestaAbierta WHERE idRespuestaAbierta = " + idRespuestaAbierta;
        await pool.query(sql);
        return true;
    }

}
