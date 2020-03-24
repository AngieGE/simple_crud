import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Opcion, OpcionRequest, Usuario} from '../models';
import { ManagerService } from './Manager.Service';
/**
Cuestionario -> idUsuario, nombre
listarCatalogoOpciones(descripcion?: string)
listarCatalogoPreguntas(pregunta?: string)
listarCuestionarios(idUsuario?: number, nombre?: string)
 */

@Injectable({ providedIn: 'root' })
export class OpcionService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarOpcions(idCatalogoOpcion?: number, idPregunta?: number): Observable<Opcion[]> {
    // Params
    let params = new HttpParams();
    if (idCatalogoOpcion !== undefined && idCatalogoOpcion !== null) {
      params = params.set('idCatalogoOpcion', idCatalogoOpcion.toString());
    }
    if (idPregunta !== undefined && idPregunta !== null) {
      params = params.set('idPregunta', idPregunta.toString());
    }

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
    return this.http.post<Usuario>(`${this.manager.API_URL}/opcion`, opcion, { headers } );
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
    console.log(idOpcion);
    console.log(opcion);
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
