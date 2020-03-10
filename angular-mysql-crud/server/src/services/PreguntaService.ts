import { Pregunta } from "../models";
import { pool } from "../database";


export class PreguntaService {
    
    static async listarPreguntas(pregunta?: string): Promise<Pregunta[]> {
        let sql: string = "SELECT * FROM Pregunta WHERE "
                   sql += pregunta!=null ? "pregunta = '" + pregunta + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async crearPregunta(pregunta: Pregunta): Promise<boolean> {
        let sql: string = "INSERT INTO Pregunta (idCuestionario, idCatalogoPregunta, idTipoPregunta)" +
                          "VALUES ('"+ pregunta.idCuestionario + "', '" +
                                       pregunta.idCatalogoPregunta + "', '" +
                                       pregunta.idTipoPregunta + "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerPregunta(idPregunta: number): Promise<Pregunta> {
        let sql: string = "SELECT * FROM Pregunta WHERE idPregunta = " + idPregunta;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarPregunta(idPregunta: number,pregunta: Pregunta): Promise<boolean> {
        let sql: string = "UPDATE Pregunta SET " + 
                                "idCuestionario = '" +  pregunta.idCuestionario + "', " +
                                "idCatalogoPregunta = '" + pregunta.idCatalogoPregunta +"', " +
                                "idTipoPregunta = '" + pregunta.idTipoPregunta +
                                "WHERE idPregunta = " + idPregunta +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarPregunta(idPregunta: number): Promise<boolean> {
        let sql: string = "DELETE FROM Pregunta WHERE idPregunta = " + idPregunta;
        await pool.query(sql);
        return true;
    }

}
