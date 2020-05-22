import { CatalogoPregunta } from "../models";
import { pool } from "../database";


export class CatalogoPreguntaService {
    
    static async listarCatalogoPreguntas(pregunta?: string): Promise<CatalogoPregunta[]> {
        let sql: string = "SELECT * FROM CatalogoPregunta WHERE "
                   sql += pregunta!=null ? "pregunta = '" + pregunta + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async crearCatalogoPregunta(catalogoPregunta: CatalogoPregunta): Promise<boolean> {
        let sql: string = "INSERT INTO CatalogoPregunta (pregunta)" +
        "VALUES ('"+ catalogoPregunta.pregunta +"');"
        await pool.query(sql);
        return true;
    }

    static async obtenerCatalogoPregunta(idCatalogoPregunta: number): Promise<CatalogoPregunta> {
        let sql: string = "SELECT * FROM CatalogoPregunta WHERE idCatalogoPregunta = " + idCatalogoPregunta;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarCatalogoPregunta(idCatalogoPregunta: number,catalogoPregunta: CatalogoPregunta): Promise<boolean> {
        let sql: string = "UPDATE CatalogoPregunta SET " + 
                                "pregunta = '" +  catalogoPregunta.pregunta + "' " +
                                "WHERE idCatalogoPregunta = " + idCatalogoPregunta +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarCatalogoPregunta(idCatalogoPregunta: number): Promise<boolean> {
        let sql: string = "DELETE FROM CatalogoPregunta WHERE idCatalogoPregunta = " + idCatalogoPregunta;
        await pool.query(sql);
        return true;
    }

}
