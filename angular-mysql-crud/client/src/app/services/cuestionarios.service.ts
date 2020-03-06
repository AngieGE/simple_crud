import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cuestionario } from '../models/Cuestionario';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CuestionariosService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUserCuestionarios(id:string){
    return this.http.get(`${this.API_URL}/cuestionarios/${id}`);
  }

  getCuestionarios(){
    return this.http.get(  `${this.API_URL}/cuestionarios`);
  }

  deleteCuestionario(id: string){
    return this.http.delete( `${this.API_URL}/cuestionarios/${id}`);
  }

  saveCuestionario(cuestionario: Cuestionario){
    return this.http.post(  `${this.API_URL}/cuestionarios`, cuestionario);
  }

  updateCuestionario(id: string, updatedCuestionario: Cuestionario){
    return this.http.put( `${this.API_URL}/cuestionarios/${id}`, updatedCuestionario);
  }
}
