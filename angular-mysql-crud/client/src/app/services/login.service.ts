import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/Usuario";
import {Cuestionario} from "../models/Cuestionario";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URL}/usuarios/`);

  }

  getUsuario(id: string){
    return this.http.get(  `${this.API_URL}/usuarios/${id}`);
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
