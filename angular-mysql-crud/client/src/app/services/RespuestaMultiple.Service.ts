import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaMultiple } from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class RespuestaMultipleService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  static async listarRespuestaMultiples(): Observable<RespuestaMultiple[]> {
    // Params

    // Headers

    // Request
  }

  static async crearRespuestaMultiple(respuestaMultiple: RespuestaMultiple): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async obtenerRespuestaMultiple(idRespuestaMultiple: number): Observable<RespuestaMultiple> {
    // Params

    // Headers

    // Request
  }

  static async actualizarRespuestaMultiple(idRespuestaMultiple: number, respuestaMultiple: RespuestaMultiple): Observable<any> {
    // Params

    // Headers

    // Request
  }

  static async eliminarRespuestaMultiple(idRespuestaMultiple: number): Observable<any> {
    // Params

    // Headers

    // Request
  }

}
