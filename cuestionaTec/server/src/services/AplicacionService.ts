import { Aplicacion } from "../models";
import { pool } from "../database";
import { IResult } from "mssql";

export class AplicacionService {
    
    static async listarAplicaciones(idUsuario?: number, idCuestionario?: number): Promise<Aplicacion[]> {
        let sql: string = "SELECT * FROM Aplicacion WHERE "
                   sql += idUsuario!=null ? "idUsuario = '" + idUsuario + "' AND " : "";
                   sql += idCuestionario!=null ? "idCuestionario = '" + idCuestionario + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;    
    }

    static async crearAplicacion(aplicacion: Aplicacion): Promise<any> {
        aplicacion.fecha = new Date();
        console.log('Si llego a Aplicacion service');
        let sql: string = "INSERT INTO Aplicacion (fecha, idCuestionario, idUsuario)" +
                          "VALUES ('"+ aplicacion.fecha.toISOString() + "', '" +
                                       aplicacion.idCuestionario + "', '" +
                                       aplicacion.idUsuario + "'); SELECT SCOPE_IDENTITY() AS id"
        const resultado= await pool.query(sql);
        return resultado.recordset[0].id;
    }

    static async obtenerAplicacion(idAplicacion: number): Promise<Aplicacion> {
        let sql: string = "SELECT * FROM Aplicacion WHERE idAplicacion = " + idAplicacion;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarAplicacion(idAplicacion: number, aplicacion: Aplicacion): Promise<boolean> {
        let sql: string = "UPDATE Aplicacion SET " + 
                                "fecha = '" +  aplicacion.fecha + "', " +
                                "idCuestionario = '" + aplicacion.idCuestionario +"'," +
                                "idUsuario = " + aplicacion.idUsuario + " " +
                                "WHERE idAplicacion = " + idAplicacion +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarAplicacion(idAplicacion: number): Promise<boolean> {
        let sql: string = "DELETE FROM Aplicacion WHERE idAplicacion = " + idAplicacion;
        await pool.query(sql);
        return true;
    }

}
