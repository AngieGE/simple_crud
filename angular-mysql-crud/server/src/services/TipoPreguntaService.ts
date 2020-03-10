import { TipoPregunta } from "../models";
import { pool } from "../database";


export class TipoPreguntaService {
    
    static async listarTipoPreguntaes(): Promise<TipoPregunta[]> {
        return new Array<TipoPregunta>();
    }

    static async crearTipoPregunta(tipoPregunta: TipoPregunta): Promise<boolean> {
        let sql: string = "INSERT INTO TipoPregunta (tipo)" +
                          "VALUES ('"+ tipoPregunta.tipo + "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerTipoPregunta(idTipoPregunta: number): Promise<TipoPregunta> {
        let sql: string = "SELECT * FROM TipoPregunta WHERE idTipoPregunta = " + idTipoPregunta;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarTipoPregunta(idTipoPregunta: number,tipoPregunta: TipoPregunta): Promise<boolean> {
        let sql: string = "UPDATE TipoPregunta SET " + 
                                "tipo = '" +  tipoPregunta.tipo + 
                                "WHERE idTipoPregunta = " + idTipoPregunta +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarTipoPregunta(idTipoPregunta: number): Promise<boolean> {
        let sql: string = "DELETE FROM TipoPregunta WHERE idTipoPregunta = " + idTipoPregunta;
        await pool.query(sql);
        return true;
    }

}
