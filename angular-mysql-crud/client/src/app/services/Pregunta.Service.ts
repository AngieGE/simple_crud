import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pregunta, PreguntaRequest, Usuario} from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class PreguntaService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarPreguntas(): Observable<Pregunta[]> {
    // Params
    // Params
    let params = new HttpParams();
    //FALTA ALGOO

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Pregunta[]>(`${this.manager.API_URL}/pregunta`, { params, headers } );

  }

  public crearPregunta(pregunta: PreguntaRequest): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.post<Pregunta>(`${this.manager.API_URL}/pregunta`, pregunta, { headers } );
  }

  public obtenerPregunta(idPregunta: number): Observable<Pregunta> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Pregunta>(`${this.manager.API_URL}/pregunta/${idPregunta}`, { headers } );

  }

  public actualizarPregunta(idPregunta: number, pregunta: PreguntaRequest): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<Pregunta>(`${this.manager.API_URL}/usuario/${idPregunta}`, pregunta, { headers } );

  }

  public eliminarPregunta(idPregunta: number): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.delete(`${this.manager.API_URL}/usuario/${idPregunta}`, { headers } );
  }

}
