import { Opcion } from "../models";
import { pool } from "../database";


export class OpcionService {
    
    static async listarOpciones(idCatalogoOpcion?: number, idPregunta?: number): Promise<Opcion[]> {
        let sql: string = "SELECT * FROM Opcion WHERE "
                   sql += idCatalogoOpcion!=null ? "idCatalogoOpcion = '" + idCatalogoOpcion + "' AND " : "";
                   sql += idPregunta!=null ? "idPregunta = '" + idPregunta + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async crearOpcion(opcion: Opcion): Promise<boolean> {
        let sql: string = "INSERT INTO Opcion (idCatalogoOpcion, idPregunta)" +
                          "VALUES ('"+ opcion.idCatalogoOpcion + "', '" +
                                       opcion.idPregunta + "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerOpcion(idOpcion: number): Promise<Opcion> {
        let sql: string = "SELECT * FROM Opcion WHERE idOpcion = " + idOpcion;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarOpcion(idOpcion: number,opcion: Opcion): Promise<boolean> {
        let sql: string = "UPDATE Opcion SET " + 
                                "idCatalogoOpcion = '" +  opcion.idCatalogoOpcion + "', " +
                                "idPregunta = '" + opcion.idPregunta +
                                "WHERE idOpcion = " + idOpcion +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarOpcion(idOpcion: number): Promise<boolean> {
        let sql: string = "DELETE FROM Opcion WHERE idOpcion = " + idOpcion;
        await pool.query(sql);
        return true;
    }

}
