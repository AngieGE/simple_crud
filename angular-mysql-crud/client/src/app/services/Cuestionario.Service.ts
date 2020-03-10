import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cuestionario, Usuario} from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class CuestionarioService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarCuestionarios(idUsuario?: number, nombre?: string): Observable<Cuestionario[]> {
    // Params
    let params = new HttpParams();
    if (idUsuario !== undefined && idUsuario !== null) {
      params = params.set('idUsuario', idUsuario.toString());
      params = params.set('nombre', nombre);
    }

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Cuestionario[]>(`${this.manager.API_URL}/cuestionario`, { params, headers });
  }

  public crearCuestionario(cuestionario: Cuestionario): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return  this.http.post<Cuestionario>(`${this.manager.API_URL}/cuestionario`, cuestionario, { headers } );
  }

  public obtenerCuestionario(idCuestionario: number): Observable<Cuestionario> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Cuestionario>(`${this.manager.API_URL}/cuestionario/${idCuestionario}`, { headers } );
  }

  public actualizarCuestionario(idCuestionario: number, cuestionario: Cuestionario): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<Cuestionario>(`${this.manager.API_URL}/usuario/${idCuestionario}`, cuestionario,  { headers } );
  }

  public eliminarCuestionario(idCuestionario: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.delete(`${this.manager.API_URL}/usuario/${idCuestionario}`, { headers } );

  }

}
