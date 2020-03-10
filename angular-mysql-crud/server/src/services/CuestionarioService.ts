import { Cuestionario } from "../models";
import { pool } from "../database";


export class CuestionarioService {

    static async listarCuestionarios(encuesta?: string): Promise<Cuestionario[]> {
        let sql: string = "SELECT * FROM Cuestionario WHERE "
                   sql += encuesta!=null ? "usuario = '" + encuesta + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset; 
    }

    static async crearCuestionario(cuestionario: Cuestionario): Promise<boolean> {
        let sql: string = "INSERT INTO Cuestionario (nombre, descripcion, idUsuario, activa)" +
                          "VALUES ('"+ cuestionario.nombre + "', '" +
                                       cuestionario.descripcion + "', '" +
                                       cuestionario.idUsuario + "', '" +
                                       cuestionario.activa+ "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerCuestionario(idCuestionario: number): Promise<Cuestionario> {
        let sql: string = "SELECT * FROM Cuestionario WHERE idCuestionario = " + idCuestionario;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarCuestionario(idCuestionario: number,cuestionario: Cuestionario): Promise<boolean> {
        let sql: string = "UPDATE Cuestionario SET " + 
                                "nombre = '" +  cuestionario.nombre + "', " +
                                "descripcion = '" + cuestionario.descripcion +"'," +
                                "idUsuario = '" + cuestionario.idUsuario + "', " +
                                "activa = '" + cuestionario.activa +
                                "WHERE idCuestionario = " + idCuestionario +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarCuestionario(idCuestionario: number): Promise<boolean> {
        let sql: string = "DELETE FROM Cuestionario WHERE idCuestionario = " + idCuestionario;
        await pool.query(sql);
        return true;
    }

}
