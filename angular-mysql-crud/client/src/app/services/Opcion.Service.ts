import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Opcion, OpcionRequest, Usuario} from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class OpcionService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarOpcions(): Observable<Opcion[]> {
    // Params
    let params = new HttpParams();
    //ALGO MAAAS

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Opcion[]>(`${this.manager.API_URL}/opcion`, { params, headers } );
  }

  public crearOpcion(opcion: OpcionRequest): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.post<Usuario>(`${this.manager.API_URL}/opcio`, opcion, { headers } );
  }

  public obtenerOpcion(idOpcion: number): Observable<Opcion> {
    // Params

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Opcion>(`${this.manager.API_URL}/opcion/${idOpcion}`, { headers } );

  }

  public actualizarOpcion(idOpcion: number, opcion: OpcionRequest): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<Opcion>(`${this.manager.API_URL}/opcion/${idOpcion}`, opcion, { headers } );

  }

  public eliminarOpcion(idOpcion: number): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.delete(`${this.manager.API_URL}/opcion/${idOpcion}`, { headers } );

  }

}
