import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaAbierta } from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class RespuestaAbiertaService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  static async listarRespuestaAbiertas(): Observable<RespuestaAbierta[]> {
    // Params

    // Headers

    // Request
  }

  static async crearRespuestaAbierta(respuestaAbierta: RespuestaAbierta): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async obtenerRespuestaAbierta(idRespuestaAbierta: number): Observable<RespuestaAbierta> {
    // Params

    // Headers

    // Request
  }

  static async actualizarRespuestaAbierta(idRespuestaAbierta: number, respuestaAbierta: RespuestaAbierta): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async eliminarRespuestaAbierta(idRespuestaAbierta: number): Observable<any> {
    // Params

    // Headers

    // Request
  }

}
