import { CatalogoOpcion } from "../models";
import { pool } from "../database";
import { IResult } from "mssql";

export class CatalogoOpcionService {
    
    static async listarCatalogoOpciones(opcion?: string): Promise<CatalogoOpcion[]> {
        let sql: string = "SELECT * FROM CatalogoOpcion WHERE "
                   sql += opcion!=null ? "opcion = '" + opcion + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async crearCatalogoOpcion(catalogoOpcion: CatalogoOpcion): Promise<boolean> {
        let sql: string = "INSERT INTO CatalogoOpcion (opcion)" +
                            "VALUES ('"+ catalogoOpcion.opcion +"');"
        await pool.query(sql);
        return true;
        
    }

    static async obtenerCatalogoOpcion(idCatalogoOpcion: number): Promise<CatalogoOpcion> {
        let sql: string = "SELECT * FROM CatalogoOpcion WHERE idCatalogoOpcion = " + idCatalogoOpcion;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarCatalogoOpcion(idCatalogoOpcion: number, catalogoOpcion: CatalogoOpcion): Promise<boolean> {
        let sql: string = "UPDATE CatalogoOpcion SET " + 
                                "opcion = '" +  catalogoOpcion.opcion + 
                                "WHERE idCatalogoOpcion = " + idCatalogoOpcion +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarCatalogoOpcion(idCatalogoOpcion: number): Promise<boolean> {
        let sql: string = "DELETE FROM CatalogoOpcion WHERE idCatalogoOpcion = " + idCatalogoOpcion;
        await pool.query(sql);
        return true;
    }

}
