import { Usuario } from "../models";
import { pool } from "../database";
import { IResult } from "mssql";

export class UsuarioService {
    
    static async login(usuario: string, contrasena: string): Promise<Usuario> {
        let sql: string = "SELECT * FROM Usuario WHERE usuario = '" + usuario + "' AND contrasena = '" + contrasena + "'; "
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async listarUsuarios(usuario?: string): Promise<Usuario[]> {
        let sql: string = "SELECT * FROM Usuario WHERE "
                   sql += usuario!=null ? "usuario = '" + usuario + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async crearUsuario(usuario: Usuario): Promise<Boolean> {
        console.log("id uduario encontrado");
        let sql1: string = "SELECT idUsuario FROM Usuario WHERE usuario = '" + usuario.usuario + "'";
        const recordset = await pool.query(sql1);
        if(recordset.recordset[0] == null){
            let sql: string = "INSERT INTO Usuario (nombre, apellido, contrasena, usuario, fechaNacimiento, genero) " + 
                          "VALUES ('"+ usuario.nombre + "', '" + 
                                       usuario.apellido +"', '" + 
                                       usuario.contrasena + "', '" + 
                                       usuario.usuario + "', '" + 
                                       usuario.fechaNacimiento + "', '" + 
                                       usuario.genero + "');"
        await pool.query(sql);
        return true;
        }else{
            return false;
        }
    }

    static async obtenerUsuario(idUsuario: number): Promise<Usuario> {
        let sql: string = "SELECT * FROM Usuario WHERE idUsuario = '" + idUsuario;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarUsuario(idUsuario: number, usuario: Usuario): Promise<boolean> {
        let sql: string = "UPDATE Usuario SET " + 
                                "nombre = '" +  usuario.nombre + "', " +
                                "apellido = '" + usuario.apellido +"'," +
                                "contrasena = '" + usuario.contrasena + "', " +
                                "usuario = '" + usuario.usuario + "', " +
                                "fechaNacimiento = '" + usuario.fechaNacimiento + "', " +
                                "genero = " + usuario.genero + " " +
                                "WHERE idUsuario = " + idUsuario +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarUsuario(idUsuario: number): Promise<boolean> {
        let sql: string = "DELETE FROM Usuario WHERE idUsuario = " + idUsuario;
        await pool.query(sql);
        return true;
    }

}
