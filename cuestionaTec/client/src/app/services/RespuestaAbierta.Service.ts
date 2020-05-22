import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {RespuestaAbierta, Usuario} from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class RespuestaAbiertaService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarRespuestaAbiertas(idAplicacion?: number, idPregunta?: number): Observable<RespuestaAbierta[]> {
    // Params
    let params = new HttpParams();
    if (idAplicacion !== undefined && idAplicacion !== null) {
      params = params.set('idAplicacion', idAplicacion.toString());
    }
    if (idPregunta !== undefined && idPregunta !== null) {
      params = params.set('idPregunta', idPregunta.toString());
    }


    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<RespuestaAbierta[]>(`${this.manager.API_URL}/respuestaAbierta`, { params, headers } );

  }

  public crearRespuestaAbierta(respuestaAbierta: RespuestaAbierta): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.post<RespuestaAbierta>(`${this.manager.API_URL}/respuestaAbierta`, respuestaAbierta, { headers } );

  }

  public obtenerRespuestaAbierta(idRespuestaAbierta: number): Observable<RespuestaAbierta> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<RespuestaAbierta>(`${this.manager.API_URL}/respuestaAbierta/${idRespuestaAbierta}`, { headers } );

  }

  public actualizarRespuestaAbierta(idRespuestaAbierta: number, respuestaAbierta: RespuestaAbierta): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<RespuestaAbierta>(`${this.manager.API_URL}/respuestaAbierta/${idRespuestaAbierta}`, respuestaAbierta, { headers } );

  }

  public eliminarRespuestaAbierta(idRespuestaAbierta: number): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.delete(`${this.manager.API_URL}/respuestaAbierta/${idRespuestaAbierta}`, { headers } );

  }

}
