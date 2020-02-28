import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Usuario } from "../models/Usuario";
import {Cuestionario} from "../models/Cuestionario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getUsuario( usuario: Usuario): Observable<any>{
    console.log( JSON.stringify(usuario));
    let us = {
      'usuario': usuario.usuario,
      'contrasena': usuario.contrasena
    };
    return this.http.get(  `${this.API_URL}/usuarios`, { params: us});
  }

  deleteUsuario(id: string){
    return this.http.delete( `${this.API_URL}/usuarios/${id}`);
  }

  saveUsuario(usuario: Usuario){
    return this.http.post(  `${this.API_URL}/usuarios`, usuario);
  }

  updateUsuario(id: string, updateUsuario: Usuario){
    return this.http.put( `${this.API_URL}/usuarios/${id}`, updateUsuario);
  }
}
