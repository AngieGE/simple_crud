import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerService } from './Manager.Service';

import {Aplicacion, Usuario} from '../models';


/**
Cuestionario -> idUsuario, nombre
listarCatalogoOpciones(descripcion?: string)
listarCatalogoPreguntas(pregunta?: string)
listarCuestionarios(idUsuario?: number, nombre?: string)
 */

@Injectable({ providedIn: 'root' })
export class AplicacionService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarAplicaciones(idUsuario?: number, idCuestionario?: number): Observable<Aplicacion[]> {
    // Params
    let params = new HttpParams();
    if (idUsuario !== undefined && idUsuario !== null) {
      params = params.set('idUsuario', idUsuario.toString());
    }
    if (idCuestionario !== undefined && idCuestionario !== null) {
      params = params.set('idCuestionario', idCuestionario.toString());
    }

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.get<Aplicacion[]>(`${this.manager.API_URL}/aplicacion`, { params, headers } );

  }

  public crearAplicacion(aplicacion: Aplicacion): Observable<any> {
    console.log('Si llego a Aplicacion service front');
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.post<Aplicacion>(`${this.manager.API_URL}/aplicacion`, aplicacion, { headers } );

  }

  public obtenerAplicacion(idAplicacion: number): Observable<Aplicacion> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Aplicacion>(`${this.manager.API_URL}/aplicacion/${idAplicacion}`, { headers } );

  }

  public actualizarAplicacion(idAplicacion: number, aplicacion: Aplicacion): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.put<Aplicacion>(`${this.manager.API_URL}/usuario/${idAplicacion}`, aplicacion, { headers } );

  }

  public eliminarAplicacion(idAplicacion: number): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.delete(`${this.manager.API_URL}/usuario/${idAplicacion}`, { headers } );
  }

}
