import { Usuario } from "../models";
import { pool } from "../database";
import { IResult } from "mssql";

export class UsuarioService {
    
    static async login(usuario: string, contrasena: string): Promise<Usuario> {
        let sql: string = "SELECT * FROM usuario WHERE usuario = '" + usuario + "' AND contrasena = '" + contrasena + "'; "
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async listarUsuarios(usuario?: string): Promise<Usuario[]> {
        let sql: string = "SELECT * FROM usuario WHERE "
                   sql += usuario!=null ? "usuario = '" + usuario + "' AND " : "";
                   sql += "1 = 1 ";
        const recordset = await pool.query(sql);
        return recordset.recordset;
    }

    static async crearUsuario(usuario: Usuario): Promise<boolean> {
        let sql: string = "INSERT INTO usuario (nombre, apellido, contrasena, usuario, fechaNacimiento, genero) " + 
                          "VALUES ('"+ usuario.nombre + "', '" + 
                                       usuario.apellido +"', '" + 
                                       usuario.contrasena + "', '" + 
                                       usuario.usuario + "', '" + 
                                       usuario.fechaNacimiento + "', '" + 
                                       usuario.genero + "');"
        await pool.query(sql);
        return true;
    }

    static async obtenerUsuario(idUsuario: number): Promise<Usuario> {
        let sql: string = "SELECT * FROM usuario WHERE idUsuario = " + idUsuario;
        const recordset = await pool.query(sql);
        return recordset.recordset[0];
    }

    static async actualizarUsuario(idUsuario: number, usuario: Usuario): Promise<boolean> {
        let sql: string = "UPDATE usuario SET " + 
                                "nombre = '" +  usuario.nombre + "', " +
                                "apellido = '" + usuario.apellido +"'," +
                                "contrasena = '" + usuario.contrasena + "', " +
                                "usuario = '" + usuario.usuario + "', " +
                                "fechaNacimiento = '" + usuario.fechaNacimiento + "', " +
                                "genero = '" + usuario.genero + "' " +
                                "WHERE idUsuario = " + idUsuario +" ;";
        await pool.query(sql);
        return true;
    }

    static async eliminarUsuario(idUsuario: number): Promise<boolean> {
        let sql: string = "DELETE FROM usuario WHERE idUsuario = " + idUsuario;
        await pool.query(sql);
        return true;
    }

}
