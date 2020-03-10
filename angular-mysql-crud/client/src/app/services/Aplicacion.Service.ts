import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerService } from './Manager.Service';

import {Aplicacion, Usuario} from '../models';

@Injectable({ providedIn: 'root' })
export class AplicacionService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarAplicaciones(): Observable<Aplicacion[]> {
    // Params
    let params = new HttpParams();
    //aqui falta algo

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.get<Aplicacion[]>(`${this.manager.API_URL}/aplicacion`, { params, headers } );

  }

  public crearAplicacion(aplicacion: Aplicacion): Observable<any> {
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
