import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta, PreguntaRequest } from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class PreguntaService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  static async listarPreguntas(): Observable<Pregunta[]> {
    // Params

    // Headers

    // Request
  }

  static async crearPregunta(pregunta: PreguntaRequest): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async obtenerPregunta(idPregunta: number): Observable<Pregunta> {
    // Params

    // Headers

    // Request
  }

  static async actualizarPregunta(idPregunta: number, pregunta: PreguntaRequest): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async eliminarPregunta(idPregunta: number): Observable<any> {
    // Params

    // Headers

    // Request
  }

}
